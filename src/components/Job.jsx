import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Job = ({ job, isLoggedIn, handleAddToFavorites }) => {
    const navigate = useNavigate(); 
    const { id: idParam } = useParams(); 
    const { area, description, id, isFavorite: isFavoriteJob, state, streetAddress, title, type } = job;
    const [isFavorite, setIsFavorite] = useState(isFavoriteJob);

    const handleFavoriteClick = (id) => {
        setIsFavorite(!isFavorite);
        handleAddToFavorites(id);
    };

    return (
            <div className='job'>
                {<button onClick={() => isLoggedIn ? handleFavoriteClick(id) : navigate('/login')}>
                    {isFavorite ? '❤️' : '🤍'}
                </button>}
                <Link to={{ pathname: `/${id}` }}>
                        <h4>{title}, {state}</h4>
                        {idParam && <p>{description}, {type}, {area}</p>}
                        {idParam && <p>{streetAddress}</p>}
                </Link>
            </div>
    )
}
