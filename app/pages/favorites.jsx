import { useState } from 'react';
import FavoritesList from '../components/FavoritesList';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (movie) => {
    // Implement remove from favorites logic here
    console.log('Remove from favorites:', movie);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Favorites</h1>
      <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
}
