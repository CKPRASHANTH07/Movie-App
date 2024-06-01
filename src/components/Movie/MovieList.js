import React, { useEffect, useState } from 'react';
import MovieApi from '../../api/Movieapi';
import { API } from '../../api/MovieapisKey';
import SearchBar from './MovieList/SearchBar';
import MovieCard from './MovieList/MovieCard';
import MovieDetails from './MovieList/MovieDetails';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async (movietext) => {
        try {
            const response = await MovieApi.get(`?apikey=${API}&s=${movietext}&type=movie`);
            setMovies(response.data.Search || []);
            console.log(response);
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
        fetchMovies('Batman');
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
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleKeyPress={handleKeyPress}
            />
            <h1 className='text-center text-4xl my-10'>Movie List</h1>
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

export default MovieList;
