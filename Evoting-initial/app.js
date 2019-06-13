var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function(request, response) {
    var voter_id = 'dummy123';
    // for (let i = 0; i < 2; i++) {
        var filePath = path.join(__dirname,  'static', voter_id, '123.jpg');
        var stat = fileSystem.statSync(filePath);
        
        response.writeHead(200, {
            // 'Content-Type': 'i', 
            'Content-Length': stat.size
        });
        var readStream = fileSystem.createReadStream(filePath);
        readStream.on('data', function(data) {
            response.write(data);
        });
        
    // }
        
    readStream.on('end', function() {
        response.end();
    });
})
.listen(2000);