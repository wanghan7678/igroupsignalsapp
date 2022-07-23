import { SignalType } from "./signal-type.model";

export interface Signal {
    id: number;
    tsCode: string;
    tradeDate: string;
    typeCode: number;
    status: string;
    signalType: SignalType;
}
