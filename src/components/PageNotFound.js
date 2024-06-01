import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-20">Error : Page Not Found !</h2>
            <Link to="/movieList" className="max-w-xl mx-auto mt-10 text-base leading-relaxed text-green-500 hover:animate-pulse">Click Me! to get redirectedto home page</Link>
        </div>
    </div>
</section>

  )
}

export default PageNotFound