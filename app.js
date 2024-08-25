const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;

    if(url == '/home'){
        res.write('<h1>Welcome Home </h1>');
    } else if(url == '/about'){
        res.write('<h1>Welcome to About us page </h1>');
    }else if(url == '/node'){
            res.write('<h1>Welcome to my Node Js Project </h1>');
    } else {
        res.write('<h1>Welcome!! </h1>')
        }
})

server.listen(4000, ()=> {
    console.log('Listening to request on port 4000');
});

     