import { Link, useNavigate, useLocation } from "react-router"
import { useState } from "react"
import { signup } from "../services/auth"
import useAuth from "../hooks/useAuth"

export default function Signup() {

  const navigate = useNavigate()
  const location = useLocation()
  const { loading } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })
  const [error, setError] = useState(null)

  const path = location.state?.path || '/host'

  async function handleSignup(email, password) {
    try {
      await signup(email, password)
      navigate(path, { replace: true })
    } catch (err) {
      setError(err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { email, password, confirm_password } = formData
    if (password === confirm_password) {
      handleSignup(email, password)
      setError(null)
    } else {
      setError('Your passwords did not match!')
    }
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
    <div className="signup-page">
      <h1>Create an account</h1>
      {
        error && <p className="error">{error}</p>
      }
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            name="email"
            className="email"
            type="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            name="password"
            className="mid-pw"
            placeholder="Password"
            type="password"
            minLength={6}
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            name="confirm_password"
            className="pw"
            placeholder="Confirm Password"
            type="password"
            required
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>
      </form>
      <p>Already have an account?
        <Link
          to="/login"
          replace
          className="login-cta"
        >
          Log in
        </Link>
      </p>
    </div>
  )
}