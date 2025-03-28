import StarReview from "./StarReview";
import { useState,useEffect } from "react";

export default function MovieDetail({
  selectedMovie,
  setSelectedMovie,
  handleDisable,
  handlewatchMovie,
  handleDetailDisable,
  detailDisable
}) {
  const [index, setIndex] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [reviewDone,setReviewDone]=useState(false);


  function handleSelectedMovie(i) {
    setSelectedMovie((prev) => ({ ...prev, Rate: i }));
    setShowBtn(true);
  }

  // this is for esc functionality while detail of a movie is displayed.
  useEffect(()=>{
  function callback(e){
    if(e.key.toLowerCase()==="escape"){
      handleDisable();
    }}

    document.addEventListener("keydown",callback);

    return function(){
      document.removeEventListener("keydown",callback);
    }
  },[handleDisable]);

  return (
    <div className="detail-box">
      <button className="detail-hide" onClick={() => handleDetailDisable()}>
        {detailDisable ? <p>-</p> : <p>+</p>}
      </button>
      {detailDisable ? (
        <div>
          <div className="detail-heading">
            <img src={selectedMovie.Poster} alt="image" width="150px"/>
            <div>
              <h2>{selectedMovie.Title}</h2>
              <p>{selectedMovie.Year}</p>
              {console.log(selectedMovie)}
              <p>⭐️ {selectedMovie.Rate} Average Rating</p>
            </div>
          </div>
          <div className="detail-body">
            <div className="rating-box">
              <div>
                <div className="star-rating">
                  {!reviewDone &&  <>
                    <StarReview
                      index={index}
                      setIndex={setIndex}
                      handleSelectedMovie={handleSelectedMovie}
                    />
                    <span className="" style={{ width: "10px",color:"yellow" }}>
                      {index != 0 && index}{" "}
                    </span>
                  </>}
                </div>
                {showBtn && (
                  <button className="add-to-detail-btn"
                    onClick={() => {
                      handlewatchMovie(selectedMovie);
                      setReviewDone(!reviewDone);
                      setShowBtn(false);
                    }}
                  >
                    + Add to detail
                  </button>
                )}
                {reviewDone && <p>You have rated the movie {selectedMovie.Rate} ⭐️</p>}
              </div>
            </div>
            <button className="back-to-list" onClick={()=>handleDisable()}>⟵</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
