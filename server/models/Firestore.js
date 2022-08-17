// 예시코드입니다.
import { collection, addDoc, getDocs } from "@firebase/firestore";
import { dbService } from "./Firebase_init.js";

// 🔥Create
async function writeNftData(tokenId, name, imageUrl, description, owner){
  try{
    const doc = await addDoc(collection(dbService, "nfts"), {
      tokenId: tokenId,
      name: name,
      imageUrl: imageUrl,
      description: description,
      createdAt: new Date(Date.now()),
      ownerAccount: owner
    })
    console.log("🌊POST: writeNftData Done");
    return doc;
  } catch (e) {
    throw e;
  }
}

// 🔥Read
async function readAllNftData(){
  const querySnapshot = await getDocs(collection(dbService, "nfts"));
  const result = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.data());
    result.push(doc.data());
  });
  console.log("🌊GET: readAllNftData Done");
  return result;
}

export { writeNftData, readAllNftData };