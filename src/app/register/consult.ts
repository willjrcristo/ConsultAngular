import { Timestamp } from 'rxjs';

export class Consult {
    id: number = 0;
    patientName: string = '';
    patientBornIn: Date;
    consultStartAt: Date;
    consultFinishAt: Date;
    consultNotes: string = '';
}
