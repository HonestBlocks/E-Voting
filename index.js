const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const zipcontroller = require('./controllers/zipcontroller');
const models =  require(path.join(__dirname,'models/voterModel'));
sequelize = models.sequelize;

static_dir = path.join(__dirname,'static');

app = express();

app.use(bodyParser.json());

app.use(express.static(static_dir));

app.post('/voter_auth', (req,res,next) => {
    const voter_id = req.body.voter_id;

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
            if (voter.photosDir == '') {
                return res.json(response);
            } 
            else {
            zipcontroller.zip(req,res,next);
        }
    }
    }).catch(err => {
        console.log(err);
    });

});

 
sequelize
    .sync()
    .then(result => {
        // console.log(result);
        // app.listen(3000);
    } )
    .catch(err => {
        console.log(err);
    });
app.listen(3000);


// zip
// authentication - sessions+cookies