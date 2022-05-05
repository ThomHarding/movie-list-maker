import React from 'react';

export default function Movie({
  color,
  title,
  director,
  year,
  handleDeleteMovie,
}) {
  return <div 
    onClick={() => handleDeleteMovie ? handleDeleteMovie(title) : null}
    className='movie-item' style={{ background: color }}>
    <h3>{title}</h3>
    <p>released {year}</p>
    <p>directed by {director}</p>
  </div>;
}