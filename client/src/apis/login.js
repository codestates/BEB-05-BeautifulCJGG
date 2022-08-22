import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

export async function login(userID, password, setError){
  try {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, userID, password);
      })
      .then((result) => {
        console.log("🙆🏻‍♂️Login Success!");
      })
      .catch((error) => {
        if(setError){
          setError(error.message);
        }
      });
  } catch (e) {
    throw new Error(e);
  }
}