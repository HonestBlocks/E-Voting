const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const zipcontroller = require('./server/controllers/zipcontroller');

const models =  require(path.join(__dirname,'/server/models/voterModel'));
sequelize = models.sequelize;

static_dir = path.join(__dirname,'/server/static');

app = express();

app.use(bodyParser.json());

app.use(express.static(static_dir));

app.post('/voter_auth', (req,res,next) => {
    const voter_id = req.body.voter_id;
    console.log(req.get('Cookie'));
    models.findOne({
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
        console.log(err);
    });

});


app.get('/admin', (req,res) => {
    models.findAll().then((voters) => {
        res.send({Voters  : voters });
      })
})

app.post('/admin', (req,res) => {
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

sequelize
    .sync()
    .then(result => {
    console.log(result)} )
    .catch(err => {
        console.log(err);
    });
app.listen(5001);


// zip
// authentication - sessions+cookies