"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserLogFormat = {
    debug: '%c%s %cdebug:',
    error: '%c%s %cerror:',
    info: '%c%s %cinfo:',
    warn: '%c%s %cwarn:',
};
exports.browserTagStyle = {
    debug: 'color: blue; font-weight: bold;',
    error: 'color: red; font-weight: bold;',
    info: 'color: green; font-weight: bold;',
    warn: 'color: #efb23d; font-weight: bold;',
};
exports.nodeLogFormat = {
    debug: '%s \x1b[94mdebug\x1b[0m:',
    error: '%s \x1b[31merror\x1b[0m:',
    info: '%s \x1b[32minfo\x1b[0m:',
    warn: '%s \x1b[33mwarn\x1b[0m:',
};
