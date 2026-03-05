import { useRouteLoaderData } from "react-router"

export default function Photos() {

  const data = useRouteLoaderData('host-van-detail')


  return (
    <img src={data.imageUrl} alt={data.name} />
  )
}