module.exports = function getHTML (options, callback) {
  let https = require('https');
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    let bufferedData = '';
    response.on('data', (data) => {
      console.log('Chunk Received. Length:', data.length);
      bufferedData += data;
    });

    response.on('end', () => {
      console.log('Response stream complete.');
      callback(bufferedData);
    });
  });
}

// getHTML(requestOptions, printHTML);
//
// let requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };
