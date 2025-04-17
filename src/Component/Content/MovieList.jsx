
export default function MovieList({ data,handleDescription,handleDisable,listDisable,handleListDisable }) {
  return (
    <div className="list-of-movies">
    <button className="detail-hide" onClick={()=>handleListDisable()}>{listDisable?<p>-</p>:<p>+</p>}</button>
      {listDisable?(data ? (
        data?.map((item, i) => (
          <div className="individual-film" key={i} onClick={()=>{handleDescription(item.imdbID);handleDisable()}}>
            <div>
              <img src={item.Poster} alt="image" />
            </div>
            <div>
              <p>{item.Title}</p>
              <p>
                🗓 {item.Year}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ paddingLeft: "20px" }}>No Results found</p>
      )):null}
    </div>
  );
}
