import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { BASE_URL } from '../../config_env';
const AddPlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [movies, setMovies] = useState('');
  const [isPublic, setIsPublic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var cookie=localStorage.getItem('accessToken')
      let username=jwtDecode(cookie)
      console.log(isPublic,'boolean')
      await axios.post(`${BASE_URL}playlist/add-playlist`, {
        username:username.username,
        playlist_name: playlistName,
        movies: movies.split(',').map(movie => movie.trim()),
        isPublic:isPublic
      }, {
        headers: {
          Authorization: `Bearer ${cookie}`
        }
      });
      setMessage('Playlist added successfully!');
    } catch (err) {
      console.log(err)
      setMessage('Playlist Already exists. Try new name');
    }
  };

  return (
    <div className="bg-black/70 my-20 w-[500px] md:ml-[500px] p-10 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">Playlist Name:</label>
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-2">Movies (comma-separated):</label>
          <input
            type="text"
            value={movies}
            onChange={(e) => setMovies(e.target.value)}
            required
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white mr-2">Public:</label>
          <input
            type="checkbox"
            checked={isPublic==='True'}
            onChange={(e) => setIsPublic(e.target.checked?'True':'False')}
            className="rounded-md"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Add Playlist
        </button>
      </form>
      {message && <p className="mt-4 text-white">{message}</p>}
    </div>
  );
};

export default AddPlaylist;
