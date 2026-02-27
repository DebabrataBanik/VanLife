import { Navigate, Outlet } from "react-router"

export default function AuthLayout() {
  const authenticated = false

  if (!authenticated) {
    return <Navigate
      to='/login'
      state={{ message: 'You need to login first' }}
    />
  }

  return <Outlet />
}