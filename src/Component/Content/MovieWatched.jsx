
export default function MovieWatched({ movieWatched,handleRemoval,detailDisable,handleDetailDisable }) {
  let total = 0;
  movieWatched.map((movie) => (total = total + movie.Rate));
  return (
    <div className="detail-box">
      <button  className="detail-hide" onClick={()=>handleDetailDisable()}>{detailDisable?<p>-</p>:<p>+</p>}</button>
      {detailDisable?(<>
        <div className="detail-box-null">
          <p>MOVIES YOU WATCHED</p>
          <div className="description-flex">
            <p>#️⃣ {movieWatched.length} movies</p>
            <p>🌟 {total===0?0:total / movieWatched.length}</p>
            <p>⏳ 0 min</p>
          </div>
        </div>
        {movieWatched.map((movieWatched1, i) => (
          <div className="individual-film" key={i}>
            <div>
              <img src={movieWatched1.Poster} alt="image" />
            </div>
            <div>
              <p>{movieWatched1.Title}</p>
              <p>🗓 {movieWatched1.Year}</p>
              <p>🌟 {movieWatched1.Rate}</p>
            </div>
            <div>
              <button onClick={()=>handleRemoval(movieWatched1.Title)}>x</button>
            </div>
          </div>
        ))}
      </>):null}
    </div>
  );
}
