import React from 'react';
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-white font-bold mb-8">Explore Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Trending */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:bg-gray-700 transition">
          <h2 className="text-xl font-semibold mb-2">Trending</h2>
          <p>Discover the hottest trending movies of the week.</p>
          <Link to="/trending" className="mt-4 inline-block text-yellow-400 hover:underline">Explore Trending</Link>
        </div>

        {/* Popular */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:bg-gray-700 transition">
          <h2 className="text-xl font-semibold mb-2">Popular</h2>
          <p>Explore the most watched and liked movies now.</p>
          <Link to="/popular" className="mt-4 inline-block text-yellow-400 hover:underline">Explore Popular</Link>
        </div>

        {/* Upcoming */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:bg-gray-700 transition">
          <h2 className="text-xl font-semibold mb-2">Upcoming</h2>
          <p>Find out which movies are coming soon.</p>
          <Link to="/upcoming" className="mt-4 inline-block text-yellow-400 hover:underline">Explore Upcoming</Link>
        </div>

        {/* Coming Soon */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:bg-gray-700 transition">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p>Get ready for the next blockbusters.</p>
          <Link to="/comingsoon" className="mt-4 inline-block text-yellow-400 hover:underline">Explore Coming Soon</Link>
        </div>
      </div>
    </div>
  );
}

export default Explore;
