import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfzg3wYPvt2nRxvYojprjUQ5hX32SaIZk",
  authDomain: "instagram-clone-2e9d3.firebaseapp.com",
  projectId: "instagram-clone-2e9d3",
  storageBucket: "instagram-clone-2e9d3.appspot.com",
  messagingSenderId: "93974240899",
  appId: "1:93974240899:web:26d19c603e0264f9c105b6",
  measurementId: "G-TDJFMGBP2P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
