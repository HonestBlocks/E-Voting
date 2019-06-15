import React from 'react'
import Candidate from './Candidate'

function Candidates(props) {
    
    if (props.candidate_arr_len <=0){
        return(
            <h3>Enter the number of candidates</h3>
        )
    }
    else{
        var candidates= []
        for(var i=0;i< props.candidate_arr_len; i+=1){
            candidates.push(
            <Candidate id={i+1} />
            )
        }
        return(
            {candidates}
        )
    }
}

export default Candidates