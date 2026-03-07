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

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      HydrateFallback: MyLoadingScreen,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'vans',
          lazy: () => import('./pages/Vans/Vans'),
          errorElement: Error
        },
        {
          path: 'vans/:id',
          lazy: () => import('./pages/Vans/VanDetail'),
          errorElement: Error
        },
        {
          Component: LoginLayout,
          middleware: [guestMiddleware],
          children: [
            {
              path: 'login',
              Component: Login,
              action: loginAction
            },
            {
              path: 'signup',
              Component: Signup,
              action: signupAction
            }
          ]
        },
        {
          Component: AuthLayout,
          middleware: [authMidlleware],
          children: [
            {
              path: 'host',
              Component: HostLayout,
              errorElement: Error,
              children: [
                {
                  index: true,
                  lazy: () => import('./pages/Host/Dashboard')
                },
                {
                  path: 'income',
                  lazy: () => import('./pages/Host/Income')
                },
                {
                  path: 'reviews',
                  lazy: () => import('./pages/Host/Reviews')
                },
                {
                  path: 'vans',
                  lazy: () => import('./pages/Host/HostVans')
                },
                {
                  path: 'vans/:id',
                  id: 'host-van-detail',
                  lazy: () => import('./pages/Host/HostVanDetail'),
                  children: [
                    {
                      index: true,
                      Component: Details
                    },
                    {
                      path: 'pricing',
                      Component: Pricing
                    },
                    {
                      path: 'photos',
                      Component: Photos
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          path: '*',
          Component: NotFound
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}