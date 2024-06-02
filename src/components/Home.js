import React from 'react';
import { Link } from 'react-router-dom';
import bggm from '../images/bggm.jpg'
import bggm1 from '../images/bggm1.jpg'


const Home = () => {
  return (
    <div>
      <div className='p-2 h-[600px] md:p-32 space-y-8 space-x-4 relative bg-gradient-to-br from-black to-orange-400/40'>
      <img src={bggm1} alt='' className='absolute inset-0 w-full h-full object-cover z-0' />
        <div className='relative z-10 backdrop-blur-md space-y-10 bg-white/60 shadow-2xl rounded-2xl p-10'>
          <h1 className='text-4xl md:text-5xl text-center font-bold'>Welcome to MovieMania</h1>
          <p className='text-center text-2xl text-orange-500'>
            Discover and explore a world of movies. Find your favorite films, get detailed information, and create your personal watchlist.
          </p>
          <div className='space-x-4 text-center'>
            <Link to='/signin' className=' bg-black text-white p-3 rounded-2xl'>Sign In</Link>
            <Link to='/Signup' className='bg-white text-black p-3 rounded-2xl'>Sign Up</Link>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-[#E64F39] to-blue-950 md:p-20 p-8 text-white'>
        <h1 className='text-4xl md:text-5xl text-center font-bold'>Explore Movie Features</h1>
        <div className='flex lg:flex-row flex-col items-center p-20'>
          <div className='w-[400px] m-4'>
            <h2>Trending Movies</h2>
            <p>Stay updated with the latest trending movies. Get recommendations based on what's popular right now.</p>
          </div>
          <div className='w-[400px] m-4'>
            <h2>Search & Discover</h2>
            <p>Find movies by title, genre, or release date. Discover new films to watch and enjoy.</p>
          </div>
          <div className='w-[400px] m-4'>
            <h2>Create Watchlists</h2>
            <p>Keep track of movies you want to watch. Create and manage your own watchlists easily.</p>
          </div>
        </div>
      </div>

      <div className='relative bg-transparent py-24'>
        <div className='relative z-10 py-24 bg-black/70'>
          <h1 className='mb-6 backdrop-blur-md text-center text-white text-4xl md:text-5xl'>Your Personal Movie Companion</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20'>
            <figure className='flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md'>
              <blockquote className='max-w-md mx-auto mb-4 lg:mb-8'>
                <h2 className='text-xl font-semibold mb-4'>Detailed Information</h2>
                <p>Get comprehensive details about each movie, including cast, plot summaries, and ratings.</p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md'>
              <blockquote className='max-w-md mx-auto mb-4 lg:mb-8'>
                <h2 className='text-xl font-semibold mb-4'>Reviews & Ratings</h2>
                <p>Read reviews and see ratings from other users. Share your own opinions about the movies you watch.</p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md'>
              <blockquote className='max-w-md mx-auto mb-4 lg:mb-8'>
                <h2 className='text-xl font-semibold mb-4'>User Community</h2>
                <p>Join a community of movie enthusiasts. Discuss and share your favorite films with others.</p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md'>
              <blockquote className='max-w-md mx-auto mb-4 lg:mb-8'>
                <h2 className='text-xl font-semibold mb-4'>Personal Recommendations</h2>
                <p>Receive personalized movie recommendations based on your watch history and preferences.</p>
              </blockquote>
            </figure>
          </div>
        </div>
        <img src={bggm} alt='' className='absolute inset-0 w-full h-full object-cover z-0' />
      </div>

      <section className='py-10 sm:py-16 lg:py-24 relative bg-gradient-to-b from-blue-800 to-yellow-200'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 z-10 bg-black/30 rounded-xl p-10'>
          <h1 className='pt-10 text-4xl md:text-5xl text-center'>Discover New Movies</h1>
          <div className='max-w-2xl mx-auto text-center'></div>
          <ul className='max-w-md mx-auto mt-16 space-y-12'>
            <li className='relative flex items-start'>
              <div className='-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full' aria-hidden='true'></div>
              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg className='w-10 h-10 text-fuchsia-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </div>
              <div className='ml-6'>
                <h2>Explore</h2>
                <p>Dive into our extensive database of movies, spanning a wide range of genres and eras.</p>
              </div>
            </li>
            <li className='relative flex items-start'>
              <div className='-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full' aria-hidden='true'></div>
              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg className='w-10 h-10 text-fuchsia-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' />
                </svg>
              </div>
              <div className='ml-6'>
                <h2>Apply</h2>
                <p>Easily add movies to your watchlist and track what you want to see next.</p>
              </div>
            </li>
            <li className='relative flex items-start'>
              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg className='w-10 h-10 text-fuchsia-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <div className='ml-6'>
                <h2>Connect</h2>
                <p>Engage with a community of movie lovers. Share your reviews and connect with others.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
