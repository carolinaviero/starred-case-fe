import React from 'react';
import { useParams } from 'react-router-dom';
import { Job } from './Job'; 

export const JobDetails = ({ jobs, handleAddToFavorites }) => {
  const { id } = useParams(); 
  const selectedJob = jobs.find(job => job.id === parseInt(id));

  if (!selectedJob) return <div>Job not found</div>;

  return <Job job={selectedJob} handleAddToFavorites={handleAddToFavorites} />;
};
