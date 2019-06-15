const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const zipcontroller = require('./controllers/zipcontroller');

const models =  require(path.join(__dirname,'models/voterModel'));
sequelize = models.sequelize;

static_dir = path.join(__dirname,'static');

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

app.post('/dashboard', (req,res,next) => {
    // session is logged in
    res.send('<h1>Dashboard</h1>')
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