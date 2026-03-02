import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTjfOBWXWUrNtVMo7Zk0K-vmmiElJQKug",
  authDomain: "vanlife-a5991.firebaseapp.com",
  projectId: "vanlife-a5991",
  storageBucket: "vanlife-a5991.firebasestorage.app",
  messagingSenderId: "919718739795",
  appId: "1:919718739795:web:7fbc072b1b42a431032ba6",
  measurementId: "G-1JCL864JX5"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)

