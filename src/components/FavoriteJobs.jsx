import React from 'react';
import { useNavigate } from 'react-router';
import { Job } from './Job';

export const FavoriteJobs = ({ favoriteJobs, isLoggedIn, handleAddToFavorites }) => {
    const navigate = useNavigate();

    return (
        <div className='job-list'>
            {favoriteJobs?.map((job) => (
                <Job 
                    key={job.id} 
                    isLoggedIn={isLoggedIn}
                    handleAddToFavorites={handleAddToFavorites}
                    job={job}
                />
            ))}
            {isLoggedIn ? 
                !favoriteJobs.length && <p>No favorites yet</p> : 
                <>
                    <p>Please log in to see your favorites</p>
                    <button className='login-button' onClick={() => navigate('/login')}>Login</button>
                </>
            }
        </div>
)};