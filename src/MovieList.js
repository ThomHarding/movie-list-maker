import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return <div className='movie-list'>
    {
      movies.map((movie, i) => <Movie 
        key={`${movie.title}-${i}`} {...movie}
        handleDeleteMovie={handleDeleteMovie}
        color={movie.color}
        title={movie.title}
        director={movie.director}
        year={movie.year}
      />)
    }
  </div>;
}