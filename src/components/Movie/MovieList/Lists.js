import React from 'react'
import { Link } from 'react-router-dom'

const Lists = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24 bg-white space-y-10">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 bg-gray-300 p-10 rounded-xl">
        <Link to='/PlayList' className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
            <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-between md:py-5">
                <blockquote>
                    <p className='text-2xl leading-relaxed text-black'>List Name</p>
                    <p className="text-4xl leading-relaxed text-black">Tamil Movies.</p>
                    <p className="text-4xl leading-relaxed text-black">Tamil Movies.</p>
                </blockquote>
                <div className="mt-6 lg:mt-auto">
                    <p className="text-xl font-semibold text-black">Public</p>
                    <button className="mt-2 text-base text-gray-600">Share</button>
                </div>
            </div>
        </Link>
    </div>
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 bg-gray-300 p-10 rounded-xl">
        <Link to='/PlayList' className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
            <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-between md:py-5">
                <blockquote>
                    <p className='text-2xl leading-relaxed text-black'>List Name</p>
                    <p className="text-4xl leading-relaxed text-black">Tamil Movies.</p>
                    <p className="text-4xl leading-relaxed text-black">Tamil Movies.</p>
                </blockquote>
                <div className="mt-6 lg:mt-auto">
                    <p className="text-xl font-semibold text-black">Private</p>
                    <button className="mt-2 text-base text-gray-600">Share</button>
                </div>
            </div>
        </Link>
    </div>
</section>

  )
}

export default Lists