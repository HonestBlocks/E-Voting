pragma solidity >=0.4.22 <0.6.0;

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
    
    constructor() public{
        admin = msg.sender;
        voters[admin].rights  = true;   
    }
    
    modifier onlyadmin{
        require(msg.sender == admin, 'Only admin can access this function');
        _;
    }
    
    // address parser
    function parseAddr(string memory _a) internal pure returns (address _parsedAddress) {
    bytes memory tmp = bytes(_a);
    uint160 iaddr = 0;
    uint160 b1;
    uint160 b2;
    for (uint i = 2; i < 2 + 2 * 20; i += 2) {
        iaddr *= 256;
        b1 = uint160(uint8(tmp[i]));
        b2 = uint160(uint8(tmp[i + 1]));
        if ((b1 >= 97) && (b1 <= 102)) {
            b1 -= 87;
        } else if ((b1 >= 65) && (b1 <= 70)) {
            b1 -= 55;
        } else if ((b1 >= 48) && (b1 <= 57)) {
            b1 -= 48;
        }
        if ((b2 >= 97) && (b2 <= 102)) {
            b2 -= 87;
        } else if ((b2 >= 65) && (b2 <= 70)) {
            b2 -= 55;
        } else if ((b2 >= 48) && (b2 <= 57)) {
            b2 -= 48;
        }
        iaddr += (b1 * 16 + b2);
    
    }
    return address(iaddr);
    }
    
    
    // set array length
    function set_candidates_arr_len(uint256 _length) onlyadmin public{
        candidates_arr.length = _length;    
    }
    

    // give rights to voter
    function giveRightToVote(string memory toVoterr) onlyadmin  public {
        address toVoter = parseAddr(toVoterr);
        require(!voters[toVoter].isvoted, ' You have already voted');
        voters[toVoter].rights = true;
    }
    
    // register candidates
    function registerCandidates(string memory _candidate_ids, string memory _party) onlyadmin public{
        address _candidate_id = parseAddr(_candidate_ids);
        candidates_arr[index].candidate_id = _candidate_id;
        candidates_arr[index].party = _party;
        candidates_arr[index].votes_recv = 0;
        index+=1;
    }
    
    // Cast Vote // require only_registered 
    function vote(uint256 _index) public{
        address newvoter = msg.sender;
        require(!voters[newvoter].isvoted,'You have already Voted. Thanks!');
        require(_index < candidates_arr.length, 'Select right index please');
        voters[newvoter].vote = _index;
        voters[newvoter].isvoted = true;
        candidates_arr[_index].votes_recv += 1;
    }

}


    
        // modifier beforestartdate{}
    
    // modifier afterenddate{}
    
    // modifier validelctiontime{}
    