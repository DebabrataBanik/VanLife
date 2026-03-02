import { useParams } from "react-router"
import { getVan } from "../../services/api"
import { Link, useLocation } from "react-router"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function VanDetail() {

  const [vanData, setVanData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchVan() {
      try {
        const data = await getVan(id)
        setVanData(data)
      } catch (err) {
        setError(err?.message || 'An error occurred while fetching van details.')
      } finally {
        setLoading(false)
      }
    }
    fetchVan()
  }, [id])

  const location = useLocation()
  const search = location.state?.search || ''

  if (loading) {
    return <h1 className='status-msg'>Loading...</h1>
  }

  if (error) {
    return <h1 className='status-msg'>{error}</h1>
  }

  return (
    <div className="detail-page">
      <Link
        to={`..${search}`}
        relative="path"
        className="back"
      >
        <ArrowLeft size={15} />
        Back to all vans
      </Link>

      <div className="van-detail_container">
        <img src={vanData.imageUrl} alt={vanData.name} />
        <span className={`van-type ${vanData.type}`}>{vanData.type}</span>
        <h3>{vanData.name}</h3>
        <p className="price"><span>${vanData.price}</span>/day</p>
        <p className="description">{vanData.description}</p>
        <Link className="cta">Rent this van</Link>
      </div>

    </div>
  )
}