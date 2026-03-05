import { useRouteLoaderData } from "react-router"

export default function Pricing() {

  const data = useRouteLoaderData('host-van-detail')


  return (
    <p className="pricing">
      <span>${data.price}.00</span>/day
    </p>
  )
}