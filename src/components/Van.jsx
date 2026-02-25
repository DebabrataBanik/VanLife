export default function Van({ data }) {
  return (
    <div key={data.id} className="van-item">
      <img src={data.imageUrl} />
      <span className={`van-type ${data.type}`}>{data.type}</span>
      <div className="van-info">
        <h3>{data.name}</h3>
        <p><span>${data.price}</span><br />/day</p>
      </div>

    </div>
  )
}