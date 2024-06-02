import React, { useEffect, useState } from 'react';
import MovieApi from '../../api/Movieapi.js';
import { API } from '../../api/MovieapisKey.js';
import MovieCard from './MovieList/MovieCard.js';
import MovieDetails from './MovieList/MovieDetails.js';
import axios from 'axios';
const PlayList = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async () => {
        try{
            const token = localStorage.getItem('accessToken');
            const response = await axios.post(
                'http://localhost:3003/playlist/get-playlist',
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
        const movieTitles = response.data.MoviesInfo;
        const moviePromises = movieTitles.map(movie => axios.get(`http://www.omdbapi.com/?apikey=${API}&t=${movie}`));
        const movieDetails = await Promise.all(moviePromises);
        setMovies(movieDetails.map(detail => detail.data));
        console.log(movieDetails);
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
        fetchMovies();
    }, []);

    const handleMovieClick = (movieId) => {
        fetchMovieDetails(movieId);
    };

    return (
        <div>
           
            <h1 className='text-center text-4xl my-10'>Your PlayList</h1>
            <ul className='flex flex-wrap justify-center'>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onClick={() => handleMovieClick(movie.imdbID)}
                    />
                ))}
            </ul>
            {selectedMovie && (
                <MovieDetails
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
};

export default PlayList;
