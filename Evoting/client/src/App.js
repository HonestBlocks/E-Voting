import React  from "react";
import ElectionContract from "./contracts/Election.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";
import Dashboard from "./Dashboard.js";
import {Accounts} from 'web3-eth-accounts';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ElectionInstance: undefined,
      account: null,
      web3: null,
      candidate_arr_len: null,
      candidateaddress: undefined,
      politicalparty:undefined,
      voters : null
    }
    // this.handleIssueElection = this.handleIssueElection.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // console.log(web3)

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(networkId);

      const deployedNetwork = ElectionContract.networks[networkId];
      const instance = new web3.eth.Contract(
        ElectionContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(instance)
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      await this.setState({ ElectionInstance:instance ,web3: web3, account: accounts[0] })
      console.log("Hiiii", this.state.web3)

      // setting proxy server
      await this.callAPIBackend_recv()
      .then(res => { 
        this.setState({ voters: res.Voters })
      })
      .catch(err => console.log(err));

      console.log(this.state.voters[0].voterid)

    }catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  callAPIBackend_recv = async () => {
    const response_voters =  await fetch('/admin')
    const body = await response_voters.json();
    
    if (response_voters.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body)
    return body
  } 

  callAPIBackend_send = async (wallet, voterid) => {
    var resp = await fetch('/admin', {method: 'POST',
                                     body: JSON.stringify(
                                       {"address": wallet[0]['address'],
                                      "privateKey":wallet[0]['privateKey'],
                                      'voterid':voterid}
                                      ),
                                      headers: {'Content-Type': 'application/json' }
                                    })
  
  console.log(resp)
  return resp;
  }


  mycallback =  async (arr_len) => {
    console.log('Application', typeof(parseInt(arr_len)))
    await this.setState({"candidate_arr_len" : arr_len})

    await this.state.ElectionInstance.methods.set_candidates_arr_len(this.state.candidate_arr_len)
                .send({from : this.state.account})
                .on('confirmation', (connum,receipt) => {
                  console.log(connum, receipt)
                })
    console.log('YAY', this.state.candidate_arr_len)
  }

  mycallback2 = async (address, party) => {
    await this.setState({'candidateaddress' : address,'politicalparty': party })

    await this.state.ElectionInstance.methods
          .registerCandidates(this.state.candidateaddress, this.state.politicalparty)
          .send({from : this.state.account, gas : 300000})
          .on('confirmation', (connum,receipt) => {
            console.log(connum, receipt)
          })

    console.log('YAY2', this.state.candidateaddress, this.state.politicalparty)
  }
  
  mycallback3 = async (VoterId) => {
    if(this.state.voters.find(x => x.voterid == VoterId)){
      // generate wallet
      var wallet = await this.state.web3.eth.accounts.wallet.create(1);
      // send wallet 
      await this.callAPIBackend_send(wallet.accounts, VoterId)
      .then(async (msg) => {
        // give voting rights and send ethers
        await this.state.ElectionInstance.methods.giveRightToVote("0x81BfC15Ae5286F085aA35AD15dd673A01FD26859")
        .send({from:this.state.account, value:1})
        .on('confirmation', (connum,receipt) => {
          console.log(connum, receipt)
        })
      })
      .catch(err => console.log(err));;
    }
  }


  render() {  
    if (!this.state.web3) {
      console.log("llll"+this.state.web3)
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
            <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
             <Dashboard 
             setCandidate_arr_len = {this.mycallback} 
             setCandidate_info = {this.mycallback2} 
             registerVoter = {this.mycallback3} voterlist = {this.state.voters}/>
            </div>
    );
  }

}

