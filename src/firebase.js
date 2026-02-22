import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBUAftdKn56hD0ONpKdAldBBUTL-AdHSYY",
  authDomain: "netflix-clone-76001.firebaseapp.com",
  projectId: "netflix-clone-76001",
  storageBucket: "netflix-clone-76001.appspot.com", // 🔁 Fixed typo (should be .appspot.com)
  messagingSenderId: "236309261953",
  appId: "1:236309261953:web:06f7b087f135a3a0d56780",
  measurementId: "G-QHSMSMJTD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    throw error; // Let UI handle toast
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); // ✅ added await
  } catch (error) {
    console.error("Login Error:", error);
    throw error; // Let UI handle toast
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

export { auth, db, login, signUp, logout };
