import { getAuth, signOut } from "firebase/auth";

export async function logout(){
  try {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      console.log("👋🏻Sign out Success");
    })
  } catch (e) {
    throw new Error(e);
  }
}