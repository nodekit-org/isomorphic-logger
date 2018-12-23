export declare const enum ConsoleMethod {
    debug = "debug",
    error = "error",
    info = "info",
    warn = "warn"
}
export declare const browserLogFormat: LogFormat;
export declare const nodeLogFormat: LogFormat;
export declare const browserLogStyle: LogFormat;
export declare type LogFormat = {
    [key in ConsoleMethod]: string;
};
//# sourceMappingURL=logFormat.d.ts.map