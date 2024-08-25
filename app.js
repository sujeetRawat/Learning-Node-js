console.log("hello world ");

const http = require('http'); 

const server = http.createServer((req,res) => {
    res.end("My name is Sujeet");
})

server.listen(4000, ()=> {
    console.log('Listening to request on port 4000');
});

     