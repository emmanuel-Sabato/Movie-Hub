import React, { useEffect, useState } from 'react';

const API_KEY = 'b38f721dc0c2c16166d2eeb4c3480779';

function MovieDetailModal({ movie, onClose }) {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        const trailerVideo = data.results.find((video) => video.type === 'Trailer');
        setTrailer(trailerVideo ? trailerVideo.key : null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie trailer:', error);
        setLoading(false);
      }
    };

    fetchMovieTrailer();
  }, [movie.id]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl p-6 max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2"
        >
          X
        </button>
        <div className="flex gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-48 h-72 rounded-xl object-cover"
          />
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-3">{movie.title}</h2>
            <p className="text-sm mb-3">{movie.overview}</p>
            <p className="text-sm text-gray-300">⭐ {movie.vote_average}</p>
            <p className="text-sm text-gray-400">📅 {movie.release_date}</p>

            {loading ? (
              <p className="text-gray-400 mt-4">Loading trailer...</p>
            ) : trailer ? (
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-400 mt-4">No trailer available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
