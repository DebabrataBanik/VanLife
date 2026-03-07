import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Layout, { MyLoadingScreen } from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Details from './pages/Host/Details'
import Pricing from "./pages/Host/Pricing"
import Photos from "./pages/Host/Photos"
import NotFound from "./pages/NotFound"
import Login, { action as loginAction } from "./pages/Login"
import Signup, { action as signupAction } from "./pages/Signup"
import AuthLayout from "./components/AuthLayout"
import LoginLayout from "./components/LoginLayout"
import Error from "./components/Error"
import { authMidlleware } from "./middleware/authMiddleware"
import { guestMiddleware } from "./middleware/guestMiddleware"

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      HydrateFallback={MyLoadingScreen}
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        lazy={() => import('./pages/Vans/Vans')}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        lazy={() => import('./pages/Vans/VanDetail')}
        errorElement={<Error />}
      />

      <Route
        element={<LoginLayout />}
        middleware={[guestMiddleware]}
      >
        <Route
          path="login"
          element={<Login />}
          action={loginAction}
        />
        <Route
          path="signup"
          element={<Signup />}
          action={signupAction}
        />
      </Route>

      <Route
        element={<AuthLayout />}
        middleware={[authMidlleware]}
      >
        <Route
          path="host"
          element={<HostLayout />}
          errorElement={<Error />}
        >
          <Route
            index
            lazy={() => import("./pages/Host/Dashboard")}
          />
          <Route
            path="income"
            lazy={() => import('./pages/Host/Income')}
          />
          <Route
            path="reviews"
            lazy={() => import('./pages/Host/Reviews')}
          />
          <Route
            path="vans"
            lazy={() => import('./pages/Host/HostVans')}
          />

          <Route
            path="vans/:id"
            id="host-van-detail"
            lazy={() => import('./pages/Host/HostVanDetail')}
          >
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}