import { web3 } from "./web3.js";
import { db } from "./Firebase-init.js";
import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";

// const newaccount = await createWallet('asdf0593');
// console.log(newaccount);

// const sender = '25a2325bb029ea7473f97e0f47e1e6c583dd15e99ce99d27bb95664fedc7e70b';
// const signedTx = await web3.eth.accounts.signTransaction({
//   to: '0x127D45b46664B0dE580A0B9Dfc8B9a7Eae24A9Be',
//   value: '1000000000000000000',
//   gas: 2000000
// }, sender);
// console.log(signedTx);

// web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', console.log);

// const balance = await web3.eth.getBalance('0x127D45b46664B0dE580A0B9Dfc8B9a7Eae24A9Be');
// console.log(balance);

// const docRef = doc(db, "counter", "users");
// const docSnap = await getDoc(docRef);
const counterSnap = await getDoc(doc(db, "counter", "users"));
console.log(counterSnap.data().id_count);


// const citiesRef = collection(db, "cities");
// await setDoc(doc(citiesRef, "SF"), {
//   name: "San Francisco", state: "CA", country: "USA",
//   capital: false, population: 860000,
//   regions: ["west_coast", "norcal"] });
