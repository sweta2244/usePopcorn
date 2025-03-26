import "./Homepage.css";

export default function Navbar({query,setQuery,data}) {
  return (
    <div className="navbar">
      <div className="logo-section">
        <div className="logo-flex">
          <p className="logo-popcorn">🍿</p>
          <h2> usePopcorn </h2>
        </div>
      </div>
      <div className="search-bar">
        <form>
          <input
            type="text"
            name="search"
            value={query}
            placeholder="Search movies..."
            onChange={(e) => {
              setQuery(e.target.value);
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

