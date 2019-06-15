import React from 'react';
import { Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Web3 from 'web3';

import { UserList } from './users';
import { PostList, PostCreate } from './posts';
import { Election, ElectionCreate } from './Election';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


export default class App extends React.Component {
  state = {account: ''}

  async loadBlockChain() {
    const web3 = new Web3('http://localhost:7545')
    const network = await web3.eth.net.getNetworkType();
    console.log(network) // should give you main if you're connected to the main network via metamask...
    const accounts = await web3.eth.getAccounts().then(console.log('ss'))
    console.log(accounts);
    this.setState({account: accounts[0]})
  }

  componentDidMount() {
    this.loadBlockChain()
  }

  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate} />
        <Resource name="users" list={UserList} />
        <Resource name="election" list={UserList} />
        <Resource name="results" list={Election} create={ElectionCreate} />
      </Admin>
    );        
  }
}
