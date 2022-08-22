import { app } from "./Firebase-init.js";
import { getAuth, setPersistence, browserSessionPersistence, createUserWithEmailAndPassword } from "firebase/auth";

export default async function signup(email, password, setError){
  // 1. 회원가입
  const auth = getAuth(app);

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return createUserWithEmailAndPassword(auth, email, password)
    })
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      setError(error.message);
    });
  
  // 2. 지갑 생성
  // const account = await createWallet();
  // return account;
}

async function createWallet(){

}