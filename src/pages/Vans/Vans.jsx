import Van from '../../components/subcomponents/Van'
import { useSearchParams } from 'react-router'
import { getVans } from '../../services/api'
import { useEffect, useState } from 'react'

export default function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const filterType = searchParams.get('type')

  const filteredData = filterType ? vans.filter(van => van.type.toLowerCase() === filterType) : vans


  useEffect(() => {
    async function fetchVans() {
      try {
        const data = await getVans()
        setVans(data)
      } catch (err) {
        setError(err?.message || 'An error occurred while fetching vans.')
      } finally {
        setLoading(false)
      }
    }

    fetchVans()
  }, [])

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

  if (loading) {
    return <h1 className='status-msg'>Loading...</h1>
  }

  if (error) {
    return <h1 className='status-msg'>{error.message}</h1>
  }

  return (
    <div className='vans-page'>
      <h1>Explore our van options</h1>
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
    </div>
  )
}