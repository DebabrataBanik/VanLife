import { Link } from "react-router"
import { useEffect, useState } from "react"
import { getHostVans } from "../../services/api"

export default function HostVans() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchHostVans() {
      try {
        const data = await getHostVans()
        setData(data)
      } catch (err) {
        setError(err?.message || "An error occurred while fetching the vans")
      } finally {
        setLoading(false)
      }
    }
    fetchHostVans()
  }, [])

  if (loading) {
    return <h1 className="status-msg">Loading...</h1>
  }

  if (error) {
    return <h1 className="status-msg error">{error}</h1>
  }

  return (
    <div className="host-vans_container">
      <h1>Your listed vans</h1>
      <div className="host-vans">
        {
          data.map(van => (
            <Link key={van.id} to={van.id}>
              <div className="host-van">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p><span>${van.price}</span>/day</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}