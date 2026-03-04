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

  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="app-container">
      {/* {isLoading && <h1>Loading...</h1>} */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}