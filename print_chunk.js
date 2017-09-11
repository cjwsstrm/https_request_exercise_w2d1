// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      console.log('Chunk Received. Length:', chunk.length);
      console.log(chunk + "\n");
    });

    response.on('end', () => {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTMLChunks();

// let rawData = '';
//
// res.on('data', (chunk) => {
//   //We stick each cunk of data onto the variable 'rawData' from the outer
//   //scope each time the 'data' event occurs
//   rawData += chunk;
// });
//
// //The 'end' event happes _after_ the last 'data' event
// res.on('end', () => {
//   //Use JSON.parse to turn the string of rawData into a javascript object
//   const parsedData = JSON.parse(rawData);
//   //Print out the last 10 versions numbers for Node.js
//   for (let i = 0; i < 10; i++) {
//     console.log(parsedData[i].version);
//   }
//
// }
