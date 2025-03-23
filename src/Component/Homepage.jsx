import "./Homepage.css";
import Navbar from "./Navbar";
import Body from "./Body";

export default function Homepage({ data }) {
  return (
    <div>
      <Navbar />
      <Body listofmovies={data} />
    </div>
  );
}








