import { Link, NavLink } from "react-router"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to='/'>#VANLIFE</Link>
      <nav>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''} to='host'
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''} to='about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''} to='vans'
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''}
          to='login'
        >
          <User size={17} className="user" />
        </NavLink>
      </nav>
    </header>
  )
}