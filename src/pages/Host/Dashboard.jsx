import { Star } from "lucide-react"
import { getHostVans } from "../../services/api"
import { Link } from "react-router"
import { useState, useEffect } from "react"

export default function Dashboard() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <section>
      <div className="summary">
        <h1>Welcome!</h1>
        <div className="income">
          <p>Income last <span>30 days</span></p>
          <span>Details</span>
        </div>
        <h2>$2,260</h2>
      </div>
      <div className="score">
        <p className="review-text">Review score</p>
        <p className="stars">
          <Star size={15} />
          <span>5.0</span>/5
        </p>
        <span className="details">Details</span>
      </div>

      {
        loading ? (
          <h1 className="status-msg">Loading...</h1>
        ) : error ? (
          <h1 className="status-msg error">{error}</h1>
        ) :
          (
            <div className="host-vans_container">
              <div className="vans-heading">
                <h3>Your listed vans</h3>
                <Link to='vans'>View all</Link>
              </div>
              <div className="host-vans">
                {
                  data.map(van => (
                    <div key={van.id} className="host-van">
                      <img src={van.imageUrl} alt={van.name} />
                      <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p><span>${van.price}</span>/day</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )
      }

    </section>
  )
}