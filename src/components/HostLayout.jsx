import { NavLink, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <div className="host-layout">
      <nav>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='.' end >Dashboard</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='income'>Income</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='vans'>Vans</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}