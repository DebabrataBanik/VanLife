import { NavLink, Outlet, useNavigation } from "react-router";

export default function HostLayout() {

  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

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
      {
        isLoading
          ?
          <p className="loading-msg">Loading Content...</p>
          :
          <Outlet />
      }
    </div>
  )
}