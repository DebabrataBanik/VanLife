import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError()

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.message || error?.statusText || "An unknown error occurred"}</p>

      {error?.code && <pre>Error Code: {error.code}</pre>}
    </div>
  )
}