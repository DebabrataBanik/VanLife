import { Link, Form, useActionData, useNavigation, useSearchParams } from "react-router"
import { login } from "../services/auth";

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    await login(email, password)
  } catch (error) {
    return error
  }
}

export default function Login() {

  const error = useActionData()
  const navigation = useNavigation()
  const [searchParams] = useSearchParams()

  const message = searchParams.get('message') || ''

  return (
    <div className="login-page">
      {
        message && <p className="error">{message}</p>
      }
      <h1>Sign in to your account</h1>
      {
        error && <p className="error">{error}</p>
      }
      <Form
        method="post"
        className="form"
        replace
      >
        <label>
          <input
            name="email"
            placeholder="Email address"
            className="email"
            type="email"
          />
        </label>
        <label>
          <input
            name="password"
            placeholder="Password"
            className="pw"
            type="password"
          />
        </label>
        <button
          type="submit"
          disabled={navigation.state === 'submitting'}
        >
          {navigation.state === 'submitting' ? 'Logging in' : 'Log in'}
        </button>
      </Form>
      <p>Don't have an account?
        <Link
          to={`/signup`}
          replace
          className="signup-cta"
        >
          Create one now
        </Link>
      </p>
    </div>
  )
}