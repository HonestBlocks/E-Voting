import React  from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ElectionContract from "./contracts/Election.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";
import Dashboard from "./Dashboard";
import Results from "./Results";
// import DeployContract from "./DeployContract";


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
      voters : null,
      results:undefined
    }
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
       const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log("accounts")

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(networkId);

      const deployedNetwork = ElectionContract.networks[networkId];
      console.log(deployedNetwork)
      const instance = new web3.eth.Contract(
        ElectionContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(instance)
      
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      await this.setState({ ElectionInstance:instance ,web3: web3, account: accounts[0] })

      // setting proxy server
      console.log('SHahahahha')
      await this.callAPIBackend_recv()
      .then(res => { 
        console.log("dchgjhvvjhvhvhvjv"+res.voters);
        this.setState({ voters: res.Voters })
      })
      .catch(err => console.log(err));

    }catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  callAPIBackend_recv = async () => {
    const response_voters =  await fetch('/admin/voters')
    const body = await response_voters.json();
    console.log('HELLLL ')
    if (response_voters.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body)
    return body
  } 

  callAPIBackend_send = async (wallet, voterid) => {
    var resp = await fetch('/admin/wallet'
                          ,{method: 'POST',
                              body: JSON.stringify({"address": wallet[0]['address'],"privateKey":wallet[0]['privateKey'],'voterid':voterid
                              }),
                              headers: {'Content-Type': 'application/json' }
                            })
  return resp;
  }


  setCandidate_arr_lencallback =  async (arr_len) => {
    console.log('Application', parseInt(arr_len))
    await this.setState({"candidate_arr_len" : arr_len})

    await this.state.ElectionInstance.methods.set_candidates_arr_len(this.state.candidate_arr_len)
                .send({from : this.state.account})
                .on('confirmation', (connum,receipt) => {
                  console.log(connum, receipt)
                })
  }

  setCandidate_infocallback = async (address, party) => {
    await this.setState({'candidateaddress' : address,'politicalparty': party })

    await this.state.ElectionInstance.methods
          .registerCandidates(this.state.candidateaddress, this.state.politicalparty)
          .send({from : this.state.account, gas : 300000})
          .on('confirmation', (connum,receipt) => {
            console.log(connum, receipt)
          })

    console.log('YAY2', this.state.candidateaddress, this.state.politicalparty)
  }
  
  walletcallback = async (VoterId) => {
    var voter = this.state.voters.find(x => x.voterid == VoterId)
    if(voter)
    {
      console.log(voter)
      // generate wallet
      // var wallet = await this.state.web3.eth.accounts.wallet.create(1);
      // send wallet 
      // await this.callAPIBackend_send(wallet.accounts, VoterId)
      // .then(async (msg) => {
        // give voting rights and send ethers 
        await this.state.ElectionInstance.methods.giveRightToVote(voter.address)
        .send({from:this.state.account})
        .on('confirmation', (connum,receipt) => {
          console.log(connum, receipt)
        // })
      })
      .catch(err => console.log(err));;
    }
  }

  fetchresultscallback = async () => {
    await this.state.ElectionInstance.methods.results()
    .call({from : this.state.account})
    .then((result) => {
      this.setState({"results": result});
    })
  }


  render() {  
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    console.log(this.state.voters)
    return (
          <Router>
              <div>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
              <ul>
                <li>
                  <Link to='/'>Issue Election</Link>
                </li>
                <li>
                  <Link to='/results'>Results</Link>
                </li>
              </ul>
              
              <Route exact path="/" render={(props) =>
               <Dashboard {...props} setCandidate_arr_len = {this.setCandidate_arr_lencallback}
                  setCandidate_info = {this.setCandidate_infocallback}
                  registerVoter = {this.walletcallback} voterlist = {this.state.voters}/> }
               />
              
              <Route exxact path="/results" render={(props) =>
                <Results {...props} results={this.state.results } fetchResults = {this.fetchresultscallback} />} 
              />
              </div>
          </Router>
    );
  }
}

