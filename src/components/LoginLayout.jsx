import { Navigate, Outlet, useSearchParams } from "react-router"
import useAuth from "../hooks/useAuth"
import { Loader } from "lucide-react"

export default function LoginLayout() {

  const { user, loading } = useAuth()
  const [searchParams] = useSearchParams()
  const path = searchParams.get('from') || '/host'

  if (loading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    )
  }

  if (user) {
    return (
      <Navigate to={path} replace />
    )
  }

  return <Outlet />
}