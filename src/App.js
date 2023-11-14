import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';
import Navbar from './component/Navbar';
import PageNotFound from './component/PageNotFound';
import Loading from './component/Loading';


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const fetchMovie = () =>{
    setLoading(true)
    fetch(apiUrl)
    .then((result) => result.json())
    .then((data) => setMovieList(data.results))
    .finally(()=>   setLoading(false))

  };
  useEffect(()=>{
    fetchMovie();
  },[]);

  return (
  <main className="app-container">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route  path="/"  element={loading ? <Loading/>: <MovieList movieList={movieList}/>}/>
    <Route path="/details/:id" element={<MovieDetails/>}/> 
    <Route path="/404"  element={<PageNotFound/>} />
    <Route path="*" element={<Navigate to="/404" />} />
   </Routes>
   </BrowserRouter>
   </main>
  );
}

export default App;
