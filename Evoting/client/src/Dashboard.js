import React from "react"
import { Card, Nav, Button,Form, Row } from "react-bootstrap";
import Candidate from "./Candidate"


class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            candidate_arr_len : null,
        }
    }

    setcandidate_arr_len = () => {
        console.log("workkk",this.state.candidate_arr_len)
        this.props.setCandidate_arr_len(this.state.candidate_arr_len)
        console.log("settt",this.state.candidate_arr_len)
    }

    handleChange = (event) => {
        switch(event.target.name){
            case "Candidates_arr_len":
                this.setState({"candidate_arr_len" : event.target.value})
                console.log("state", this.state)
                break;
        }
    }

    mycallback = (address,party) => {
        this.props.setCandidate_info(address, party)
    }



    render() {
        return(
            <div>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#setElection">
                            <Nav.Item>
                            <Nav.Link href="#setElection"> Issue election </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link href="#results"> Results </Nav.Link>
                            </Nav.Item>
                        </Nav>
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
                    
                            <Candidate candidate_info = {this.mycallback} array_len = {this.state.candidate_arr_len} />
                    
                        {/* <Button variant="primary">Go</Button> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )    
        }
    
}

export default Dashboard