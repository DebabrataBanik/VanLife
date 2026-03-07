import { NavLink, Outlet, Link, useLoaderData } from "react-router"
import { getVan } from "../../services/api"
import { ArrowLeft } from "lucide-react"

export function loader({ params }) {
  return getVan(params.id)
}

export function Component() {

  const data = useLoaderData()

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
          <Outlet />
        </div>

      </div>
    </div>
  )
}