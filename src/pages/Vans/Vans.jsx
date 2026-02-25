import vansData from '../../data.json'
import Van from '../../components/subcomponents/Van'

export default function Vans() {
  return (
    <div className='vans-page'>
      <h1 className='van'>Explore our van options</h1>
      <div className='filters'>

      </div>
      <div className='van-list_container'>
        {
          vansData.map(van => (
            <Van key={van.id} data={van} />
          ))
        }
      </div>
    </div>
  )
}