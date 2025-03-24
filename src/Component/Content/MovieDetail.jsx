import StarReview from "./StarReview";

export default function MovieDetail({ data }) {
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
          </div>
          <div className="detail-body">
            <p><StarReview/></p>
            <p></p>
          </div>
        </div>
        
    </div>
  );
}
