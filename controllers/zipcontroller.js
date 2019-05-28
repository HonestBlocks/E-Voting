const fs = require('fs');
const JSZip = require("jszip");
const path = require('path');

exports.zip = (req,res,next) => {
    // console.log(req);
    voter_id = req.body.voter_id;
    console.log(voter_id);
    var dir = path.join(__dirname,'..','static', voter_id);
    console.log(dir);
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
}