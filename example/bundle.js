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
	});

	unwrapExports(logFormat);
	var logFormat_1 = logFormat.browserLogFormat;
	var logFormat_2 = logFormat.browserTagStyle;
	var logFormat_3 = logFormat.nodeLogFormat;

	var logUtils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function getTime() {
	    const dateISOString = new Date().toISOString();
	    return isNode()
	        ? dateISOString
	        : dateISOString.substring(11, dateISOString.length - 1);
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


	const NodeIsomorphicLogger = Object.assign({}, createLoggerMethods(), { withTag: (tagLabel) => {
	        return createLoggerMethods({
	            tagLabel,
	        });
	    } });
	exports.default = NodeIsomorphicLogger;
	function createLoggerMethods(tag) {
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
	function log(consoleMethod, tag, ...msg) {
	    logUtils.isNode()
	        ? nodeLog(consoleMethod, tag, ...msg)
	        : browserLog(consoleMethod, tag, ...msg);
	}
	function browserLog(consoleMethod, tag, ...msg) {
	    console['log'].apply(this, [
	        createFormat(consoleMethod),
	        'color: #999',
	        logUtils.getTime(),
	        logFormat.browserTagStyle[consoleMethod],
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
