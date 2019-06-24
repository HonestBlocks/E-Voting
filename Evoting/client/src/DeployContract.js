import React from 'react';
import {Button, Table} from 'react-bootstrap';

class DeployContract extends React.Component{
    constructor(props){
        super(props)
        this.state={
            account : props.account,
            contracts : props.contracts
        }
    }

    deployContract = () => {
        this.props.deployContract();
    }

    render() {
        var contracts = []
        for (let i = 0;i<this.state.contracts.length;i++){
            contracts.push(
                <tr>
                    <td>i+1</td>
                    <td>{this.state.contracts[i]}</td>
                </tr>
            )
        }

        console.log(this.state.contracts)
        return(
            <div>
                <Button value="Deploy" onClick={this.deployContract}>Issue Election</Button>
                <br></br>
                <Table>
                    <thead>
                        <th>#</th>
                        <th>Elections Deployed at</th>
                    </thead>
                    <tbody>
                        {contracts}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default DeployContract