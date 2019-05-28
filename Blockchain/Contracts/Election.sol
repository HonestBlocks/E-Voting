pragma solidity ^0.5.0;

contract Election{
    
    struct date {
        uint dd;
        uint mm; 
        uint yy;
        uint256 inseconds;
    }
    date startdate;
    date enddate;
    
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
    candidate[] candidates_arr;
    uint256 index = 0;
    
    address admin;
    
    // To implement modifier for date
    // uint8 _startdate, uint8 _startmonth,uint8 _startyear,uint8 _enddate, uint8 _endmonth,uint8 _endyear ,
    
    constructor(uint8 _numcandidates) public{
        admin = msg.sender;
        candidates_arr.length = _numcandidates;
        voters[admin].rights  = true;   
    }
    
    // give rights to voter
    function giveRightToVote(address toVoter) public {
        if (msg.sender != admin || voters[toVoter].isvoted) return;
        voters[toVoter].rights = true;
    }
    
    // register candidates
    function registerCandidates(address _candidate_id, string memory _party) public{
        if (msg.sender != admin) return;
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
    // status
    function status() public view returns(address winner_candidate){
        uint256 winningVoteCount = 0;
        for(uint8 i=0;i<candidates_arr.length;i+=1){
            if(candidates_arr[i].votes_recv > winningVoteCount){
                winningVoteCount = candidates_arr[i].votes_recv;
                winner_candidate = candidates_arr[i].candidate_id;
            }
        }
    }
}
