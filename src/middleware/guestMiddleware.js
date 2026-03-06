import { getUser } from "../services/auth";
import { redirect } from "react-router";

export async function guestMiddleware({ request }) {
  const user = await getUser()
  if (user) {
    const url = new URL(request.url)
    const redirectTo = url.searchParams.get('from') || 'host'
    console.log(url)
    throw redirect(redirectTo)
  }
}