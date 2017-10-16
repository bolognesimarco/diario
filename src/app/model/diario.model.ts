import { Orario } from './orario.model';

export class Diario {
    id: number;
    scuola: string;
    classe: string;
    orario: Array<Orario>;
}