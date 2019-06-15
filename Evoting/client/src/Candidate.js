import React from 'react'
import {Form, Button, Row} from 'react-bootstrap'

class Candidate extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            candidateAddress : null,
            candidateParty : null,
            length: null
        }
    }
    
    componentWillReceiveProps(updatedprop){
        if(this.props != updatedprop){
            this.setState({'length' : updatedprop.array_len});
        }
    }

    handleChange = (event) => {
        switch(event.target.name){
            case 'candidateaddress':
                this.setState({'candidateAddress': event.target.value})
                // console.log(this.state)
                break;
            
            case 'party':
                this.setState({'candidateParty' : event.target.value})
                break;
        }
    }

    registerCandidate = () => {
        // console.log('statqw' + this.state.length)
        this.state.length -= 1
        // console.log(this.state.length)
        if (this.state.length >= 0){
            this.props.candidate_info(this.state.candidateAddress, this.state.candidateParty)
            this.props.array_len_recv(this.state.length) 
        }
        else{
            window.alert('You have already registered enough candidates')
        }
    }


    render() {
        // console.log("props", this.props.array_len)
        // console.log("props", this.state.length)
        return (
            <Form>
                <Form.Group controlId={'Candidate'}>
                    <Row>
                    <Form.Control 
                        name = 'candidateaddress'
                        type="text" 
                        placeholder = 'Enter address'
                        onChange = {this.handleChange}
                        value={this.state.candidateAddress}
                    />
                    <Form.Control 
                        name = 'party'
                        type="text" 
                        placeholder = 'Enter Political Party'
                        onChange = {this.handleChange}
                        value = {this.state.candidateParty}
                    />
                    </Row>
                    <Button value="Add" onClick = {this.registerCandidate}>Add candidate</Button>
                    </Form.Group> 
            </Form>
            )
    }
}

export default Candidate 