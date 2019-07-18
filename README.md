# E-Voting

This repo contains the work done on the project Facial recognition based voting on Ethereum blockchain as a part of my summer internship.
The central idea was to remove the need for a central authority for vote collection and maintenance which is one of the main reasons 
cited for voting not being trusted completely, as the votes can be rigged in bulk.

We see blockchain can help in this space. Providing security, decentralization, and incentivization, it allows individuals to contribute to the blockchain network and keep it safe from a single source of power.
While there is no problem with using blockchain technology for voting, we tried making it more convenient for people to vote through a smartphone.
Of course there are some drawbacks to this approach, for example, it can result in an unwanted breach of rights to vote during the time of voting.

But it is workable around with advances in AI to study face-recognition, human genomics, etc. The concept of voting through a smartphone is somewhat practical and makes 
sense as an individual saves a lot of time and effort, an institution saves its resources and also help in declining of riots as seen during election time.
Also, this allows people to vote remotely which through traditional method isn't possible.

## Entities and components
The ethereum network is consists of accounts. These accounts has addresses associated with them. The addresses in our project are
of Election authority, Voters, Candidates in the election, and the smart contract.


### 1.Election Authority
There is a central entity who issues the election. This particular account has some more options than rest. This account is responsible for issuing a new election, registering voters and giving voting rights to voters.
Election authority has an admin dashboard made with ReactJs, Web3JS and the election can be deployed on Rinkeby test net.
The election authority can also see results of the election in real-time.

### 2. Voters
Voters are the end-users here, they can interact with the blockchain via a smartphone. The process involves authentication with confirming voterid and then  Facial recognition using Viola-Jones algorithm.
------- Why this algo is the right choice

Once the voter logs in, he/she has only one chance to cast a vote for one of the registered parties. Once the transaction is completed the voter is logged out of the application.
This way the voters cannot revote or rig anyone's vote.

### 3.Candidates
The candidates are merely treated as accounts has addresses and political parties associated with them. These votes received by the political parties are fetched by the election authority.


### 4.Smart Contract
The smart contract is written in solidity and deployed with truffle framework. The contract contains all the set of rules for any transaction for this project.
This is minimal but suitable enough to issue different types of elections in Colleges, private organizations and even for governance.
It can be optimized further and can be varied in complexity.

## The Flow
The flow of the project is similar to what we see in everyday life. 
1. The election authority registers Candidates and gives voting rights to voters present on the network.
2. The voters vote for candidates/parties.
3. Voting ends and election authority reviews results.

Altering the votes is not possible as per the consensus mechanisms used by different blockchains, 'proof of work' works fine.

## Implementation
Implementation of Admin Dashboard and Android app for voting can be found [here](https://drive.google.com/drive/folders/103hue4pyO6MGW8CbTU8Xw1C1H2PD7Ybl?usp=sharing).
