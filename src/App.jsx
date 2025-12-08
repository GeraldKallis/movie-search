import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import "./index.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Batman");

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  async function fetchMovies(searchTerm) {
    try {
      const searchRes = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=32cf9591`
      );
      const data = await searchRes.json();

      if (data.Search) {
        const detailedMovies = await Promise.all(
          data.Search.map(async (movie) => {
            const detailRes = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=32cf9591`
            );
            return await detailRes.json();
          })
        );
        setMovies(detailedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  }

  return (
   <div className="app-container">
  <div className="header-wrapper">
    <Header />
    <div className="search-wrapper">
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  </div>
  <main className="main-container">
    <MovieList movies={movies} />
  </main>
</div>

  );
}
