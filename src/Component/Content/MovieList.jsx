
export default function MovieList({ data,handleDescription }) {
  return (
    <div className="list-of-movies">
      {data ? (
        data.map((item, i) => (
          <div className="individual-film" key={i} onClick={()=>handleDescription(item.imdbID)}>
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
      )}
    </div>
  );
}
