import React from "react"
import {Button} from "react-bootstrap";
import {Pie} from "react-chartjs-2"
import { MDBContainer } from "mdbreact";

class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            results : [],
            dataPie: {
                labels: ["Bjp", "Congress", "AAP", "Others"],
                datasets: [
                  {
                    data: [1,0,0,0],
                    backgroundColor: [
                      "#F7464A",
                      "#46BFBD",
                      "#FDB45C",
                      "#949FB1",
                      "#4D5360"
                    ],
                    hoverBackgroundColor: [
                      "#FF5A5E",
                      "#5AD3D1",
                      "#FFC870",
                      "#A8B3C5",
                      "#616774"
                    ]
                  }
                ]
              },
            pi : 0
        }
    }

    fetchresults = () => {
        this.props.fetchResults();
    }
    
    async componentWillReceiveProps(updatedprop){
        if(this.props != updatedprop){
            if (updatedprop.results != undefined){
                var data = [];
                for(var i=0;i<4;i++){
                    data.push(parseInt(updatedprop.results[i].toString()))
                }
                var datatable = {...this.state.dataPie}
                datatable.datasets[0].data = data
                await this.setState({datatable})
                console.log(this.state.dataPie.datasets.data)
            }
        }
    }

    render() {
        return (
            <div>
            <h1>Results</h1>
                <Button value="submit" onClick={this.fetchresults}>Fetch Results</Button>
                <MDBContainer>
                <Pie data={this.state.dataPie} options={{ responsive: true }} />
                </MDBContainer>
            </div>
        )
    }
}

export default Results