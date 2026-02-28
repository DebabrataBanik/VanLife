import { Navigate, Outlet, useLocation } from "react-router"

export default function AuthLayout() {
  const authenticated = localStorage.getItem('loggedIn') === 'true'

  const location = useLocation()

  if (!authenticated) {
    return <Navigate
      to='/login'
      state={{ message: 'You need to login first', path: location.pathname }}
      replace
    />
  }

  return <Outlet />
}