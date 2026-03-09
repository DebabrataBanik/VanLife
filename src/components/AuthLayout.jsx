import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function AuthLayout() {
  const { user, loading } = useAuth()

  /**
   * Middleware (authMiddleware) handles auth protection and works perfectly for in-app navigation (link clicks) — it intercepts before any render occurs.
   * However, on a hard refresh / manual URL entry, the browser does a full page reload. React boots from zero and starts rendering the component tree immediately while Firebase is still asynchronously rehydrating auth state from IndexedDB. During this tick, middleware loses the race against React's render cycle — AuthLayout mounts and flashes protected content before middleware can fire its redirect.

   * This guard handles that specific edge case:
   - loading: true  → Firebase hasn't confirmed auth state yet, render nothing
   - loading: false, user: null → Firebase confirmed no user, render nothing while middleware redirect processes
   - loading: false, user: exists → auth confirmed, safe to render
   */
  if (loading || !user) return null

  return <Outlet />
}