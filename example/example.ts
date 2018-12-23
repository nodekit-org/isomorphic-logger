import path from 'path';
import express from 'express';

import Logger from '../lib';

(function exampleInNode() {
  console.log('Logging in node environment');
  Logger.debug("something to debug test", 12312, { foo: 1 });
  Logger.error("something wrong test", 123512, { foo: 323 });
  Logger.info("something informative test", 123123, { foo: 4 });
  Logger.warn("something to warn test", 765123, { foo: 2 });

  Logger.withTag('some-tag')
    .debug('power');
})();

(function exampleInBrowser() {
  console.log('Logging in browser environment');

  const PORT = 5012;
  const PUBLIC_PATH = path.resolve(__dirname);

  const app = express();

  app.use(express.static(PUBLIC_PATH));

  app.use((req, res, next) => {
    res.send(`
  <html>
  <head>
  </head>
  <body>
    power
    <script src="/bundle.js"></script>
  </body>
  </html>
  `
  );
  });

  app.listen(PORT, () => {
    console.log('server is listening %s', PORT);
  });
})();
