declare const NodeIsomorphicLogger: {
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
export default NodeIsomorphicLogger;
//# sourceMappingURL=index.d.ts.map