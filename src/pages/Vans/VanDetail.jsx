import { useLoaderData, Await } from "react-router"
import { getVan } from "../../services/api"
import { Link, useLocation } from "react-router"
import { ArrowLeft } from "lucide-react"
import { Suspense } from "react"

export function loader({ params }) {
  return { vanPromise: getVan(params.id) }
}

export function Component() {

  const { vanPromise } = useLoaderData()

  const location = useLocation()
  const search = location.state?.search || ''

  function renderVan(vanData) {
    return (
      <div className="van-detail_container">
        <img width={500} height={500} src={vanData.imageUrl} alt={vanData.name} />
        <span className={`van-type ${vanData.type}`}>{vanData.type}</span>
        <h3>{vanData.name}</h3>
        <p className="price"><span>${vanData.price}</span>/day</p>
        <p className="description">{vanData.description}</p>
        <Link className="cta">Rent this van</Link>
      </div>
    )
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

      <Suspense fallback={<h2>Loading content...</h2>}>
        <Await resolve={vanPromise}>
          {(resolvedVan) => renderVan(resolvedVan)}
        </Await>
      </Suspense>

    </div>
  )
}