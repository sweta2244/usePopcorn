import MovieWatched from "./MovieWatched";
import StarReview from "./StarReview";
import { useState } from "react";

export default function MovieDetail({ data,handleAddList,handlewatchMovie,movieWatched }) {
  const [index, setIndex] = useState(0);
  const [rating,setRating]=useState(0);
  const length=movieWatched.length;
  return (
    <div className="detail-box">
      <div>
        <div className="detail-heading">
          <div>
            <img src={data.Poster} alt="image" width="150px" />
          </div>
          <div>
            <h2>{data.Title}</h2>
            <p>{data.Year}</p>
            <p>⭐️ {} Average Rating</p>
          </div>
          <div>
            {/* <p>{movie1}</p> */}
            {movieWatched && Array.from({length:length}).map((_,i)=><div key={i}>{movieWatched[i].Title}</div>)}
            {console.log(movieWatched)}
          </div>
        </div>
        <div className="detail-body">
          <div>
            <div className="star-rating">
              <StarReview index={index} setIndex={setIndex} setRating={setRating} rating={rating} />
              <span className="" style={{ width: "10px" }}>
                {index != 0 && index}{" "}
              </span>
            </div>
            {/* {rating>0 && <button onClick={()=>handleAddList(rating)}>+ Add to Detail</button>} */}
            <button onClick={()=>handlewatchMovie(data)}>Add to detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}
