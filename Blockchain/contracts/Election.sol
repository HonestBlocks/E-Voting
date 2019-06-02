pragma solidity ^0.5.0;

contract Election{
    
    struct voter{
        bool isvoted;
        uint256 vote; // the array index to be voted
        bool rights;    // true, if someone has rights to vote
        
    }
    mapping(address => voter) voters;
    
    struct candidate{
        string party; 
        address candidate_id; // this is where votes will be sent.
        uint256 votes_recv;
    }
    candidate[] public  candidates_arr;
    
    uint256 index = 0;
    uint256 party_index =0;
    
    address admin;
    
    constructor(uint8 _numcandidates) public{
        admin = msg.sender;
        candidates_arr.length = _numcandidates;
        voters[admin].rights  = true;   
    }
    
    modifier onlyadmin{
        require(msg.sender == admin, 'Only admin can access this function');
        _;
    }
    

    // give rights to voter
    function giveRightToVote(address toVoter) onlyadmin  public {
        require(!voters[toVoter].isvoted, ' You have already voted');
        voters[toVoter].rights = true;
    }
    
    // register candidates
    function registerCandidates(address _candidate_id, string memory _party) onlyadmin public{
        candidates_arr[index].candidate_id = _candidate_id;
        candidates_arr[index].party = _party;
        candidates_arr[index].votes_recv = 0;
        index+=1;
    }
    // Cast Vote
    function vote(uint256 _index) public{
        address newvoter = msg.sender;
        if (voters[newvoter].isvoted || _index >= candidates_arr.length) return;
        voters[newvoter].vote = _index;
        voters[newvoter].isvoted = true;
        candidates_arr[_index].votes_recv += 1;
    }

}


    // status
    // function status() public view returns(address winner_candidate, string memory winner_party){
    //     uint256 winningVoteCount = 0;
    //     for(uint8 i=0;i<candidates_arr.length;i+=1){
    //         if(candidates_arr[i].votes_recv > winningVoteCount){
    //             winningVoteCount = candidates_arr[i].votes_recv;
    //             winner_candidate = candidates_arr[i].candidate_id;
                
    //             bool check =false;
    //             for(uint8 j=0; j<parties_arr.length; j+=1){
    //                 if( parties_arr[j].party == candidates_arr[i].party){
    //                     parties_arr[j].no_votes +=1;
    //                     parties_arr[j].no_candidates +=1;
    //                     check = true;
    //                     break;
    //                 }
    //             }
    //             if (check == false){
    //                 parties_arr[party_index].party = candidates_arr[i].party;
    //                 parties_arr[party_index].no_candidates += 1;
    //                 parties_arr[party_index].no_votes += 1;
    //             }
                
    //         }
    //     }
    // }
    
    
    
    
    
        // modifier beforestartdate{}
    
    // modifier afterenddate{}
    
    // modifier validelctiontime{}
    
