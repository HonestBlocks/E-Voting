const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
let secrets;
if (fs.existsSync('secrets.json')) {
 secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
}
// console.log(secrets) 

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    development: {
      network_id: "*",
      host: 'localhost',
      port: 7545
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(secrets.mnemonic, 
          'https://rinkeby.infura.io/v3/'+secrets.infuraAPIkey)
      },
      network_id : 4,
      gasPrice: 2500000000
    }
  }
};
    // "privateKey": "0x0924610925cf327f59ab869aa54d65a3b02579d9998bab56ad52314a06e8bbb8"
//0x1fFc81d252a3950E39c609976badC3953fb3C9f2