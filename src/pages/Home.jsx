import React from 'react'
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div className="flex justify-between items-center px-10 py-16 bg-gradient-to-r from-black to-[#180202] text-white">
      <div className="max-w-lg">
        <h3 className="text-2xl font-semibold">FIND MOVIES</h3>
        <h1 className="text-4xl scale-y-160 font-bold mt-2 bg-gradient-to-r from-[#ff4d00] via-[#c10068] to-[#1900a5] bg-clip-text text-transparent">TV SHOWS AND MORE</h1>
        <p className="mt-4 text-sm max-w-[400px] text-gray-300">
           Explore the latest movies, TV shows, and exclusive content with the best quality.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#ff4d00] hover:bg-[#c10068] text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out flex items-center gap-2">
          <FaPlay className="text-white text-lg" /> {/* Play Icon */}
          Watch Tutorial
        </button>
      </div>

  {/* Right Image Section */}
      <div className="relative w-[250px] h-[350px]">
    {/* Guardians Image (Background) */}
    <img
      src="/guadians.jpeg"
      alt="Guardians Movie"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />

    {/* Spider-Man Image (Foreground - Overlapping) */}
    <img
      src="/spider.jpeg"
      alt="Spider-Man Movie"
      className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl transform translate-x-10 -translate-y-5 rotate-[-5deg]"
    />
      </div>
    </div>
  )
}

export default Home;