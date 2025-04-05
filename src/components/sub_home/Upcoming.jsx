import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import MovieDetailModal from '../det_info/MovieDetailModal';// New Modal Component

const API_KEY = 'b38f721dc0c2c16166d2eeb4c3480779';
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);  // To store the selected movie
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6, then add more on button click

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(UPCOMING_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const openMovieDetail = (movie) => {
    setSelectedMovie(movie);  // Set the clicked movie to show the details
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-bold flex items-center gap-2 mb-6">
        <Calendar className="text-blue-400" />
        Upcoming Movies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.slice(0, visibleCount).map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-2xl shadow-md p-3 hover:bg-gray-700 transition cursor-pointer"
            onClick={() => openMovieDetail(movie)}  // Open modal on click
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-xl w-full h-48 object-cover mb-3"
            />
            <h2 className="text-md font-semibold line-clamp-1">{movie.title}</h2>
            <p className="text-sm text-gray-300">⭐ {movie.vote_average}</p>
            <p className="text-sm text-gray-400">📅 {movie.release_date}</p>
          </div>
        ))}
      </div>

      {visibleCount < movies.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={showMore}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Movie Detail Modal */}
      {selectedMovie && <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default Upcoming;
