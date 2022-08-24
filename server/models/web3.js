import Web3 from 'web3';

export const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const accounts = await web3.eth.getAccounts();
// console.log(accounts);

const serverAddress = accounts[0];
console.log('serverAddress: ', serverAddress);
