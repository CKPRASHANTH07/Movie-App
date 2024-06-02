import React from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
const Header = () => {
  var cookie=localStorage.getItem('accessToken')
  let username=jwtDecode(cookie)
  return (
    <div>
      <div className='bg-black h-20 text-white text-center flex justify-between items-center px-4'>
        <div className="flex">
          <Link to="/movieList" className='mr-3 mt-7'>MovieList</Link>
          <Link to="/AddPlaylist" className='mr-3 mt-7'>Create Playlists</Link>
          <Link to="/PlayList" className='mr-3 mt-7'>My PlayLists</Link>
        </div>
        <div className="flex items-center">
          {username && (
            <p className='mr-3 mt-7'>Logged in: {username.username}</p>
          )}
        </div>
      </div>
    </div>
  );
};

  
export default Header