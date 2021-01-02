import { Diagnostic } from "./Diagnostic";
export interface DiagnosticChain {
    add(diagnostic: Diagnostic): any;
    addAll(diagnostic: Diagnostic): any;
    merge(diagnostic: Diagnostic): any;
}
