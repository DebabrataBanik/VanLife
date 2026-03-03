import { useState } from "react"
import { useLocation, Link } from "react-router"
import { login } from "../services/auth";
import useAuth from "../hooks/useAuth";

export default function Login() {

  const { loading } = useAuth()
  const location = useLocation()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const path = location.state?.path || '/host'

  async function handleLogin({ email, password }) {
    try {
      await login(email, password)
    } catch (err) {
      setError(err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleLogin(formData)
  }

  function handleChange(e) {
    if (error) setError(null)
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
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
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <label>
          <input
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="email"
            type="email"
            required
          />
        </label>
        <label>
          <input
            name="password"
            placeholder="Password"
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
        <Link
          to="/signup"
          replace
          className="signup-cta"
          state={{ path }}
        >
          Create one now
        </Link>
      </p>
    </div>
  )
}