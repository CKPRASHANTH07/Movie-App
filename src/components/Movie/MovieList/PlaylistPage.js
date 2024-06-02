import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PlaylistPage = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.post(
                'http://localhost:3003/playlist/get-playlist',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (Array.isArray(response.data)) {
                setPlaylists(response.data);
            } else {
                console.error('Response data is not an array:', response.data);
                // Handle the case where the response is not an array
                // For example, you can set playlists to an empty array
                setPlaylists([]);
            }
        } catch (err) {
            console.error('Error fetching playlists:', err);
            // Handle the error condition
            // For example, you can set playlists to an empty array
            setPlaylists([]);
        }
    };

    return (
        <div>
            <h1 className="text-center text-4xl my-10">All Playlists</h1>
            <ul className="flex flex-wrap justify-center">
                {playlists.map((playlist) => (
                    <li key={playlist.uniqueId}>
                        <Link to={`/playlist/${playlist.uniqueId}`}>{playlist.name_of_the_playlist}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistPage;
