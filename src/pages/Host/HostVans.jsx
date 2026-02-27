import { Link } from "react-router"
import vansData from "../../data.json"

export default function HostVans() {

  const data = vansData.filter(van => van.hostId === 123)

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