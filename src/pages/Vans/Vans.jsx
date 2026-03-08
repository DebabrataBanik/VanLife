import Van from '../../components/subcomponents/Van'
import { useLoaderData, useSearchParams, Await } from 'react-router'
import { getVans } from '../../services/api'
import { Suspense } from 'react'

export function loader() {
  console.log('hello')
  // returns successfully with a Promise
  return { vansPromise: getVans() }
}

export function Component() {

  const [searchParams, setSearchParams] = useSearchParams()
  const filterType = searchParams.get('type')

  const { vansPromise } = useLoaderData()

  function buildURL(type) {
    setSearchParams(params => {

      const currentType = params.get('type')

      if (type === null || type === currentType) {
        params.delete('type')
      } else {
        params.set('type', type)
      }
      return params
    }, { replace: true })
  }

  function renderVans(vans) {
    const filteredData = filterType ? vans.filter(van => van.type.toLowerCase() === filterType) : vans

    return (
      <>
        <div className='filters'>
          <button
            onClick={() => buildURL('simple')}
            className={`simple ${filterType === 'simple' ? 'selected' : ''}`}
          >
            Simple
          </button>
          <button
            onClick={() => buildURL('luxury')}
            className={`luxury ${filterType === 'luxury' ? 'selected' : ''}`}
          >
            Luxury
          </button>
          <button
            onClick={() => buildURL('rugged')}
            className={`rugged ${filterType === 'rugged' ? 'selected' : ''}`}
          >
            Rugged
          </button>
          {
            filterType &&
            <button
              onClick={() => buildURL(null)}
              className='clear'
            >
              <span>Clear</span>
            </button>
          }
        </div>
        <div className='van-list_container'>
          {
            filteredData.map(van => (
              <Van key={van.id} searchParams={searchParams} data={van} />
            ))
          }
        </div>
      </>
    )
  }

  return (
    <div className='vans-page'>
      <h1>Explore our van options</h1>

      <Suspense fallback={<h2>Loading content...</h2>}>
        <Await
          resolve={vansPromise}
          errorElement={<h2>Oopsie error</h2>}
        >
          {(resolvedVans) => renderVans(resolvedVans)}
        </Await>
      </Suspense>
    </div>
  )
}