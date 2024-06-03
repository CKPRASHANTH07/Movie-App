import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../../api/MovieapisKey.js';
import MovieCard from './MovieCard.js';
import axios from 'axios';
const PlayList = () => {
    const {uuid}=useParams()
    const [playlist, setPlaylist] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [name,setplaylistName]=useState('')

    const fetchplay_name=async()=>{
        const token = localStorage.getItem('accessToken');
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}playlist/get-playlist?uuid=${uuid}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response.data.playlist_name)
            setplaylistName(response.data.playlist_name)
            if(response.data.status && response.data.status === "Requested Playlist is Private"){
                alert('Private Playlist cannot be accessed')
            }
    }

    const fetchMovies=(data)=>{
        setPlaylist(data)
        setSelectedMovie(data)
    }
    
    const fetchPlaylists = async () => {
        try{
            const token = localStorage.getItem('accessToken');
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}playlist/get-playlist?uuid=${uuid}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response.data.MoviesInfo)
        const playlist_titles = response.data.MoviesInfo
        const moviePromises = playlist_titles.map(movie => axios.get(`http://www.omdbapi.com/?apikey=${API}&t=${movie}`));
        const movieDetails = await Promise.all(moviePromises);
        console.log(movieDetails)
        setMovies(movieDetails);
    } catch (err) {
        console.log(err);
    }
    };

    useEffect(() => {
        fetchPlaylists();
        fetchplay_name()
    }, []);
   
    const handleClosePopup = () => {
        setSelectedMovie(null);
    };

    const handleMovieClick = (movieId) => {
        console.log(movieId,"hop")
        fetchMovies(movieId);
        console.log(playlist)
    };
    console.log('Selected Movies:', playlist);
    return (
        <div>
           
            <h1 className='text-center text-4xl my-10'>Your PlayList</h1>
            <ul className='flex flex-wrap justify-center'>
                    <MovieCard
                        movie={name}
                        onClick={() => handleMovieClick(movies)}
                        showShareButton={false}
                        uuid={playlist}
                    />
                
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
