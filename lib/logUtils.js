"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTime() {
    const date = new Date();
    return isNode()
        ? date.toISOString()
        : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
exports.getTime = getTime;
// https://github.com/sospedra/logatim/blob/master/lib/utils.js#L9
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    }
    catch (ex) {
        return false;
    }
}
exports.isNode = isNode;
