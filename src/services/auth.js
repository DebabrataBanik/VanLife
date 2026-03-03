import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function getAuthErrorMessage(code) {
  const errors = {
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/invalid-credential': 'Invalid email or password.'
  }
  return errors[code] || 'Something went wrong. Please try again.'
}

export async function signup(email, password) {
  try {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password)
    return userCreds.user
  } catch (err) {
    throw getAuthErrorMessage(err.code)
  }
}

export async function login(email, password) {
  try {
    const userCreds = await signInWithEmailAndPassword(auth, email, password)
    return userCreds.user
  } catch (err) {
    throw getAuthErrorMessage(err.code)
  }
}

export async function logout() {
  try {
    await signOut(auth)
  } catch (err) {
    throw getAuthErrorMessage(err.code)
  }
}