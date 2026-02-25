import { Link, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <>
      <nav>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </>
  )
}