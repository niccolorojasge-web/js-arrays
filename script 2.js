const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse()
console.log(teachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i=0 ; i < teachers.length;i++){
  if (teachers[i].length > 5){
   longNames.push(teachers[i])
  }
}
console.log(longNames)
 

// 3. Rimuovi 'Ed' dall'array teachers
// const index = teachers.indexOf('ed')
// teachers.splice(index,1)
// console.log(teachers)
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('fabio');
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString)

const students = ['Anna', 'Marco', 'Giulia', 'Lorenzo', 'Sara'];

// 1. Crea una copia dell’array students chiamata studentsCopy
const studentsCopy = [...students];
studentsCopy.push('paolo')

studentsCopy.shift()

console.log(studentsCopy,students)

// 2. Aggiungi 'Paolo' alla fine dell’array studentsCopy
// 3. Rimuovi il primo elemento da studentsCopy

// 4. Stampa sia students che studentsCopy per vedere la differenza
 
const numbers = [12, 5, 8, 130, 44];

// 1. Crea un array evenNumbers con solo i numeri pari
const evenNumbers = numbers.filter((number)=> number % 2 === 0)

console.log(evenNumbers)
// 2. Crea un array doubledNumbers con tutti i numeri moltiplicati per 2
const  doubledNumbers = numbers.map((number2)=> number2 * 2);

console.log(doubledNumbers)
// 3. Trova il primo numero maggiore di 10 e salvalo in firstBigNumber
const firstBigNumber = numbers.find ((numberMax)=> numberMax > 10)
console.log(firstBigNumber)


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const par = [];
for(let i=0 ; i< numbers2.length; i++){
  if(numbers2[i] % 2 === 0){
    par.push(numbers2[i])
  }
}

//numeri m aggiori di 10
const numbers3 = [3, 12, 7, 25, 8, 15];
const maggDieci = [];
for (let i =0 ; i < numbers3.length ; i++ ){
  if(numbers3[i] > 10 ){
    max.push(numbers3 [i])
  }
} 