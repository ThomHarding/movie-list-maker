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

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };

    handleSubmitMovie(movie);

    setMovieFormTitle('');
    setMovieFormName('');       
    setMovieFormYearReleased('');       
    setMovieFormColor('');
  }


  return <form onSubmit={handleSubmit}>
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