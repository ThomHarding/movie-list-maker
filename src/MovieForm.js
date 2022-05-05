import React from 'react';

export default function MovieForm({
  movieFormDirector,
  setMovieFormName,
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieFormTitle,
  movieFormColor,
  setMovieFormTitle,
  setMovieFormColor,
  handleSubmitMovie
}) {

  return <form onSubmit={handleSubmitMovie}>
    <label>
      Title
      <input required value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)}/>
    </label>
    <label>
      Director
      <input required value={movieFormDirector} onChange={e => setMovieFormName(e.target.value)}/>
    </label>
    <label>
      Year Released
      <input required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)}/>   
    </label>
    <label>
      Poster Color
      <select value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
        <option value='ochre'>Pink</option>
        <option value='burlywood'>Yellow</option>
        <option value='turqoise'>Lightblue</option>
        <option value='palegreen'>Red</option>
        <option value='tomat'>Orange</option>
      </select>
      
    </label>

    <button>
      Add Movie
    </button>
  </form>;
}