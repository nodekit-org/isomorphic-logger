const COLOR = isNode() ? '' : '%c';

const format: ConsoleMeta = {
  debug: isNode() ?  '%s \x1b[94mdebug\x1b[0m:' : `%s ${COLOR}debug:`,
  error: isNode() ?  '%s \x1b[31merror\x1b[0m:' : `%s ${COLOR}debug:`,
  info: isNode() ?  '%s \x1b[32minfo\x1b[0m:' : `%s ${COLOR}debug:`,
  warn: isNode() ?  '%s \x1b[33mwarn\x1b[0m:' : `%s ${COLOR}debug:`,
};

const style: ConsoleMeta = {
  debug: 'color: blue; font-weight: bold;',
  error: 'color: red; font-weight: bold;',
  info: 'color: green; font-weight: bold;',
  warn: 'color: #efb23d; font-weight: bold;',
};

enum ConsoleMethod {
  debug = 'debug',
  error = 'error',
  info = 'info',
  warn = 'warn',
}

const IsomorphicLogger = {
  debug: (...msg: any[]) => {
    log(ConsoleMethod.debug, ...msg);
  },
  error: (...msg: any[]) => {
    log(ConsoleMethod.error, ...msg);
  },
  info: (...msg: any[]) => {
    log(ConsoleMethod.info, ...msg);
  },
  warn: (...msg: any[]) => {
    log(ConsoleMethod.warn, ...msg);
  },
};  

export default IsomorphicLogger;

function log(consoleMethod: ConsoleMethod, ...msg: any[]) {
  const _method = isNode() ? consoleMethod : 'log';
  console[_method].apply(this, [
    format[consoleMethod],
    getTime(),
    ...(isNode() ? [] : [style[consoleMethod]]),
    ...msg,
  ]);
}

function getTime() {
  const date = new Date();
  return isNode()
    ? date.toISOString()
    : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// https://github.com/sospedra/logatim/blob/master/lib/utils.js#L9
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch (ex) { return false }
}

type ConsoleMeta = {
  [key in ConsoleMethod]: string;
};
