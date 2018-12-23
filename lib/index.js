"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logFormat_1 = require("./logFormat");
const logUtils_1 = require("./logUtils");
function createIsomorphicLoggerMethods(tag) {
    return {
        debug: (...msg) => {
            log("debug" /* debug */, tag, ...msg);
        },
        error: (...msg) => {
            log("error" /* error */, undefined, ...msg);
        },
        info: (...msg) => {
            log("info" /* info */, undefined, ...msg);
        },
        warn: (...msg) => {
            log("warn" /* warn */, undefined, ...msg);
        },
    };
}
const IsomorphicLogger = Object.assign({}, createIsomorphicLoggerMethods(), { withTag: (tagLabel) => {
        return createIsomorphicLoggerMethods({
            tagLabel,
        });
    } });
exports.default = IsomorphicLogger;
function log(consoleMethod, tag, ...msg) {
    logUtils_1.isNode()
        ? nodeLog(consoleMethod, tag, ...msg)
        : browserLog(consoleMethod, tag, ...msg);
}
function browserLog(consoleMethod, tag, ...msg) {
    console['log'].apply(this, [
        createFormat(consoleMethod),
        logUtils_1.getTime(),
        logFormat_1.browserLogStyle[consoleMethod],
        ...createTag(tag),
        ...msg,
    ]);
}
function nodeLog(consoleMethod, tag, ...msg) {
    console[consoleMethod].apply(this, [
        createFormat(consoleMethod),
        logUtils_1.getTime(),
        ...createTag(tag),
        ...msg,
    ]);
}
function createFormat(consoleMethod, tag) {
    let format = logUtils_1.isNode()
        ? logFormat_1.nodeLogFormat[consoleMethod]
        : logFormat_1.browserLogFormat[consoleMethod];
    return format;
}
function createTag(tag) {
    return tag
        ? [`[${tag.tagLabel}]`]
        : [];
}
