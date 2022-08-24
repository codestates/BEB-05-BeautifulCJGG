import { app } from "./Firebase-init.js";
import { getAuth, setPersistence, browserSessionPersistence, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

export default async function signup(email, password, setError){
  // 1. 회원가입
  const auth = getAuth(app);

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return createUserWithEmailAndPassword(auth, email, password)
    })
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = '/';
      return user;
    })
    .catch((error) => {
      setError(error.message);
    });
  
  // 2. 지갑 생성(api 콜 쏴야함 username, password 보내기)
  const newAccount = await axios.post('localhost:4000/web3/createwallet/', {
    username: email,
    password: password
  })
  return newAccount;
}