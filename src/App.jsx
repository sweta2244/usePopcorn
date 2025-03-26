import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import MovieSection from "./Component/Content/MovieSection";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("action");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=76f6573d&s=${query}`
        );
        const json = await response.json();
        setData(json.Search);
      }catch(error){
        console.log("Error fecthing data:",error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} data={data} />
      <MovieSection data={data} />
    </>
  );
}
