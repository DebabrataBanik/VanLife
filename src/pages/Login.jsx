import { useState } from "react"
import { useLocation } from "react-router"

export default function Login() {

  const location = useLocation()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
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
      <form
        onSubmit={handleSubmit}
        className="form"
        action=""
      >
        <label>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="email"
            type="email"
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
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <p>Don't have an acconut? <span>Create one now</span></p>
    </div>
  )
}