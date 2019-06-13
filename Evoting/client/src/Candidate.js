import React from 'react'
import {Form, Button, Row} from 'react-bootstrap'

class Candidate extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            candidateAddress : null,
            candidateParty : null,
            length: this.props.array_len
        }
    }
    
    handleChange = (event) => {
        switch(event.target.name){
            case 'candidateaddress':
                this.setState({'candidateAddress': event.targe.value})
                break;
            
            case 'party':
                this.setState({'candidateParty' : event.target.value})
                break;
        }
    }

    registerCandidate = () => {
        this.state.length-=1
        if (this.state.length >= 0){
            this.props.candidate_info(this.state.candidateAddress, this.state.candidateParty) 
        }
        else{
            window.alert('You have already registered enough candidates')
        }
    }

    render() {
        return (
            <Form onSubmit = {this.registerCandidate}>
                <Form.Group controlId={'Candidate'}>
                    <Row>
                    <Form.Control 
                        name = 'Candidateaddress'
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
                    <Button type="Submit">Add candidate</Button>
                    </Form.Group> 
            </Form>
            )
    }
}

export default Candidate 