import { useState } from "react"
import { useLocation, useNavigate } from "react-router"

const DUMMY_USER = {
  email: "test@example.com",
  password: "p123",
};

export default function Login() {

  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const loggedIn = localStorage.getItem('loggedIn')
  const path = location.state?.path || '/host'

  function handleLogin(creds) {
    if (creds.email === DUMMY_USER.email && creds.password === DUMMY_USER.password) {
      localStorage.setItem('loggedIn', true)
      navigate(path, {
        replace: true
      })
    } else {
      setError('Invalid credentials')
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

  function handleLogout() {
    localStorage.removeItem('loggedIn')
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
        loggedIn && <p className="msg">
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
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p>Don't have an acconut? <span title="just UI">Create one now</span></p>
    </div>
  )
}