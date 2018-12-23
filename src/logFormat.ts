export const enum ConsoleMethod {
  debug = 'debug',
  error = 'error',
  info = 'info',
  warn = 'warn',
}

export const browserLogFormat: LogFormat = {
  debug: `%s %cdebug:`,
  error: `%s %cerror:`,
  info: `%s %cinfo:`,
  warn: `%s %cwarn:`,
};

export const nodeLogFormat: LogFormat = {
  debug: '%s \x1b[94mdebug\x1b[0m:',
  error: '%s \x1b[31merror\x1b[0m:',
  info: '%s \x1b[32minfo\x1b[0m:',
  warn: '%s \x1b[33mwarn\x1b[0m:',
};

export const browserLogStyle: LogFormat = {
  debug: 'color: blue; font-weight: bold;',
  error: 'color: red; font-weight: bold;',
  info: 'color: green; font-weight: bold;',
  warn: 'color: #efb23d; font-weight: bold;',
};

export type LogFormat = {
  [key in ConsoleMethod]: string;
};
