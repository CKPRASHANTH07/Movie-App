import React, { useEffect, useState } from 'react';
import MovieApi from '../api/Movieapi';
import { API } from '../api/MovieapisKey';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movietext = 'singam';
        const fetchMovies = async () => {
            try {
                const response = await MovieApi.get(`?apikey=${API}&s=${movietext}&type=movie`);
                setMovies(response.data.Search); // Assuming the response structure
                console.log(response)
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h1 className='text-center text-4xl my-10'>Movie List</h1>
            <ul className='flex flex-wrap justify-center'>
                {movies.map((movie) => (
                    <li 
                        key={movie.imdbID} 
                        className='bg-gray-500  m-4 w-64 h-96 bg-cover bg-center text-white flex flex-col justify-end rounded-2xl  hover:border-8 border-black' 
                        style={{ backgroundImage: `url(${movie.Poster})` }}
                    >
                        <div className='bg-black rounded-b-2xl bg-opacity-70'>
                        <h2 className='text-2xl p-1 h-24'>{movie.Title}</h2>
                        <p className=' p-2 rounded-2xl'>{movie.Year}</p>
                        </div></li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
