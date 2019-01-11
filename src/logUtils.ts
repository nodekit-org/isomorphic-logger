export function getTime() {
  const dateISOString = new Date().toISOString();
  return isNode()
    ? dateISOString
    : dateISOString.substring(11, dateISOString.length - 1);
}

// https://github.com/sospedra/logatim/blob/master/lib/utils.js#L9
export function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (ex) { 
    return false;
  }
}
