// MovieCard.js

import React from 'react';

const MovieCard = ({ movie, favorites, onFavoriteToggle }) => {
  const { Title, Year, Poster, imdbID } = movie;

  const handleToggleClick = () => {
    onFavoriteToggle(movie);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={Poster}
        alt={Title}
        className="w-full h-96 object-contain"
        style={{ objectFit: 'contain' }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{Title}</h2>
        <p className="text-gray-600">{Year}</p>
        <button
          onClick={handleToggleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
        >
          {favorites.some((favMovie) => favMovie.imdbID === imdbID)
            ? 'Remove from Favorites'
            : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
