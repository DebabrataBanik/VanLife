import { Link, Form, useActionData, useNavigation } from "react-router"
import { signup } from "../services/auth"

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const conf_pw = formData.get('confirm_password')

  try {
    if (password === conf_pw) {
      await signup(email, password)
    } else {
      return "Your passwords don't match!"
    }
  } catch (error) {
    return error
  }
}

export default function Signup() {

  const error = useActionData()
  const navigation = useNavigation()

  return (
    <div className="signup-page">
      <h1>Create an account</h1>
      {
        error && <p className="error">{error}</p>
      }
      <Form
        className="form"
        method="post"
        replace
      >
        <label>
          <input
            name="email"
            className="email"
            type="email"
            placeholder="Email address"
          />
        </label>
        <label>
          <input
            name="password"
            className="mid-pw"
            placeholder="Password"
            type="password"
          />
        </label>
        <label>
          <input
            name="confirm_password"
            className="pw"
            placeholder="Confirm Password"
            type="password"
          />
        </label>
        <button
          type="submit"
          disabled={navigation.state === 'submitting'}
        >
          Sign up
        </button>
      </Form>

      <p>Already have an account?
        <Link
          to={`/login`}
          replace
          className="login-cta"
        >
          Log in
        </Link>
      </p>
    </div>
  )
}