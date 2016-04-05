export interface ILogger {
    trace: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}
export declare class NullLogger implements ILogger {
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export declare class ContextPrefixedLogger implements ILogger {
    private _context;
    private _logger;
    constructor(logger: ILogger, context: string, glue?: string);
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export declare class ConsoleLogger implements ILogger {
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export interface ILoggerFactory {
    getLogger(context?: string): ILogger;
}
export declare class ContextPrefixedLoggerFactory implements ILoggerFactory {
    private _logger;
    constructor(logger: ILogger);
    getLogger(context?: string): ILogger;
}
export declare class NullLoggerFactory implements ILoggerFactory {
    static _nullLogger: NullLogger;
    getLogger(context?: string): ILogger;
}
