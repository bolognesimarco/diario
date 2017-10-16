import { InMemoryDbService } from 'angular-in-memory-web-api';
import { XDate } from './util/xdate';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, password: 'gio', username: 'gio', nome: "Giorgia", cognome: "Bolognesi", diari: [1] },
      { id: 2, password: 'mar', username: 'mar', nome: "Marco", cognome: "Bolognesi" },
    ];
    const diari = [
      {
        id: 1, 
        scuola: "Nistri",
        classe: "IIB",
        orario: [
          {id: 1, giorno: "lunedì", materie:["Tecnica", "Tecnica", "Grammatica", "Religione", "Aritmetica", "Grammatica"]},
          {id: 2, giorno: "martedì", materie:["Inglese", "Musica", "Spagnolo", "Aritmetica", "Motoria", "Storia"]},
          {id: 3, giorno: "mercoledì", materie:["Geometria", "Geometria", "Antologia", "Storia", "Arte", "Arte"]},
          {id: 4, giorno: "giovedì", materie:["Approfondimento", "Spagnolo", "Letteratura", "Letteratura", "Musica", "Inglese"]},
          {id: 5, giorno: "venerdì", materie: ["Inglese", "Motoria", "Geografia", "Geografia", "Scienze", "Scienze"]}
        ],
        compiti: [
          {id :1, data: new XDate(2017, 10, 16), materia: "Musica", descrizione: "ripassare fatti mandare dalla mamma", done: true},
          {id :2, data: new XDate(2017, 10, 18), materia: "Geometria", descrizione: "studiare appunti; es pg277 n120 + pg280 n 162 + pg282 n 181, 186, 191", done: false},
          {id :3, data: new XDate(2017, 10, 18), materia: "Antologia", descrizione: "riassunto e domande, pg354 a 357", done: false},
          {id :4, data: new XDate(2017, 10, 18), materia: "Arte", descrizione: "copiare app su quaderno", done: false},
          {id :5, data: new XDate(2017, 10, 19), materia: "Letteratura", descrizione: "riassunto pg 40, 41, 42", done: false},
          {id :6, data: new XDate(2017, 10, 19), materia: "Musica", descrizione: "stampare foto organo, scheda tecnica organo", done: false},
          {id :7, data: new XDate(2017, 10, 20), materia: "Geografia", descrizione: "cartina spagna, pg 58", done: false},
          {id :8, data: new XDate(2017, 10, 20), materia: "Scienze", descrizione: "ripasso 104", done: false},
        ]
      }
    ]
    return {students, diari};
  }
}