const http = require('http'); 

const routes = require('./routes');

const server2 = http.createServer(routes);

server2.listen(4000, ()=> {
    console.log('Listening to request on port 4000');
});




     