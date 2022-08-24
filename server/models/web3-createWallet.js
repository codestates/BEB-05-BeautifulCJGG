import { web3 } from "./web3.js";
import { db } from "./Firebase-init.js";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export default async function createWallet(username, password){
  try{
    // 1. ganache를 통해 account 생성
    const newAccount = await web3.eth.personal.newAccount(password);
    console.log('🪪newAccount: ', newAccount);

    // 2. eth faucet - 1eth 전송
    const sender = '25a2325bb029ea7473f97e0f47e1e6c583dd15e99ce99d27bb95664fedc7e70b';
    const signedTx = await web3.eth.accounts.signTransaction({
      to: newAccount,
      value: '1000000000000000000',
      gas: 2000000
    }, sender);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', console.log);
    console.log('💸1Ether faucet 완료');

    // 3. DB에 추가
    const counterDocRef = doc(db, "counter", "users");
    const counterSnap = await getDoc(counterDocRef);

    const writeData = await addDoc(collection(db, "users"), {
      userId: counterSnap.data().id_count,
      username: username,
      createdAt: new Date(Date.now()),
      account: newAccount
    });
    
    // 3-1. user counter 늘리기
    await updateDoc(counterDocRef, {
      id_count: counterSnap.data().id_count+1
    });
    console.log('🙆🏻‍♂️DB 저장 완료');

    // return
    return newAccount;
  } catch (e) {
    throw new Error(e);
  }
}

