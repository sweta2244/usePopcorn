import { GiPopcorn } from "react-icons/gi";

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="logo-section">
          <div className="logo-flex">
            <GiPopcorn size={30} color="yellow" className="popcorn" />
            <h2> usePopcorn </h2>
          </div>
        </div>
        <div className="search-bar">
          <form>
            <input type="text" name="search" placeholder="Search movies..." />
          </form>
        </div>
        <div className="result">
          <p>
            Found <b>20</b> results
          </p>
        </div>
      </div>
    );
  }