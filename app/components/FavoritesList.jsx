// FavoritesList.js

import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-stone-300">Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-48 object-contain"
              style={{ objectFit: 'contain' }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.Title}</h2>
              <p className="text-gray-600">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
