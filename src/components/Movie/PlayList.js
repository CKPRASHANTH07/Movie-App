import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieList/MovieCard.js';
import { API } from '../../api/MovieapisKey.js';

const PlayList = () => {
    console.log(process.env.REACT_APP_BASE_URL)
    const [playlist, setPlaylist] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState(null);

    const fetchMovies = async (movieTitles) => {
        try {
            const moviePromises = movieTitles.map(movie => axios.get(`http://www.omdbapi.com/?apikey=${API}&t=${movie}`));
            const movieDetails = await Promise.all(moviePromises);
            setMovies(movieDetails.map(detail => detail.data));
            setSelectedMovies(movieDetails.map(detail => detail.data));
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPlaylists = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}playlist/get-playlist`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            setPlaylist(response.data.playlists);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const handleClosePopup = () => {
        setSelectedMovies(null);
    };

    const handleMovieClick = (movieTitles) => {
        fetchMovies(movieTitles);
    };

    return (
        <div>
            <h1 className='text-center text-4xl my-10'>Your PlayList</h1>
            <ul className='flex flex-wrap justify-center'>
                {playlist.map((playlistItem) => (
                    <MovieCard
                        key={playlistItem.imdbID}
                        movie={playlistItem.playlistName}
                        onClick={() => handleMovieClick(playlistItem.MoviesInfo)}
                        showShareButton={true}
                        uuid={playlist}
                    />
                ))}
            </ul>
            {selectedMovies && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg relative max-h-full overflow-y-auto">
                        <button 
                            className="absolute top-2 right-2 text-black text-2xl font-bold" 
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        {selectedMovies.map((movie, index) => (
                            <div key={index} className="mb-4">
                                <h2 className='text-4xl mb-4 font-bold'>{movie.Title}</h2>
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayList;
