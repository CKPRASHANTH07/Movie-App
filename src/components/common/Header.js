import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <div className='bg-black h-20 text-white text-center flex '>
        <Link to="/" className='mr-3 ml-3 mt-7'>Movie-App</Link>
        <Link to="/movieList" className='mr-3 mt-7'>MovieList</Link>
        <Link to="/AddPlaylist" className='mr-3 mt-7'>AddPlaylist</Link>
        <Link to="/PlayList" className='mr-3 mt-7'>PlayList</Link>

        <Link to="/Lists" className='mr-3 mt-7'>Lists</Link>
        <p className='mr-3 mt-7'>Profile</p>

        </div>
        </div>
  )
}

export default Header