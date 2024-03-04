import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { JobsList } from './components/JobsList';
import { FavoriteJobs } from './components/FavoriteJobs';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { JobDetails } from './components/JobDetails';
import './App.css';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(jobs.filter(job => job.isFavorite));

  useEffect(() => {
    fetch('/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data.data.map((job) => ({ ...job, isFavorite: false }))));
  }, []);

  const handleAddToFavorites = (id) => {
    const updatedJobs = jobs.map(job => {
      if (job.id === id) {
        return { ...job, isFavorite: !job.isFavorite };
      }
      return job;
    });

    setJobs(updatedJobs);
    setFavorites(updatedJobs.filter(job => job.isFavorite))
  };

  return (
    <div className='container'>
      <NavBar numberOfFavoriteJobs={favorites?.length} />
      <Routes>
        <Route path='/' element={<JobsList jobs={jobs} isLoggedIn={Boolean(user)} handleAddToFavorites={handleAddToFavorites} />} />
        <Route path='/:id' element={<JobDetails jobs={jobs} isLoggedIn={Boolean(user)} handleAddToFavorites={handleAddToFavorites} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/favorites' element={<FavoriteJobs isLoggedIn={Boolean(user)} favoriteJobs={favorites} handleAddToFavorites={handleAddToFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;