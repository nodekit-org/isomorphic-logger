export function getTime() {
  const date = new Date();
  return isNode()
    ? date.toISOString()
    : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// https://github.com/sospedra/logatim/blob/master/lib/utils.js#L9
export function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (ex) { 
    return false;
  }
}
