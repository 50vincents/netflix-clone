import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQ0MzU3Y2I3OTlmNTg4NmNjMzViYzJjMDVhYzY5YSIsInN1YiI6IjVmOGY0Y2E1YzA0OGE5MDAzOTQwNThhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.711ByiNuTsA5NrEcsU4jzkYlhUfzhkMdinasUdwD4w8
// https://api.themoviedb.org/3/movie/550?api_key=ce44357cb799f5886cc35bc2c05ac69a