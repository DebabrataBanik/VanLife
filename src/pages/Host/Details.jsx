import { useRouteLoaderData } from 'react-router'

export default function Details() {

  const data = useRouteLoaderData('host-van-detail')

  return (
    <div className="details_container">
      <p>Name: <span>{data.name}</span></p>
      <p>Category: <span>{data.type}</span></p>
      <p>Description: <span>{data.description}</span></p>
      <p>Visibility: <span>Public</span></p>
    </div>
  )
}