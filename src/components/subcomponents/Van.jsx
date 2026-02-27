import { Link } from "react-router"

export default function Van({ data, searchParams }) {
  return (
    <div className="van-item">
      <Link
        to={data.id}
        state={{ search: `?${searchParams.toString()}` }}
      >
        <img src={data.imageUrl} alt={data.name} />
        <span className={`van-type ${data.type}`}>{data.type}</span>
        <div className="van-info">
          <h3>{data.name}</h3>
          <p><span>${data.price}</span><br />/day</p>
        </div>
      </Link>
    </div>
  )
}