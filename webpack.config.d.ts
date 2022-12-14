export const mode: string;
export const devtool: string;
export namespace entry {
    const main: string;
}
export namespace output {
    const path: string;
    const filename: string;
}
export namespace resolve {
    const extensions: string[];
}
export namespace module {
    const rules: {
        test: RegExp;
        loader: string;
    }[];
}
