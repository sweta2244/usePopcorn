import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { useEffect, useState } from "react";
import MovieWatched from "./MovieWatched";

export default function MovieSection({ data }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movieWatched, setWatchedMovie] = useState(JSON.parse(localStorage.getItem("watched"))||[]);
  const [disable, setDisable] = useState(true);
  const [listDisable, setListDisable] = useState(true);
  const [detailDisable, setDetailDisable] = useState(true);


  function handleDetailDisable() {
    setDetailDisable(!detailDisable);
  }

  function handleListDisable() {
    setListDisable(!listDisable);
  }

  function handlewatchMovie(a) {
    setWatchedMovie((prev) => [...prev, a]);
  }

  function handleRemoval(movie) {
    setWatchedMovie((prev) => prev.filter((i) => i.Title !== movie));
  }

  function handleDescription(id) {
    let result = data.find((d) => d.imdbID === id);
    setSelectedMovie(result);
  }

  function handleDisable() {
    setDisable(!disable);
  }
  
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(movieWatched));
  }, [movieWatched]);

  return (
    <div className="Body">
      <MovieList
        data={data}
        handleDescription={handleDescription}
        handleDisable={handleDisable}
        listDisable={listDisable}
        handleListDisable={handleListDisable}
      />
      {!disable ? (
        <MovieDetail
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          handlewatchMovie={handlewatchMovie}
          movieWatched={movieWatched}
          handleDisable={handleDisable}
          detailDisable={detailDisable}
          handleDetailDisable={handleDetailDisable}
        />
      ) : (
        <MovieWatched
          movieWatched={movieWatched}
          detailDisable={detailDisable}
          handleDetailDisable={handleDetailDisable}
          handleRemoval={handleRemoval}
        />
      )}
    </div>
  );
}
