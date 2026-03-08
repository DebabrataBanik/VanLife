import { Star } from "lucide-react"
import { getHostVans } from "../../services/api"
import { Await, Link, useLoaderData } from "react-router"
import { Suspense } from "react"

export function loader() {
  return { vansPromise: getHostVans() }
}

export function Component() {

  const { vansPromise } = useLoaderData()

  function renderVans(data) {
    return (
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
    )
  }

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

      <div className="host-vans_container">
        <div className="vans-heading">
          <h3>Your listed vans</h3>
          <Link to='vans'>View all</Link>
        </div>

        <Suspense fallback={<h2>Loading content...</h2>}>
          <Await resolve={vansPromise}>
            {(resolvedVans) => renderVans(resolvedVans)}
          </Await>
        </Suspense>
      </div>

    </section>
  )
}