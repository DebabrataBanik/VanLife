import { useState } from "react"
import { useLocation, useNavigate, Link } from "react-router"
import { login, logout } from "../services/auth";
import useAuth from "../hooks/useAuth";

export default function Login() {

  const { user, loading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const path = location.state?.path || '/host'

  async function handleLogin({ email, password }) {
    try {
      await login(email, password)
      navigate(path, { replace: true })
    } catch (err) {
      setError(err.message)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleLogin(formData)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  return (
    <div className="login-page">
      {
        location.state?.message &&
        <p className="login-msg">{location.state.message}</p>
      }
      <h1>Sign in to your account</h1>
      {
        error && <p className="error">{error}</p>
      }
      {
        user && <p className="msg">
          You are logged in! <span onClick={handleLogout}>Log out</span>
        </p>
      }
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <label>
          <input
            name="email"
            placeholder="test@example.com"
            value={formData.email}
            onChange={handleChange}
            className="email"
            required
          />
        </label>
        <label>
          <input
            name="password"
            placeholder="p123"
            value={formData.password}
            onChange={handleChange}
            className="pw"
            type="password"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
        >
          Log in
        </button>
      </form>
      <p>Don't have an account?
        <Link className="signup" to="/signup">Create one now</Link>
      </p>
    </div>
  )
}