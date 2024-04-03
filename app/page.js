"use client"
import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import { toast } from 'react-toastify';
import FavoritesList from './components/FavoritesList';

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const searchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=c97d377d`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        toast.error('No movies found!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch movies!');
    }
  };

  const handleMovieSelect = async (imdbID) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=c97d377d`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch movie details!');
    }
  };

  const handleFavoriteToggle = (movie) => {
    const existingIndex = favorites.findIndex((favMovie) => favMovie.imdbID === movie.imdbID);

    if (existingIndex !== -1) {
      // If the movie is already in favorites, remove it
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(existingIndex, 1);
      setFavorites(updatedFavorites);
      toast.success(`${movie.Title} removed from favorites`);
    } else {
      // If the movie is not in favorites, add it
      setFavorites([...favorites, movie]);
      toast.success(`${movie.Title} added to favorites`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-4 text-stone-300">Welcome to Movie Search App</h1>
      <p className="text-lg text-stone-400 mb-4">
        Search for your favorite movies and explore their details. Click on a movie card to view more information.
      </p>
      <SearchBar onSearch={searchMovies} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <FavoritesList favorites={favorites} />
    </div>
  );
}
