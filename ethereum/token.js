import web3 from './web3';
import token from './build/token.json';
const instance = new web3.eth.Contract(
    JSON.parse(token.interface),
    '0x5ffABa0f6C41dd059A6c8a7e0e7F341D6800af1d'   
);
export default instance;