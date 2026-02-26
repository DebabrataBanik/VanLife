import { useOutletContext } from "react-router"

export default function Photos() {

  const data = useOutletContext()

  return (
    <img src={data.imageUrl} alt={data.name} />
  )
}