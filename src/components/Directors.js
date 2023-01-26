import React from "react";
import { directors, movies } from "../data";

function Directors() {

  const directorElements = directors.map((director) => {
    return (
      <div>
        {director.name}
        <ul>
          {director.movies.map((movie) => {
            return <li>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Directors Page</h1>
    {directorElements}
    </div>;
}

export default Directors;
