const http = require('http');
const  fs = require('fs');

const server = http.createServer((req, res) => {
 
  fs.readFile('index.html', 'utf8',function (err, data) {
    if (err) throw err;
    res.end(data);
  });

});


server.listen(3000, () => {
  console.log('Server running on port 3000');
});

 
