import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>Sorry, the page were looking for does not exist!</h1>
      <Link to='/'>Ruturn to home</Link>
    </div>
  )
}