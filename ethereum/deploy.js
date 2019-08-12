const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/token.json');

const provider = new HDWalletProvider(
    'siege bachelor blind acoustic glide butter snack avoid evil priority ready gain',
    'https://rinkeby.infura.io/v3/944f5399c18049d9920b3bc9c60583de'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Account address[0] : ", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                        .deploy({data: '0x' + compiledFactory.bytecode})
                        .send({gas:"1000000", from: accounts[0] });

        console.log("COntract deployed to : ", result.options.address);
};
deploy();