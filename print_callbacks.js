let https = require('https');

function getHTML (options, callback) {

  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    let bufferedData = '';
    response.on('data', (data) => {
      console.log('Chunk Received. Length:', data.length);
      bufferedData += data;
    });

    response.on('end', () => {
      console.log('Response stream complete.');
    });

    printHTML(bufferedData);
  });
}

function printHTML (html) {
  console.log(html);
}


let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions, printHTML);
