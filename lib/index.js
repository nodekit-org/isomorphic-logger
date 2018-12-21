"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const COLOR = isNode() ? '' : '%c';
const format = {
    debug: isNode() ? '%s \x1b[94mdebug\x1b[0m:' : `%s ${COLOR}debug:`,
    error: isNode() ? '%s \x1b[31merror\x1b[0m:' : `%s ${COLOR}debug:`,
    info: isNode() ? '%s \x1b[32minfo\x1b[0m:' : `%s ${COLOR}debug:`,
    warn: isNode() ? '%s \x1b[33mwarn\x1b[0m:' : `%s ${COLOR}debug:`,
};
const style = {
    debug: 'color: blue; font-weight: bold;',
    error: 'color: red; font-weight: bold;',
    info: 'color: green; font-weight: bold;',
    warn: 'color: #efb23d; font-weight: bold;',
};
var ConsoleMethod;
(function (ConsoleMethod) {
    ConsoleMethod["debug"] = "debug";
    ConsoleMethod["error"] = "error";
    ConsoleMethod["info"] = "info";
    ConsoleMethod["warn"] = "warn";
})(ConsoleMethod || (ConsoleMethod = {}));
const IsomorphicLogger = {
    debug: (...msg) => {
        log(ConsoleMethod.debug, ...msg);
    },
    error: (...msg) => {
        log(ConsoleMethod.error, ...msg);
    },
    info: (...msg) => {
        log(ConsoleMethod.info, ...msg);
    },
    warn: (...msg) => {
        log(ConsoleMethod.warn, ...msg);
    },
};
exports.default = IsomorphicLogger;
function log(consoleMethod, ...msg) {
    const _method = isNode() ? consoleMethod : 'log';
    console[_method].apply(this, [
        format[consoleMethod],
        getTime(),
        ...(isNode() ? [] : [style[consoleMethod]]),
        ...msg,
    ]);
}
function getFormat(consoleMethod, firstArg) {
    return format[consoleMethod];
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
        return Object.prototype.toString.call(global.process) === '[object process]';
    }
    catch (ex) {
        return false;
    }
}
