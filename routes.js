const fs= require('fs');

const requestHandler = (req,res) => {
    const url =req.url;
    const method =req.method;

    if(url === '/'){

        fs.readFile('message.txt','utf-8', (err,data) => {
           let message ='';
           if(!err) {
            message = data;
            //console.log(message);
           }

            res.write('<html>');
            res.write('<head><title>Enter Message!</title></head>');
            res.write('<body>');
            res.write(`<p>${message}<p>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message"></input><button>Send</button></form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        })
    }

    if(url === '/message' && method === 'POST'){
        const body =[];

        req.on('data',(chunk) => {
           console.log(chunk);
            body.push(chunk);
        });

         req.on('end', () => {
            const parsedBody= Buffer.concat(body).toString();
           // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode= 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
}

module.exports = requestHandler;