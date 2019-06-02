const Web3 = require('web3');
const web3 = new Web3('ws://localhost:7545');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const contractaddress = '0x7ce7081433061158b30dd91914629905a9d44a2d'
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "toVoter",
				"type": "address"
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]
const mycontract = new web3.eth.Contract(contractABI, contractaddress);

var useraddress
var promise1 = new Promise(function (resolve, reject) {
    readline.question(`Enter your address: `, (address) => {
    useraddress = address;
    resolve(useraddress);
    readline.close();
  });
})
promise1.then(() => {
    // console.log(useraddress);    
    // giveVotingRights();
    // console.log('11!1')
    var voteraddress;
    var promise2 = new Promise(function (resolve, reject) {
        console.log('sese');
        readline.question(`Enter the address of the voter to give voting Rights: `, (address) =>{
            readline.close();
            console.log('asd')
            voteraddress = address;
            console.log(voteraddress);
            resolve(voteraddress);
            console.log("!!!!!!")
            
        });
})
    promise2.then(() => {
    console.log('herer');
    mycontract.methods.giveRightToVote()
    .call({from : useraddress})
    .then((result) => {
        console.log('!!!');
        console.log(result)
    }).catch((err) => {console.log(err)})
})
})

// var giveVotingRights = () => {
//     var voteraddress;
//     var promise2 = new Promise(function (resolve, reject) {
//         console.log('sese');
//         readline.question(`Enter the address of the voter to give voting Rights: `, (address) =>{
//             console.log('asd')
//             voteraddress = address;
//             console.log(voteraddress);
//             resolve(voteraddress);
//             console.log("!!!!!!")
//             readline.close();
//         });
// })
//     promise2.then(() => {
//     console.log('herer');
//     mycontract.methods.giveRightToVote()
//     .call({from : useraddress})
//     .then((result) => {
//         console.log('!!!');
//         console.log(result)
//     }).catch((err) => {console.log(err)})
// })
// }


// mycontract.methods.candidates_arr(0).call({from : useraddress})
//         .then((result => {
//             console.log(result);
//         }))
//         .catch((err) => {console.log(err)});
// promise1