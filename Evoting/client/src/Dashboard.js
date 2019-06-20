import React from "react"
import { Card, Nav, Button,Form, Row } from "react-bootstrap";
import Candidate from "./Candidate"
import Voter from "./Voter"

class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            candidate_arr_len : null
        }
    }

    setcandidate_arr_len = () => {
        // console.log("workkk",this.state.candidate_arr_len)
        this.props.setCandidate_arr_len(this.state.candidate_arr_len)
        // console.log("settt",this.state.candidate_arr_len)
    }

    handleChange = (event) => {
        switch(event.target.name){
            case "Candidates_arr_len":
                this.setState({"candidate_arr_len" : event.target.value})
                // console.log("state", this.state)
                break;
        }
    }

    mycallback = (address,party) => {
        this.props.setCandidate_info(address, party)
    }

    update_arr_len = async (length) => {
        await this.setState({'candidate_arr_len': length})
    }

    registerVoterCallback = (VoterId) => {
        this.props.registerVoter(VoterId)
    }



    render() {
        return(
            <div>
                <Card>
                    <Card.Header>
                    </Card.Header>
                    <Card.Body id='setElection'>
                        <Card.Title>
                            Register Candidates and voters
                        </Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId='setCandidatesArrLen'>
                                    <Form.Label>Set number of candidates</Form.Label>
                                    <Form.Control
                                        name= "Candidates_arr_len" 
                                        type="text"
                                        value = {this.state.candidate_arr_len} 
                                        placeholder = 'Enter a value'
                                        onChange = {this.handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                    Be sure! it costs gas.
                                    </Form.Text>
                                    <Button value="submit" onClick={this.setcandidate_arr_len}>Set Number of Candidates</Button>
                                </Form.Group>
                            </Form>
                            <Candidate candidate_info = {this.mycallback} array_len = {this.state.candidate_arr_len}  array_len_recv = {this.update_arr_len}/>
                            
                        </Card.Text>
                    </Card.Body>
                    
                    <Card.Body id = 'voters'>
                    <Card.Title>
                            <h3>Register Voters</h3>
                    </Card.Title>
                    <Card.Text>
                        <Voter registerVoter = {this.registerVoterCallback}  voterlist ={this.props.voterlist}/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )    
        }
}

export default Dashboard