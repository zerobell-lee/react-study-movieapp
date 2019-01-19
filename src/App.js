import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Interstellar",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    title: "Arrival",
    poster: "https://ksscensorthis.com/wp-content/uploads/2017/04/SUiavMWW5Vo.movieposter_maxres.jpg"
  },
  {
    title: "Matrix",
    poster: "https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/movies/media/browser/Matrix_2000x3000.JPEG?itok=RJdHqODo"
  },
  {
    title: "Imitation Game",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51vVKg3SaqL.jpg"
  },
  {
    title: "Ghost in the shell",
    poster: "http://www.impawards.com/2017/posters/ghost_in_the_shell_ver8.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
