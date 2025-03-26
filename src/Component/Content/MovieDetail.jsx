import StarReview from "./StarReview";
import { useState } from "react";

export default function MovieDetail({ selectedMovie,setSelectedMovie,handleDisable,handlewatchMovie,handleDetailDisable,detailDisable }) {
  const [index, setIndex] = useState(0);
  
  function handleSelectedMovie(i){
    setSelectedMovie((prev)=>({...prev,Rate:i}))
  }

  return (
    <div className="detail-box">
      <button  className="detail-hide" onClick={()=>handleDetailDisable()}>{detailDisable?<p>-</p>:<p>+</p>}</button>
      {detailDisable?(
      <div>
        <div className="detail-heading">
          <div>
            <img src={selectedMovie.Poster} alt="image" width="150px" />
          </div>
          <div>
            <h2>{selectedMovie.Title}</h2>
            <p>{selectedMovie.Year}</p>
            <p>⭐️ 10 Average Rating</p>
          </div>
        </div>
        <div className="detail-body">
          <div>
            <div className="star-rating">
              <StarReview index={index} setIndex={setIndex} handleSelectedMovie={handleSelectedMovie} />
              <span className="" style={{ width: "10px" }}>
                {index != 0 && index}{" "}
              </span>
            </div>
            <button onClick={()=>{handlewatchMovie(selectedMovie);handleDisable()}}>Add to detail</button>
          </div>
        </div>
      </div>):null}
    </div>
  );
}
