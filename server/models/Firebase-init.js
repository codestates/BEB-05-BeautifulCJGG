// firebase 연결
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxLB3OrU8-TowNNG01jdv5HlA_hS-8QyA",
  authDomain: "codestates-incentive-community.firebaseapp.com",
  projectId: "codestates-incentive-community",
  storageBucket: "codestates-incentive-community.appspot.com",
  messagingSenderId: "915919593722",
  appId: "1:915919593722:web:4f02ae65ecdb98aaeb2943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log(db);