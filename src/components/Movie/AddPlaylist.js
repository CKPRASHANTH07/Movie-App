import React, { useState } from 'react';
import axios from 'axios';

const AddPlaylist = () => {
  const [username, setUsername] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [movies, setMovies] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/playlist/add-playlist', {
        username,
        playlist_name: playlistName,
        movies: movies.split(',').map(movie => movie.trim()),
        isPublic
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Playlist added successfully!');
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-black/70 my-20 w-[500px] md:ml-[500px] p-10 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 rounded-md"
          />
        </div>
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
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
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
