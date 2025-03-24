import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import MovieSection from "./Component/Content/MovieSection";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("action");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=76f6573d&s=${query}`
        );
        const json = await response.json();
        setData(json.Search);
        console.log("fetehced Data:", json.Search);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(true);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} data={data} />
      <MovieSection data={data} loading={loading} />
    </>
  );
}
