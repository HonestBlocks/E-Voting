import React from "react"
import {Form, Button, Table} from 'react-bootstrap'

class Voter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            VoterId : null
        }
    console.log(props.voterslist)
    }


    handleChange = (event) => {
        switch(event.target.name){
            case 'voter':
                this.setState({'VoterId': event.target.value})
                // console.log(this.state)
                break;
        }
    }

    registerVoter = () => {
        this.props.registerVoter(this.state.VoterId)
        
    }

    render() {
       return(
        <Form>
            <Form.Control 
                name="voter"
                type="text" 
                placeholder = 'Enter voter id'
                onChange = {this.handleChange}
                value={this.state.voterid}
            /> 
            <Button value="submit" onClick = {this.registerVoter}> Add Voter </Button>
        </Form>
       )
    }
}


export default Voter