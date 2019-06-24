const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

const zipcontroller = require('./server/controllers/zipcontroller');

const voterModel =  require(path.join(__dirname,'/server/models/voterModel'));
const electionModel =  require(path.join(__dirname,'/server/models/electionModel'));

const sequelize = new Sequelize('Evoting','root', 'password', {
    dialect: 'mysql',
    host:'localhost'
});
const votermodel = voterModel(sequelize, Sequelize);
const electionmodel= electionModel(sequelize, Sequelize);

static_dir = path.join(__dirname,'/server/static');

app = express();
app.use(bodyParser.json());
app.use(express.static(static_dir));


app.post('/voter_auth', (req,res,next) => {
    const voter_id = req.body.voter_id;
    console.log(req.get('Cookie'));

    // votermodel.create({
    //     "voterid":req.body.voter_id,
    //     "name":req.body.name,
    //     "photosDir":req.body.photosDir,
    //     "address":req.body.address
    // }).then((voter)=>{
    //     res.send('Created')
    // }).catch((err)=>(console.log(err)))
    votermodel.findOne({
        where:{
            voterid:voter_id
        }
    }).then(voter => {
        if (!voter){
            var response = {
                "message" : "No user Exist"
            }
            return res.json(response);
        }
        else{
            var response = {
                "message" : "User not registered yet"
            };
            if (voter.photosDir == '') {
                return res.json(response);
            } 
            else { 
            res.setHeader('Set-cookie', 'loggedIn=true');
            zipcontroller.zip(req,res,next);
        }
    }
    }).catch(err => {
        console.log("Creating Voter");
    });

});


app.get('/admin/voters', (req,res) => {
    votermodel.findAll().then((voters) => {
        res.send({Voters  : voters });
      })
})

app.post('/admin/wallet', (req,res) => {
    console.log(req.body);
    dict = {
        'address' : req.body.address,
        'privateKey' : req.body.privateKey
    }
    fs.writeFile('./server/static/'+ req.body.voterid +'/wallet.txt', JSON.stringify(dict) , function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.send('Done');
})

/* Having multiple election from same account */
    app.post('/admin/deployContract', (req,res) => {
        // POST deployed contract address and user account address
        accountAddress = req.body.accountAddress;
        contractAddress = req.body.contractAddress;

        electionmodel.create({
            'admin_account':accountAddress,
            'election_address':contractAddress
        })
        .then((new_entry) => { res.send(new_entry)})
    })

    app.get('/admin/deploycontract', (req,res) => {
        electionmodel.findAll({
            where:{
                admin_account : req.body.accountAddress
            }
        })
        .then((entries) => {
            res.send ({
                addresses: entries
            })
        })
    })

sequelize
    .sync()
    .then(result => {
    console.log(result)} )
    .catch(err => {
        console.log(err);
    });
app.listen(5001);
