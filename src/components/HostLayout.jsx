import { NavLink, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <div className="host-layout">
      <nav>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='/host' end >Dashboard</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='/host/income'>Income</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='/host/vans'>Vans</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='/host/reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}