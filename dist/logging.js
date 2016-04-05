'use strict';
var NullLogger = (function () {
    function NullLogger() {
    }
    NullLogger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
    };
    NullLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
    };
    NullLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
    };
    NullLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
    };
    NullLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
    };
    return NullLogger;
}());
exports.NullLogger = NullLogger;
var ContextPrefixedLogger = (function () {
    function ContextPrefixedLogger(logger, context, glue) {
        if (glue === void 0) { glue = ':'; }
        this._logger = logger;
        this._context = context + glue;
    }
    ContextPrefixedLogger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(this._context);
        this._logger.trace.apply(this._logger, args);
    };
    ContextPrefixedLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(this._context);
        this._logger.debug.apply(this._logger, args);
    };
    ContextPrefixedLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(this._context);
        this._logger.info.apply(this._logger, args);
    };
    ContextPrefixedLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(this._context);
        this._logger.warn.apply(this._logger, args);
    };
    ContextPrefixedLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(this._context);
        this._logger.error.apply(this._logger, args);
    };
    return ContextPrefixedLogger;
}());
exports.ContextPrefixedLogger = ContextPrefixedLogger;
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.trace.apply(console, args);
    };
    ConsoleLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.debug.apply(console, args);
    };
    ConsoleLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.info.apply(console, args);
    };
    ConsoleLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.warn.apply(console, args);
    };
    ConsoleLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.error.apply(console, args);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
var ContextPrefixedLoggerFactory = (function () {
    function ContextPrefixedLoggerFactory(logger) {
        this._logger = logger;
    }
    ContextPrefixedLoggerFactory.prototype.getLogger = function (context) {
        return (context == null) ? this._logger : new ContextPrefixedLogger(this._logger, context);
    };
    return ContextPrefixedLoggerFactory;
}());
exports.ContextPrefixedLoggerFactory = ContextPrefixedLoggerFactory;
var NullLoggerFactory = (function () {
    function NullLoggerFactory() {
    }
    ;
    NullLoggerFactory.prototype.getLogger = function (context) {
        return NullLoggerFactory._nullLogger;
    };
    NullLoggerFactory._nullLogger = new NullLogger();
    return NullLoggerFactory;
}());
exports.NullLoggerFactory = NullLoggerFactory;
//# sourceMappingURL=logging.js.map