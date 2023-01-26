import React from "react";
import { movies } from "../data";

function Movies() {

  const movieElements = movies.map((movie) => {
    return (    
    <div>
      <div>{movie.title}</div>
      <div>{movie.time}</div>
       <ul>
        {movie.genres.map((el) => {
        return <li>{el}</li>
        })}
      </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {movieElements}
    </div>);
}

export default Movies;
