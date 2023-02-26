const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('cpclog');

const logger = Logger.createWrapper('MyFs', Logger.LEVEL_DEBUG);

import MyFs from './MyFs';

export async function startServer() {
  const server = express();
  const port = 5173;

  //server.use(bodyParser.urlencoded({ extended: false }));
  server.use('', express.static('./'));
  server.use(express.json());

  server.post('/fs/browse-dir', async (req, res) => {
    try {
      console.log('req.body 2:', req.body);
      let dirInfo = await MyFs.browseDir(req.body.path);
      res.json(dirInfo);
    } catch (error) {
      logger.error('/fs/browse-dir:', error);
      //throw error;
    }
  });

  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  return server;
}

async function __main__() {
  startServer();
}

if (require.main === module) {
  __main__();
}
