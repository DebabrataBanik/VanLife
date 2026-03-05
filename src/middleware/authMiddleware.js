import { getUser } from "../services/auth"
import { redirect } from "react-router"
import { userContext } from "../context/userContext"

export async function authMidlleware({ request, context }) {
  const user = await getUser()
  if (!user) {
    const url = new URL(request.url)
    throw redirect(`/login?from=${url.pathname}`)
  }
  context.set(userContext, user)
}