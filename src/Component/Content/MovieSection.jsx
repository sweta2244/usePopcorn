import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { useState } from "react";

export default function MovieSection({ data, loading }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [addList,setAddList]=useState([]);
  const [movieWatched,setWatchedMovie]=useState([]);
  function handlewatchMovie(a){
    setWatchedMovie((prev)=>[...prev,a]);
  }

  function handleDescription(id) {
    let result = data.find((d) => d.imdbID === id);
    setSelectedMovie(result);
  }
  function handleAddList(rating){
    setAddList([...data,rating])
  }
  return (
    <div className="Body">
      <MovieList
        data={data}
        loading={loading}
        handleDescription={handleDescription}
      />
      <MovieDetail data={selectedMovie} handleAddList={handleAddList} handlewatchMovie={handlewatchMovie} movieWatched={movieWatched}/>
      {/* <MovieWatched data={selectedMovie}/> */}
    </div>
  );
}
