import { useParams } from "react-router"
import vansData from '../../data.json'
import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"

export default function VanDetail() {

  const params = useParams()
  const data = vansData.find(van => van.id === params.id)

  return (
    <div className="detail-page">
      <Link
        to='..'
        relative="path"
        className="back"
      >
        <ArrowLeft size={15} />
        Back to all vans
      </Link>

      <div className="van-detail_container">
        <img src={data.imageUrl} alt={data.name} />
        <span className={`van-type ${data.type}`}>{data.type}</span>
        <h3>{data.name}</h3>
        <p className="price"><span>${data.price}</span>/day</p>
        <p className="description">{data.description}</p>
        <Link className="cta">Rent this van</Link>
      </div>

    </div>
  )
}