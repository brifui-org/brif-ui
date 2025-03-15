type Message = any;
declare const logger: {
    log: (...args: Message[]) => void;
    warning: (...args: Message[]) => void;
    error: (...args: Message[]) => void;
    debug: (...args: Message[]) => void;
};

export { logger };
