const path = require('path');
const fs = require('fs-extra');

const builPath = path.resolve('../', 'build');

const createBuildFolder = () => {
	fs.emptyDirSync(builPath);
}

const contractsFolderPath = path.resolve('../', 'contracts');

const buildSources = () => {
  const sources = {};
  const contractsFiles = fs.readdirSync(contractsFolderPath);
  
  contractsFiles.forEach(file => {
    const contractFullPath = path.resolve(contractsFolderPath, file);
    sources[file] = { 
      content: fs.readFileSync(contractFullPath, 'utf8')
    };
  });
  
  return sources;
}

const input = {
	language: 'Solidity',
	sources: buildSources(),
	settings: {
		outputSelection: {
			'*': {
				'*': [ 'abi', 'evm.bytecode' ]
			}
		}
	}
}

const solc = require('solc');

const compileContracts = () => {
	const compiledContracts = JSON.parse(solc.compile(JSON.stringify(input))).contracts;

	for (let contract in compiledContracts) {
		for(let contractName in compiledContracts[contract]) {
			fs.outputJsonSync(
				path.resolve(builPath, `${contractName}.json`),
				compiledContracts[contract][contractName],
				{
					spaces: 2
				}
			)
		}
	}
}



(function run () {
    createBuildFolder();
	compileContracts();
	console.log("!!!!!!!!!!!!!");
})();


// const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// const provider = new HDWalletProvider(
// 	'twelve words mnemonic',
// 	'localhost:7545'
// );

const provider = "http://localhost:7545"

const web3 = new Web3(provider);


const compiledContract = require('../build/Election.json');

(async () => {
	const accounts = await web3.eth.getAccounts()
	console.log(accounts[0])
	console.log(`Attempting to deploy from account: ${accounts[0]}`);

	const deployedContract = await new web3.eth.Contract(compiledContract.abi)
		.deploy({
			data: '0x' + compiledContract.evm.bytecode.object
		})
		.send({
			from: accounts[0],
			gas: '2000000'
		})
		.on('receipt', (receipt) => {
			console.log(receipt);
		})
	
	console.log(
		`Contract deployed at address: ${deployedContract.address}`
	);

	provider.engine.stop();
	console.log('Stop')
})();