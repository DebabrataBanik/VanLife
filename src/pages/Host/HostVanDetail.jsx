import { useParams, NavLink, Outlet, Link } from "react-router"
import { getVan } from "../../services/api"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function HostVanDetail() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchVan() {
      try {
        const data = await getVan(id)
        setData(data)
      } catch (err) {
        setError(err?.message || "An error occurred while fetching van details.")
      } finally {
        setLoading(false)
      }
    }
    fetchVan()
  }, [id])

  if (loading) {
    return <h1 className="status-msg">Loading...</h1>
  }

  if (error) {
    return <h1 className="status-msg error">{error}</h1>
  }

  return (
    <div className="host-van-detail-layout">
      <Link
        to='..'
        relative="path"
        className="back"
      >
        <ArrowLeft size={15} />
        Back to all vans
      </Link>
      <div className="host-van-detail_container">
        <div className="host-van-detail-top">
          <img src={data.imageUrl} alt={data.name} />
          <div className="host-van-detail-info">
            <span className={`van-type ${data.type}`}>{data.type}</span>
            <h3>{data.name}</h3>
            <p><span>${data.price}</span>/day</p>
          </div>
        </div>
        <div className="host-van-detail-bottom">
          <nav>
            <NavLink
              to='.'
              end
              className={({ isActive }) => isActive ? 'active' : null}
            >
              Details
            </NavLink>
            <NavLink
              to='pricing'
              className={({ isActive }) => isActive ? 'active' : null}
            >
              Pricing
            </NavLink>
            <NavLink
              to='photos'
              className={({ isActive }) => isActive ? 'active' : null}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={data} />
        </div>

      </div>
    </div>
  )
}