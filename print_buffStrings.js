var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    let bufferedData = '';
    response.on('data', (data) => {
      console.log('Chunk Received. Length:', data.length);
      bufferedData += data;
    });

    response.on('end', () => {
      console.log(bufferedData);
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();
