import '../hoja-estilo/movie.css'
import React, { useState } from 'react';

function MovieAPI() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const searchMovie = (movies) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${movies}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === '404') {
          setError('Movie not found');
          setMovies([]);
        } else {
          setError('');
          setMovies(data);
        }
      })
      .catch(err => setError('An error occurred'));
  };
  const handleSearchClick = () => {
    if (searchInput.trim().length > 2) {
      searchMovie(searchInput.trim());
    } else {
      setError('Enter at least 3 characters to search');
      setMovies([]);
    }
  };

  return (

        <div  className='movie'>
          <input
            id="search-input"
            type="text"
            value={searchInput}
            placeholder='Search for a movie'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button id="search-button" onClick={handleSearchClick}>
            Search
          </button>
          {error && <p>{error}</p>}
          <div className='movies-container'>
          <div className='container-second'>
      {movies.map((movie, index) => {
        if(movie.show.image?.original != undefined || movie.show.image?.medium != undefined){
          console.log(movie)
        }

        
        return (
        <div key={index} className="movie-card">
          <div className="preview-image">
            <img className="image-movie" src={movie.show.image?.original || movie.show.image?.medium} alt={`${movie.name}`} />
          </div>
          <div className="preview-title">
            <p>{movie.show.name}</p>
          </div>
          <div className="preview-rating-webchannel-container">
            <div className="rating">
              <p>Rating: {movie.show.rating?.average ? movie.show.rating.average : "Not available"}</p>
            </div>
            <div className="webchannel">
              <p>WebChannel: {movie.show?.webChannel?.name ? movie.show.webChannel.name : "Not available" }</p>
            </div>   
          </div>
        </div>
      
  )})}
      </div>
      </div>
      </div>
);
}

export default MovieAPI;


 