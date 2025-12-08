import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
      />
      <div className="overlay">
        <div className="title">{movie.Title}</div>
        <div className="year">{movie.Year}</div>
        <div className="plot">
          {movie.Plot !== "N/A" ? movie.Plot : "No plot available."}
        </div>
      </div>
    </div>
  );
}
