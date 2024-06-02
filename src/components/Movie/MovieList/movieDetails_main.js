import React from 'react';

const MovieDetails_main = ({ movie, onClose }) => (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center'>
        <div className='bg-black text-white border-2 p-8 rounded-lg'>
            <button
                className='absolute top-4 right-4 text-white p-1 rounded-xl bg-red-500 hover:bg-red-700'
                onClick={onClose}
            >
                Close
            </button>
            <h2 className='text-2xl mb-4 font-bold'>Selected Movies</h2>
            <div className="grid grid-cols-2 gap-4">
                    <div  className='bg-gray-800 p-4 rounded-lg'>
                        <h2 className='text-xl mb-2 font-semibold'>{movie.Title}</h2>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                        <p><strong>Rated:</strong> {movie.Rated}</p>
                        <p><strong>Released:</strong> {movie.Released}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>Writer:</strong> {movie.Writer}</p>
                        <p><strong>Language:</strong> {movie.Language}</p>
                        <p><strong>Country:</strong> {movie.Country}</p>
                        <p><strong>Awards:</strong> {movie.Awards}</p>
                        <p><strong>imdbRating:</strong> {movie.imdbRating}</p>
                        <p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
                    </div>
            </div>
        </div>
    </div>
);

export default MovieDetails_main;
