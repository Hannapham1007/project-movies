import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieList.css'

//Component shows list of movies
export default function MovieList({movieList}) {
  return (
    <section className="main">
        {movieList.map((movieItem) => {
        return (
          <div className="movie-list-container" key={movieItem.id}>
          <Link  to={`/details/${movieItem.id}`}>
           <div className="movie-poster">
            <img className="img"
              src={`http://image.tmdb.org/t/p/w342/${movieItem.poster_path}`}
              alt="movie poster"
            />
            </div>
            <div className="overlay">

            <h2>{movieItem.title}</h2>
            <p>Released {movieItem.release_date}</p>
            </div>
          </Link>
          </div>
        );
      })}
    </section>
  )
}
