import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { Loader } from "lucide-react";

export default function AuthLayout() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // checking user auth status
  if (loading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    )
  }

  // not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You need to login first",
          path: location.pathname,
        }}
        replace
      />
    );
  }

  // logged in
  return <Outlet />;
}