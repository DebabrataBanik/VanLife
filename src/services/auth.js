import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export async function signup(email, password) {
  try {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password)
    return userCreds.user
  } catch (err) {
    throw new Error(err?.message || "An error occurred during sign up.")
  }
}

export async function login(email, password) {
  try {
    const userCreds = await signInWithEmailAndPassword(auth, email, password)
    return userCreds.user
  } catch (err) {
    throw new Error(err?.message || "An error occurred during sign in.")
  }
}

export async function logout() {
  try {
    await signOut(auth)
  } catch (err) {
    throw new Error(err?.message || "An error occurred during sign out.")
  }
}