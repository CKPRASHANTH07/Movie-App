import React from 'react'

const Header = () => {
  return (
    <div className='pb-10'>
    <div className='bg-black h-20 text-white text-center flex'>
        <p className='p-6'>Movie-App</p>
        <div className='h-8 mt-6 w-96 bg-white'>
        <input placeholder='Search' className='w-80 text-black pl-2'>
        </input>
        <button className='text-black h-8 w-8 bg-white'>?</button>
        </div>
        </div>
        </div>
  )
}

export default Header