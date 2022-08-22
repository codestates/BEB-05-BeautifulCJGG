import { app } from "./Firebase-init.js";
import { getAuth, setPersistence, browserSessionPersistence, createUserWithEmailAndPassword } from "firebase/auth";

export default function signup(username, password){
  // 1. 회원가입
  const auth = getAuth(app);

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return createUserWithEmailAndPassword(auth, email, password)
    })
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // 2. 지갑 생성
  const account = await createWallet();
  return account;
}

async function createWallet(){

}