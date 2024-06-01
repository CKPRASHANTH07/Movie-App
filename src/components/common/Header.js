import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='pb-10'>
    <div className='bg-black h-20 text-white text-center flex '>
        <Link to="/" className='m-4 mt-7'>Movie-App</Link>
        <p className='m-4 mt-7'>Your Lists</p>
        <p className='m-4 mt-7'>Global Lists</p>
        <p className='m-4 mt-7'>Profile</p>

        </div>
        </div>
  )
}

export default Header