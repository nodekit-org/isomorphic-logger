import {
  browserLogFormat,
  browserTagStyle,
  ConsoleMethod,
  LogFormat,
  nodeLogFormat,
} from './logFormat';
import {
  getTime,
  isNode,
} from './logUtils';

const NodeIsomorphicLogger = {
  ...createLoggerMethods(),
  withTag: (tagLabel: string) => {
    return createLoggerMethods({
      tagLabel,
    });
  },
};

export default NodeIsomorphicLogger;

function createLoggerMethods(tag?: Tag) {
  return {
    debug: (...msg: any[]) => {
      log(ConsoleMethod.debug, tag, ...msg);
    },
    error: (...msg: any[]) => {
      log(ConsoleMethod.error, undefined, ...msg);
    },
    info: (...msg: any[]) => {
      log(ConsoleMethod.info, undefined, ...msg);
    },
    warn: (...msg: any[]) => {
      log(ConsoleMethod.warn, undefined, ...msg);
    },
  }
}

function log(consoleMethod: ConsoleMethod, tag?: Tag, ...msg: any[]) {
  isNode() 
    ? nodeLog(consoleMethod, tag, ...msg)
    : browserLog(consoleMethod, tag, ...msg);
}

function browserLog(consoleMethod: ConsoleMethod, tag?: Tag, ...msg: any[]) {
  console['log'].apply(this, [
    createFormat(consoleMethod),
    'color: #999',
    getTime(),
    browserTagStyle[consoleMethod],
    ...createTag(tag),
    ...msg,
  ]);
}

function nodeLog(consoleMethod: ConsoleMethod, tag?: Tag, ...msg: any[]) {
  console[consoleMethod].apply(this, [
    createFormat(consoleMethod),
    getTime(),
    ...createTag(tag),
    ...msg,
  ]);
}

function createFormat(consoleMethod: ConsoleMethod, tag?: Tag): string {
  let format = isNode() 
    ? nodeLogFormat[consoleMethod]
    : browserLogFormat[consoleMethod];

  return format;
}

function createTag(tag?: Tag): string[] {
  return tag
    ? [ `[${tag.tagLabel}]` ]
    : [];
}

interface Tag {
  tagLabel: string;
}
