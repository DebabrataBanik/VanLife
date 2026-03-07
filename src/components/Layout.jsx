import Header from "./Header"
import Footer from "./Footer"
import { Outlet, useNavigation } from "react-router"
import { Loader } from "lucide-react"

export function MyLoadingScreen() {
  return <div className="loader">
    <Loader />
  </div>
}

export default function Layout() {

  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}