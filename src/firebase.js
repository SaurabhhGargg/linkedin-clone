import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBma6Q3xMwqDUZD2-eLiMXtZeJonwaQAf0",
    authDomain: "linkedin-clone-fd8f7.firebaseapp.com",
    projectId: "linkedin-clone-fd8f7",
    storageBucket: "linkedin-clone-fd8f7.appspot.com",
    messagingSenderId: "305578241420",
    appId: "1:305578241420:web:3190fbcb87fbf0fb3dbaa9"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;