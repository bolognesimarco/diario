import { Diario } from './diario.model';
 
export class Student {
    id: number;
    username: string;
    password: string;
    nome: string;
    cognome: string;
    diari: Array<Diario>;
}