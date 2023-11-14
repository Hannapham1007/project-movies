import React from "react";
import { useState, useEffect } from "react";
import HomeButton from "./HomeButton";
import { useParams } from "react-router-dom";
import '../styles/MovieDetails.css'

//Component shows movies details
export default function MovieDetails () {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [rating, setRating] = useState(0.0);
  const [coverURL, setCoverURL] = useState("");
  const [posterURL, setPosterURL] = useState("");

  // Fetch initial movies through API
  const fetchMoviesDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => { setDetails(data);
                        setRating(data.vote_average);
                        setCoverURL(`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`);
                        setPosterURL(`https://image.tmdb.org/t/p/w342${data.poster_path}`)
                      });
  };

  useEffect(() => {
    fetchMoviesDetails();
  }, [id]);

  return (
    <article className="details-page">
      <div className="background" style={{backgroundImage: `url(${coverURL})`}}>
        <div className="back-button">
          <HomeButton />
        </div>
        <div className="movie-details-container">
          <img
            src={posterURL}
            alt={details.original_title}
          />
          <div className="movie-details">
            <div className="movie-title-container">
              <h1>
                <span className="title">{details.original_title}</span>
                <span className="rating">⭐ {rating.toFixed(1)}</span>
              </h1>
            </div>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
