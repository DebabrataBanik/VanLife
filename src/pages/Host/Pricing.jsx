import { useOutletContext } from "react-router"

export default function Pricing() {

  const data = useOutletContext()

  return (
    <p className="pricing">
      <span>${data.price}.00</span>/day
    </p>
  )
}