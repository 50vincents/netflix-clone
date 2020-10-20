import React, { useEffect, useState } from 'react'
import '../styles/Row.css';
import axios from '../axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // if [] run once when row loads aand dont run again
  // if [movies] then everytime movie updates
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      
      <div className='row-posters'>
        {movies.map(movie => (
          <img 
            key={movie.id} 
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
          />
        ))}
      </div>
    </div>
  )
}

export default Row
