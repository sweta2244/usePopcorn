import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { useState } from "react";

export default function MovieSection({ data, loading }) {
  const [selectedMovie, setSelectedMovie] = useState({});

  function handleDescription(id) {
    let result = data.find((d) => d.imdbID === id);
    setSelectedMovie(result);
  }
  return (
    <div className="Body">
      <MovieList
        data={data}
        loading={loading}
        handleDescription={handleDescription}
      />
      <MovieDetail data={selectedMovie} />
      {/* <MovieWatched data={selectedMovie}/> */}
    </div>
  );
}
