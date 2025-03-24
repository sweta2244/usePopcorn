
export default function MovieWatched({data}) {
  return (
    <div>
        <div className="detail-box-null">
          <p>MOVIES YOU WATCHED</p>
          <div className="description-flex">
            <p>#️⃣ 0 movies</p>
            <p>⭐️ 0.00</p>
            <p>🌟 0.00</p>
            <p>⏳ 0 min</p>
          </div>
          <p>{data}</p>
        </div>
    </div>
  )
}
