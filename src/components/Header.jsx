import { Link, NavLink } from "react-router"

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to='/'>#VANLIFE</Link>
      <nav>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='host'
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : null} to='vans'
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}