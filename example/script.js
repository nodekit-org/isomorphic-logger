import Logger from '../lib';

Logger.debug(`something to debug test`, 444);
Logger.error("something wrong test", 123512, { foo: 323 });
Logger.info("something informative test", 123123, { foo: 4 });
Logger.warn("something to warn test", 765123, { foo: 2 });

Logger.withTag('some-tag', 'color: blue')
  .debug('power');
