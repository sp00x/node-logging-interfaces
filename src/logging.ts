'use strict';

export interface ILogger
{
    trace: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

export class NullLogger implements ILogger
{
    trace(...args: any[]) {}
    debug(...args: any[]) {}
    info(...args: any[]) {}
    warn(...args: any[]) {}
    error(...args: any[]) {}
}

export class ContextPrefixedLogger implements ILogger
{
    private _context: string;
    private _logger: ILogger;

    constructor(logger: ILogger, context: string, glue: string = ':')
    {
        this._logger = logger;
        this._context = context + glue;
    }

    trace(...args: any[])
    {
        args.unshift(this._context);
        this._logger.trace.apply(this._logger, args);
    }

    debug(...args: any[])
    {
        args.unshift(this._context);
        this._logger.debug.apply(this._logger, args);
    }

    info(...args: any[])
    {
        args.unshift(this._context);
        this._logger.info.apply(this._logger, args);
    }

    warn(...args: any[])
    {
        args.unshift(this._context);
        this._logger.warn.apply(this._logger, args);
    }

    error(...args: any[])
    {
        args.unshift(this._context);
        this._logger.error.apply(this._logger, args);
    }
}

export class ConsoleLogger implements ILogger
{
    trace(...args: any[])
    {
        console.trace.apply(console, args);
    }

    debug(...args: any[])
    {
        console.debug.apply(console, args);
    }

    info(...args: any[])
    {
        console.info.apply(console, args);
    }

    warn(...args: any[])
    {
        console.warn.apply(console, args);
    }

    error(...args: any[])
    {
        console.error.apply(console, args);
    }
}

export interface ILoggerFactory
{
    getLogger(context?: string): ILogger;
}

export class ContextPrefixedLoggerFactory implements ILoggerFactory
{
    private _logger: ILogger;

    constructor(logger: ILogger)
    {
        this._logger = logger;
    }

    getLogger(context?: string): ILogger
    {
        return (context == null) ? this._logger : new ContextPrefixedLogger(this._logger, context);
    }
}

export class NullLoggerFactory implements ILoggerFactory
{
    static _nullLogger: NullLogger = new NullLogger();;

    getLogger(context?: string): ILogger
    {
        return NullLoggerFactory._nullLogger;
    }
}
