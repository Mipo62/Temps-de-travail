import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4anyzUy4jmXG1f6nvuWzphHdtR1mYg2c",
  authDomain: "working-time-33018.firebaseapp.com",
  projectId: "working-time-33018",
  storageBucket: "working-time-33018.firebasestorage.app",
  messagingSenderId: "172774543780",
  appId: "1:172774543780:web:3827b920e202c4c94bf131"
};

// Initialisation
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
