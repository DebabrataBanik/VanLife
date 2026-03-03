import { Link, NavLink, useNavigate } from "react-router"
import { User } from "lucide-react"
import { LogOut } from "lucide-react"
import useAuth from "../hooks/useAuth"
import { logout } from "../services/auth"

export default function Header() {

  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate('/')
  }

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
        {
          user ?
            <LogOut
              size={17}
              onClick={handleLogout}
              className="logout"
            />
            :
            <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
              to='login'
            >
              <User size={17} className="user" />
            </NavLink>
        }
      </nav>
    </header>
  )
}