import React, { useEffect, useState } from 'react';
import MovieApi from '../../api/Movieapi.js';
import { API } from '../../api/MovieapisKey.js';
import MovieCard from './MovieList/MovieCard.js';
import MovieDetails from './MovieList/MovieDetails.js';
import axios from 'axios';
import MovieDetails_main from './MovieList/movieDetails_main.js';
import { BASE_URL } from '../../config_env.js';
const PlayList = () => {
    const [playlist, setPlaylist] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    const fetchMovies = async (data) => {
        try{
            // const token = localStorage.getItem('accessToken');
            // const response = await axios.post(
            //     'http://localhost:3003/playlist/get-playlist',
            //     {},
            //     {
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     }
            // );
            console.log(data)
        const movieTitles = data
        const moviePromises = movieTitles.map(movie => axios.get(`http://www.omdbapi.com/?apikey=${API}&t=${movie}`));
        const movieDetails = await Promise.all(moviePromises);
        console.log(movieDetails,"movieDetals")
        setMovies(movieDetails.map(detail => detail.data));
        console.log(movies,"setmovies")
        console.log(movieDetails.data)
        setSelectedMovie(movieDetails);
        console.log(movieDetails);
    } catch (err) {
        console.log(err);
    }
    };

    const fetchPlaylists = async () => {
        try{
            const token = localStorage.getItem('accessToken');
            const response = await axios.post(
               `http://localhost:3003/playlist/get-playlist`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response.data.playlists)
        // const playlist_titles = response.data.playlists.map(playlist => playlist.playlistName).flat();
        // const moviePromises = movieTitles.map(movie => axios.get(`http://www.omdbapi.com/?apikey=${API}&t=${movie}`));
        // const movieDetails = await Promise.all(moviePromises);
        setPlaylist(response.data.playlists);
        // fetchMovies(response.data.playlists);
        // console.log(playlist_titles);
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

    // useEffect(() => {
    //     fetchMovies();
    // }, []);
    useEffect(() => {
        fetchPlaylists();
    }, []);
    const handleClosePopup = () => {
        setSelectedMovie(null);
    };

    const handleMovieClick = (movieId) => {
        console.log(movieId,"hop")
        fetchMovies(movieId);
    };
    console.log('Selected Movies:', selectedMovie);
    return (
        <div>
           
            <h1 className='text-center text-4xl my-10'>Your PlayList</h1>
            <ul className='flex flex-wrap justify-center'>
                {playlist.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie.playlistName}
                        onClick={() => handleMovieClick(movie.MoviesInfo)}
                        showShareButton={true}
                        uuid={playlist}
                    />
                ))}
            </ul>
            {selectedMovie && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg relative">
                        <button 
                            className="absolute top-2 right-2 text-black text-2xl font-bold" 
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        {selectedMovie.map((movie, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="text-2xl">{movie.data.Title}</h2>
                                <p><strong>Year:</strong> {movie.data.Year}</p>
                                <p><strong>Genre:</strong> {movie.data.Genre}</p>
                                <p><strong>Plot:</strong> {movie.data.Plot}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


export default PlayList;
