declare const IsomorphicLogger: {
    withTag: (tagLabel: string) => {
        debug: (...msg: any[]) => void;
        error: (...msg: any[]) => void;
        info: (...msg: any[]) => void;
        warn: (...msg: any[]) => void;
    };
    debug: (...msg: any[]) => void;
    error: (...msg: any[]) => void;
    info: (...msg: any[]) => void;
    warn: (...msg: any[]) => void;
};
export default IsomorphicLogger;
//# sourceMappingURL=index.d.ts.map