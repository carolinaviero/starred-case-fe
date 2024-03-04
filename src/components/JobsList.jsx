import React from 'react';
import { Job } from './Job'

export const JobsList = ({ jobs, isLoggedIn, handleAddToFavorites }) => (
    <>
        <h1>Find a job!</h1>
        {jobs?.map((job) => <Job key={job.id} job={job} handleAddToFavorites={handleAddToFavorites} isLoggedIn={isLoggedIn}/>)}
    </>
);