export function getTime() {
  const date = new Date();
  return isNode()
    ? date.toISOString()
    : pad(date.getHours(), 2) 
      + ':'
      + pad(date.getMinutes(), 2)
      + ':'
      + pad(date.getMonth(), 2)
      + ':'
      + pad(date.getMilliseconds(), 3);
}

// https://github.com/sospedra/logatim/blob/master/lib/utils.js#L9
export function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (ex) { 
    return false;
  }
}

function pad(n, width, z?) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}