const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers [4] = 'patrick';
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();


// 5. Aggiun9gi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("vanessa");
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("sarah");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const Lewisindex = teachers.indexOf('Lewis')
console.log(Lewisindex)
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0
console.log(isTeachersEmpty,teachers)


const students = [
  'Marco',
  'Anna',
  'Luca',
  'Giulia',
  'Paolo',
  'Sara'
]; // NON MODIFICARE

// 1. Salva il terzo studente nella variabile thirdStudent
const thirdStudent = students [2];
console.log(thirdStudent);

// 2. Cambia il quarto studente in 'Francesco'

students [3] = 'francesco'

console.log(students)

// 3. Rimuovi l'ultimo studente e salvalo in lastStudent
const lastStudent = students[5]
students.pop()
console.log(students , lastStudent)

// 4. Rimuovi il primo studente e salvalo in firstStudent


// 5. Aggiungi 'Elena' alla fine dell'array

// 6. Aggiungi 'Davide' all'inizio dell'array

// 7. Trova l'indice di 'Paolo' e salvalo in paoloIndex
const paoloIndex = students.indexOf('Paolo')
console.log(paoloIndex)
// 8. Controlla se l'array è vuoto e salva il risultato in isEmpty

const isEmpty = students === 0 ;
console.log(isEmpty)

const ages = [12, 18, 25, 16, 30, 14];





