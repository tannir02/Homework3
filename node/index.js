var fs=require('fs');
var http=require('http');

var server=http.createServer(function( req,res) {

    if(req.url=="/")
    {
       let data=fs.readFileSync('home.html','utf8');
       res.end(data);
    }
    else if(req.url=="/contact")
    {
        let data=fs.readFileSync('contact.html','utf8');
        res.end(data);
    }
    else if(req.url=="/biopage")
    {
        let data=fs.readFileSync('biopage.html','utf8');
        res.end(data);
    }

});

server.listen(500);
console.log("server run success");