import StarReview from "./StarReview";
import { useState } from "react";

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

  return (
    <div className="detail-box">
      <button className="detail-hide" onClick={() => handleDetailDisable()}>
        {detailDisable ? <p>-</p> : <p>+</p>}
      </button>
      {detailDisable ? (
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
                {!reviewDone && <>
                  <StarReview
                    index={index}
                    setIndex={setIndex}
                    handleSelectedMovie={handleSelectedMovie}
                  />
                  <span className="" style={{ width: "10px" }}>
                    {index != 0 && index}{" "}
                  </span>
                </>}
              </div>
              {showBtn && (
                <button
                  onClick={() => {
                    handlewatchMovie(selectedMovie);
                    setReviewDone(!reviewDone);
                    setShowBtn(false);
                  }}
                >
                  Add to detail
                </button>
              )}
              <button onClick={()=>handleDisable()}>Go to list</button>
              {reviewDone && <p>You have rated the movie {selectedMovie.Rate} ⭐️</p>}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
