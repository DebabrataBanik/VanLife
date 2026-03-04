import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Layout, { MyLoadingScreen } from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import Details from "./pages/Host/Details"
import Pricing from "./pages/Host/Pricing"
import Photos from "./pages/Host/Photos"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AuthLayout from "./components/AuthLayout"
import LoginLayout from "./components/LoginLayout"
import Error from "./components/Error"

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
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />

      <Route element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />

          <Route path="vans/:id" element={<HostVanDetail />}>
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