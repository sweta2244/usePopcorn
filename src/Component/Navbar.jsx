import { useEffect, useRef, useState } from "react";
import "./Homepage.css";

export default function Navbar({setQuery,data}) {
  const [term,setTerm]=useState("");
  const searchFocus=useRef();
  useEffect(()=>{
    if (term.length>=3){
      setQuery(term);
    }
    else{
        setQuery("");
    }
  },[term,setQuery]);
  useEffect(()=>{
    searchFocus.current.focus();
  },[]);
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
            defaultValue=""
            placeholder="Search movies..."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            ref={searchFocus}
          />
        </form>
      </div>
      <div className="result">
        <p>
          Found <b>{data ? data?.length : 0}</b> results
        </p>
      </div>
    </div>
  )}

