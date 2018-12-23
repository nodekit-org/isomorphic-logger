(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var logFormat = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.browserLogFormat = {
	    debug: `%s %cdebug:`,
	    error: `%s %cerror:`,
	    info: `%s %cinfo:`,
	    warn: `%s %cwarn:`,
	};
	exports.nodeLogFormat = {
	    debug: '%s \x1b[94mdebug\x1b[0m:',
	    error: '%s \x1b[31merror\x1b[0m:',
	    info: '%s \x1b[32minfo\x1b[0m:',
	    warn: '%s \x1b[33mwarn\x1b[0m:',
	};
	exports.browserLogStyle = {
	    debug: 'color: blue; font-weight: bold;',
	    error: 'color: red; font-weight: bold;',
	    info: 'color: green; font-weight: bold;',
	    warn: 'color: #efb23d; font-weight: bold;',
	};
	});

	unwrapExports(logFormat);
	var logFormat_1 = logFormat.browserLogFormat;
	var logFormat_2 = logFormat.nodeLogFormat;
	var logFormat_3 = logFormat.browserLogStyle;

	var logUtils = createCommonjsModule(function (module, exports) {
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
	        return Object.prototype.toString.call(commonjsGlobal.process) === '[object process]';
	    }
	    catch (ex) {
	        return false;
	    }
	}
	exports.isNode = isNode;
	});

	unwrapExports(logUtils);
	var logUtils_1 = logUtils.getTime;
	var logUtils_2 = logUtils.isNode;

	var lib = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


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
	    logUtils.isNode()
	        ? nodeLog(consoleMethod, tag, ...msg)
	        : browserLog(consoleMethod, tag, ...msg);
	}
	function browserLog(consoleMethod, tag, ...msg) {
	    console['log'].apply(this, [
	        createFormat(consoleMethod),
	        logUtils.getTime(),
	        logFormat.browserLogStyle[consoleMethod],
	        ...createTag(tag),
	        ...msg,
	    ]);
	}
	function nodeLog(consoleMethod, tag, ...msg) {
	    console[consoleMethod].apply(this, [
	        createFormat(consoleMethod),
	        logUtils.getTime(),
	        ...createTag(tag),
	        ...msg,
	    ]);
	}
	function createFormat(consoleMethod, tag) {
	    let format = logUtils.isNode()
	        ? logFormat.nodeLogFormat[consoleMethod]
	        : logFormat.browserLogFormat[consoleMethod];
	    return format;
	}
	function createTag(tag) {
	    return tag
	        ? [`[${tag.tagLabel}]`]
	        : [];
	}
	});

	var Logger = unwrapExports(lib);

	Logger.debug(`something to debug test`, 444);
	Logger.error("something wrong test", 123512, { foo: 323 });
	Logger.info("something informative test", 123123, { foo: 4 });
	Logger.warn("something to warn test", 765123, { foo: 2 });

	Logger.withTag('some-tag', 'color: blue')
	  .debug('power');

}());
