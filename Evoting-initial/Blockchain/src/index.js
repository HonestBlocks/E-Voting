const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const contractaddress = '0x4dd7c594f0a6c74aefb8240dc60694a547d6622b'
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates_arr",
		"outputs": [
			{
				"name": "party",
				"type": "string"
			},
			{
				"name": "candidate_id",
				"type": "address"
			},
			{
				"name": "votes_recv",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "toVoterr",
				"type": "string"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_length",
				"type": "uint256"
			}
		],
		"name": "set_candidates_arr_len",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_candidate_id",
				"type": "address"
			},
			{
				"name": "_party",
				"type": "string"
			}
		],
		"name": "registerCandidates",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
const mycontract = new web3.eth.Contract(contractABI, contractaddress);

// console.log(mycontract.jsonInterface);

choices = { 
            1: 'GiveVoting Rights',
            2: 'Show Results',
            3: 'registerCandidates:',
            4: 'set_candidates_arr_len',
            5: 'vote'

}
const askaddress = () => {
    return new Promise(function (resolve, reject) {
        readline.question(`\nEnter your address: `, (address) => {
        var useraddress = address;
        resolve(useraddress);
  });
})
}

const askchoices = () => {
    return new Promise(function (resolve, reject) {
        readline.question(`\nEnter your choice: `, (choice) => {
        var function_id = choice;
        resolve(function_id);
  });
})
}

const askvoteraddress = () => {
    return new Promise(function (resolve, reject) {
        readline.question(`Enter voter's address: `, (address) => {
            var voteraddress = address;
            resolve(voteraddress);
        })
    })
}

const askindex = () => {
    return new Promise(function(resolve, reject) {
        readline.question(`Enter index to vote`, (index) => {
            var candidate_index = parseInt(index,10);
            resolve(candidate_index);
         })
    })
}

const askcandidateinfo =  () => {
    return new Promise(function (resolve, reject) {
        readline.question(`Enter Candidates Address`, (candidate_addr) => {
            readline.question(`Enter Party name`, (candidate_party) => {
                var party = candidate_party;
                var address = candidate_addr;
            resolve([address, party]); 
            })
        })
    })
}

const askarrlen = () => {
    return new Promise(function (resolve, reject) {
        readline.question(`Enter number of candidates`, (length) => {
            console.log(typeof(length))
            var ll = parseInt(length,10); 
            resolve(ll);
        })
    })
}

const main = async () => {
    let userAddress;
    let choice;
    await askaddress().then((address) => {

        console.log(mycontract.methods.set_candidates_arr_len(1).call({ from : address}))
        console.log('2')
        userAddress = address;
        console.log(userAddress);
    });
    await askchoices().then((option) => {
        choice = option;
        console.log(typeof(option));
    });
    
    if(choice === '1'){
        await askvoteraddress().then((voteraddress) =>{
        mycontract.methods.giveRightToVote(voteraddress)
            .send({from: userAddress})
            .on('transactionHash', (transactionHash) => {
                console.log(transactionHash);
            })
        })
        readline.close();
    }
    
        else if(choice == '2'){
        console.log("run");
        await askindex().then((index => {
        mycontract.methods.candidates_arr(index).call({from : userAddress})
        .then((result => {
            console.log(result);
        }))
        .catch((err) => {console.log(err)});
        }))
    }

    // gas over
    else if(choice == '3'){
        await askcandidateinfo().then((arr) => {
            mycontract.methods.registerCandidates(arr[0],arr[1])
            .send({from: userAddress}, {gas:3000000})
            .on('transactionHash', (transactionHash) => {
                console.log(transactionHash);
            })
        })
    }

    else if(choice == '4'){
        await askarrlen().then(length => {
            console.log(typeof(length))
            mycontract.methods.set_candidates_arr_len(length)
            .send({from: userAddress, gas: 3000000})
            .on('transactionHash', (transactionHash) => {
                console.log(transactionHash);
            })
        })
        .catch(err => {
            console.log('err')
        })
    }

    else if(choice == '5'){
        await askindex().then((index) => {
            mycontract.methods.vote(index)
            .send({from: userAddress})
            .on('transactionHash', (transactionHash) => {
                console.log(transactionHash);
            })
        })
        readline.close();
    }

    else{
        console.log('Select a valid input');
    }

    readline.close();
}

main();