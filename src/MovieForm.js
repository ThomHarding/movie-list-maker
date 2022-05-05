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
        <option value='ochre'>Ochre</option>
        <option value='burlywood'>Burly Wood</option>
        <option value='turquoise'>Turqoise</option>
        <option value='palegreen'>Light Green</option>
        <option value='tomato'>Red</option>
      </select>
      
    </label>

    <button>
      Add Movie
    </button>
  </form>;
}