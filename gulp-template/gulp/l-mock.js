const path = require('path');
const lmock = require('l-mock');
const mockDir = path.resolve('./mock/');
const port = 4000;


function lMock() {
  lmock.start(mockDir, port);
}

module.exports = lMock;
