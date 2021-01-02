export interface Diagnostic {
    getSeverity(): number;
    getMessage(): string;
    getSource(): string;
    getCode(): number;
    getChildren(): Array<Diagnostic>;
}
