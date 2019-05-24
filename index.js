const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
app = express();

app.use(bodyParser.json());
const models =  require(path.join(__dirname,'models/voterModel'));
sequelize = models.sequelize;

static_dir = path.join(__dirname,'static');
app.use(express.static(static_dir));

app.use('/voter_auth', (req,res,next) => {
    const voter_id = req.body.voter_id;
    // const name = req.body.name;
    // const photosDir = req.body.photosDir;

    // models.create({
    //     voterid : voter_id,
    //     name : name,
    //     photosDir: photosDir
    // }).then(result => {
    //     console.log('ADDED');
    // }).catch(err =>{
    //     console.log(err);    
    // });
    // res.send('ADDED');

    models.findOne({
        where:{
            voterid:voter_id
        }
    }).then(voter => {
        console.log(voter.voterid);
        console.log(voter.name);
        console.log(voter.photosDir);
        if (!voter){
            var response = {
                "message" : "No user Exist"
            }
            return res.json(response);
        }else{
        if (voter.photosDir == '') {
            var response = {
                "message" : "User is not registered"
            };
            return res.json(response);
            } else {
            response = {
                "message" : "Welcome" + voter.name
            };
            return res.json(response);
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