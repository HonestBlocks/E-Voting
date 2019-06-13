import React  from "react";
import ElectionContract from "./contracts/Election.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";
import Dashboard from "./Dashboard.js";

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
    }
    // this.handleIssueElection = this.handleIssueElection.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event)
  {
    switch(event.target.name){
        case 'candidate_arr_len':
            this.setState({'candidate_arr_len':event.target.value})
            return

        case "Candidateaddress":
            this.setState({'candidateAddress': event.target.value})
            break;

        case "party":
            this.setState({"politicalparty" : event.target.value})
            break;
    }
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
      // this.addEventListener(this)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  
  render() {  
    if (!this.state.web3) {
      console.log("llll"+this.state.web3)
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
            <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
             <Dashboard setCandidate_arr_len = {this.mycallback} setCandidate_info = {this.mycallback2} />  
            </div>
    );
  }

  mycallback = (arr_len) => {
    console.log('Application', arr_len)
    this.setState({"candidate_arr_len" : arr_len})
    console.log('YAY', this.state.candidate_arr_len)
  }

  mycallback2 = (address, party) => {
    this.setState({'candidateaddress' : address,'politicalparty': party })
    console.log('YAY2', this.state.candidateaddress, this.state.politicalparty)
  }
}

