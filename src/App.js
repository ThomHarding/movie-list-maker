import { useState } from 'React';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [movieFormYearReleased, setMovieFormYearReleased] = useState(''); 
  const [movieFormDirector, setMovieFormDirector] = useState(''); 
  const [movieFormTitle, setMovieFormTitle] = useState(''); 
  const [movieFormColor, setMovieFormColor] = useState('');

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleSubmitMovie(e) {
    e.preventDefault();
    let newMovie = {
      title: movieFormTitle,
      color: movieFormColor,
      year: movieFormYearReleased,
      director: movieFormDirector };
    setAllMovies([...allMovies, newMovie]);
    setMovieFormColor('');
    setMovieFormYearReleased('');
    setMovieFormDirector('');
    setMovieFormTitle('');
  }
  function handleFilterMovies(search) {
    const filtered = allMovies
      .filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()));
    if (search) {
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(allMovies);
    }
  }

  return (
    <div className="App">
      <div className='movieForm'>
        <MovieForm
          movieFormDirector={movieFormDirector}
          setMovieFormName={setMovieFormDirector}
          movieFormYearReleased={movieFormYearReleased}
          setMovieFormYearReleased={setMovieFormYearReleased}
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
          handleSubmitMovie={handleSubmitMovie}
        />
      </div>
      <div className='filter'>
        Filter Movies
        <input onChange={(e) => handleFilterMovies(e.target.value)} />
      </div>
      <MovieList
        handleDeleteMovies={handleDeleteMovie}
        movies={(filteredMovies.length !== 0) ? filteredMovies : allMovies} />
    </div>
  );
}

export default App;
