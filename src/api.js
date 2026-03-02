import { db } from "./firebase";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

// this collection ref is for the vans collection in our firestore
const vansCollectionRef = collection(db, "vans")
export async function getVans() {
  const collectionSnap = await getDocs(vansCollectionRef)
  const vans = collectionSnap.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  // this doc ref is for a specific van document in our vans collection
  const docRef = doc(db, "vans", id)
  // this doc snap is simillar to the mapped doc is in getVans
  const docSnap = await getDoc(docRef)
  return {
    ...docSnap.data(),
    id: docSnap.id
  }
}

// this function is for fetching the vans that belong to the host with id 123(hardcoded for now, but in a real app this would be dynamic based on the logged in user)
export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", 123))
  const collectionSnap = await getDocs(q)
  const vans = collectionSnap.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}