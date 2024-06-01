import React from 'react';

const MovieCard = ({ movie, onClick }) => (
    <li
        onClick={onClick}
        className='bg-gray-500 m-4 w-64 h-96 bg-cover bg-center text-white flex flex-col justify-end rounded-2xl hover:border-4 border-black hover:brightness-100 brightness-75 cursor-pointer'
        style={{ backgroundImage: `url(${movie.Poster})` }}
    >
        <div className='bg-black rounded-b-2xl bg-opacity-70'>
            <h2 className='text-2xl p-1 h-24'>{movie.Title}</h2>
            <div className='flex gap-40'>
                <p className='p-2 rounded-2xl'>{movie.Year}</p>
                <button className='text-green-400 hover:text-green-800'>SAVE</button>
            </div>
        </div>
    </li>
);

export default MovieCard;
