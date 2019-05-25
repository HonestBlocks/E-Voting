const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const fs = require('fs');
const JSZip = require("jszip");



app = express();

app.use(bodyParser.json());
const models =  require(path.join(__dirname,'models/voterModel'));
sequelize = models.sequelize;

static_dir = path.join(__dirname,'static');
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
                var dir = path.join(__dirname,'static', voter_id);
                var zip = new JSZip();

                fs.readdir(dir, function (err, files) {
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    } 
                    var fileindex = 0;
                    files.forEach(function (file) {
                        f = zip.file(file+fileindex,fs.readFileSync(dir+'/'+file)); 
                    });

                    zip.generateNodeStream({type:'nodebuffer',streamFiles:true})
                        .pipe(fs.createWriteStream('out.zip'))
                            .on('finish', function () {
                                res.download('out.zip');
                                console.log("out.zip written.");
                        });
                
                });
                // zip.file()
                // var kk = zip.file('asd.txt','asdasdasdasd');
                // console.log(kk);
                // // console.log(images);
                
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