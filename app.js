const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const zip = require('zip-a-folder');

const { zip } = require('zip-a-folder');

class ZipAFolder {

    static main(folderpath) {
        console.log('2');
        zip(folderpath, 'send.zip');
        console.log("Zipped");
    }
}

ZipAFolder.main();


app = express();

app.use(bodyParser.json());
static_dir = path.join(__dirname,'static');
console.log(static_dir);
app.use(express.static(static_dir));

// POST /voter_auth
app.use('/voter_auth',(req,res,next)=>{
    // console.log(req.body);
    voterid = req.body.voterid
    voterid = 'dummy123';

    // res.zip(path.join(__dirname,'static',voterid,'123.jpg'));
    
    function send(){
        console.log('4');
        res.sendFile(path.join(__dirname,'send.zip'));
        console.log('5');
    }
    function download(send){
        console.log('1');
        console.log(ZipAFolder.main(path.join(__dirname,'static',voterid)));
        console.log('3');
        send();
    }
    download(send);
});



app.listen(3000);
    // POST /voter_auth should only work after authentication

    // Search through the database
    // Make it like a authentication system
    // if found return photos and name