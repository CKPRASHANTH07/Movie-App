import React, { useEffect, useState } from 'react';
import MovieApi from '../api/Movieapi';
import { API } from '../api/MovieapisKey';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async (movietext) => {
        try {
            const response = await MovieApi.get(`?apikey=${API}&s=${movietext}&type=movie`);
            setMovies(response.data.Search || []); 
        } catch (err) {
            console.log(err);
        }
    };

    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await MovieApi.get(`?apikey=${API}&i=${movieId}`);
            setSelectedMovie(response.data); 
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMovies('Singam'); 
    }, []);

    const handleSearch = () => {
        if (searchTerm) {
            fetchMovies(searchTerm);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleMovieClick = (movieId) => {
        fetchMovieDetails(movieId);
    };

    return (
        <div>
            <div className='h-8 mt-6 w-96 bg-white rounded-xl flex border-2 border-gray-400 ml-20 pl-2 '>
                <input
                    placeholder='Search'
                    className='w-80 text-black pl-2'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className='text-black h-8 w-12 hover:bg-slate-200 rounded-xl ml-10'
                    onClick={handleSearch}
                >
                    ?
                </button>
            </div>
            <h1 className='text-center text-4xl my-10'>Movie List</h1>
            <ul className='flex flex-wrap justify-center'>
                {movies.map((movie) => (
                    <li
                        key={movie.imdbID}
                        onClick={() => handleMovieClick(movie.imdbID)}
                        className='bg-gray-500 m-4 w-64 h-96 bg-cover bg-center text-white flex flex-col justify-end rounded-2xl hover:border-8 border-black cursor-pointer'
                        style={{ backgroundImage: `url(${movie.Poster})` }}
                    >
                        <div className='bg-black rounded-b-2xl bg-opacity-70'>
                            <h2 className='text-2xl p-1 h-24'>{movie.Title}</h2>
                            <p className='p-2 rounded-2xl'>{movie.Year}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedMovie && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center'>
                    <div className='bg-white p-8 rounded-lg max-w-md mx-auto'>
                        <button className='mb-4' onClick={() => setSelectedMovie(null)}>Close</button>
                        <h2 className='text-3xl mb-4'>{selectedMovie.Title}</h2>
                        <img src={selectedMovie.Poster} alt={selectedMovie.Title} className='mb-4' />
                        <p><strong>Year:</strong> {selectedMovie.Year}</p>
                        <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
                        <p><strong>Director:</strong> {selectedMovie.Director}</p>
                        <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
                        <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieList;
