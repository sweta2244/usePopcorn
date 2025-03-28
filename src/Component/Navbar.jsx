import { useEffect, useState } from "react";
import "./Homepage.css";

export default function Navbar({setQuery,data}) {
  const [term,setTerm]=useState("");
  useEffect(()=>{
    if (term.length>=3){
      setQuery(term);
    }
    else{
        setQuery("");
    }
  },[term,setQuery])
  return (
    <div className="navbar">
      <div className="logo-section">
        <div className="logo-flex">
          <p className="arrow">⟵</p>
          <p className="logo-popcorn">🍿</p>
          <h2 className="text-logo"> usePopcorn </h2>
        </div>
      </div>
      <div className="search-bar">
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search movies..."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="result">
        <p>
          Found <b>{data ? data.length : 0}</b> results
        </p>
      </div>
    </div>
  )}

