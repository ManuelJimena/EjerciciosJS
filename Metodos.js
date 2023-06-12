//Metodos que modifcan la array:

/* .pop elimina y devuelve el último elemento de un array. Sirve para modificar el array original, 
eliminando el último elemento y devolviéndolo como resultado.*/
const arrayPop = [1, 2, 3, 4, 5];
const lastElement = arrayPop.pop();
console.log(lastElement); // Resultado: 5
console.log(arrayPop); // Resultado: [1, 2, 3, 4]

/* .shift elimina y devuelve el primer elemento de un array. Sirve para modificar el array original, 
eliminando el primer elemento y devolviéndolo como resultado.*/
const arrayShift = [1, 2, 3, 4, 5];
const firstElement = arrayShift.shift();
console.log(firstElement); // Resultado: 1
console.log(arrayShift); // Resultado: [2, 3, 4, 5]

/* .push agrega uno o varios argumentos en la última posición de un array. */
const arrayPushOne = [1, 2, 3];
arrayPushOne.push(4);
console.log(arrayPushOne); // Resultado: [1, 2, 3, 4]

const arrayPushMulti = [1, 2, 3];
arrayPushMulti.push(4, 5, 6);
console.log(arrayPushMulti); // Resultado: [1, 2, 3, 4, 5, 6]

/*.unshift agrega uno o varios argumentos en la primera posición de un array. */
const arrayUnshiftOne = [2, 3, 4];
arrayUnshiftOne.unshift(1);
console.log(arrayUnshiftOne); // Resultado: [1, 2, 3, 4]

const arrayUnshiftMulti = [4, 5, 6];
arrayUnshiftMulti.unshift(1, 2, 3);
console.log(arrayUnshiftMulti); // Resultado: [1, 2, 3, 4, 5, 6]

/* .reverse invertir el orden de los elementos de un array (gira 180º). */
const arrayReverse = [1, 2, 3, 4, 5];
arrayReverse.reverse();
console.log(arrayReverse); // Resultado: [5, 4, 3, 2, 1]

/* .splice elimina, reemplaza o agrega elementos en una posición específica de un array. */
const arrayRemoved = [1, 2, 3, 4, 5];
const removedElements = arrayRemoved.splice(2, 2);
console.log(arrayRemoved); // Resultado: [1, 2, 5]
console.log(removedElements); // Resultado: [3, 4]

const arrayReplaced = [1, 2, 3, 4, 5];
const replacedElements = arrayReplaced.splice(1, 2, 'a', 'b', 'c');
console.log(arrayReplaced); // Resultado: [1, 'a', 'b', 'c', 4, 5]
console.log(replacedElements); // Resultado: [2, 3]

/* Metodos que NO modifcan la array:


/* .concat concatenar combina dos o más arrays, creando un nuevo array que contiene los elementos de los arrays combinados.
También puede combinarse con valores individuales en lugar de arrays completos*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Resultado: [1, 2, 3, 4, 5, 6]

const arrayConst = [1, 2, 3];
const newValue = 4;
const newArrayConst = arrayConst.concat(newValue);
console.log(newArrayConst); // Resultado: [1, 2, 3, 4]

/* .join convierte una array en string concatenada y añade un argumento () "por defecto , ". Se puede cambiar por ("-")
("*") etc */
const arrayJoin1 = [1, 2, 3];
const arrayJoin2 = [4, 5, 6];
const newArrayJoin1 = arrayJoin1.concat(array2);
console.log(newArrayJoin1); // Resultado: [1, 2, 3, 4, 5, 6]

const arrayJoin = [1, 2, 3];
const newValueJoin = 4;
const newArrayJoin = arrayJoin.concat(newValue);
console.log(newArrayJoin); // Resultado: [1, 2, 3, 4]


/* .slice sirve para vextraer una porción o subconjunto de elementos de un array o string.*/
const array = [1, 2, 3, 4, 5];
const sliceArray = array.slice(1, 4);
console.log(sliceArray); // Resultado: [2, 3, 4]

const string = 'Hola, Manu';
const sliceString = string.slice(6);
console.log(sliceString); // Resultado: 'Manu'

/*.indexOf encuentra la posición de la primera aparición de un elemento en un array. Sirve para buscar un elemento 
específico en un array y obtener su índice (posición) dentro del array. Devuelve -1 si no existe el elemento.*/
const arrayIndexOf1 = [1, 2, 3, 4, 5];
const index1 = arrayIndexOf1.indexOf(3);
console.log(index1); // Resultado: 2

const arrayIndexOf2 = [1, 2, 3, 4, 5];
const index2 = arrayIndexOf2.indexOf(6);
console.log(index2); // Resultado: -1

/* .lastIndexOf encuentra la posición de la última aparición de un elemento en un array. Sirve para buscar un elemento 
específico en un array y obtener su índice (posición) dentro del array. Devuelve -1 si no existe el elemento.*/
const arrayLIndexOf1 = [1, 2, 3, 2, 1];
const lastIndex1 = arrayLIndexOf1.lastIndexOf(2);
console.log(lastIndex1); // Resultado: 3

const arrayLIndexOf2 = [1, 2, 3, 2, 1];
const lastIndex2 = arrayLIndexOf2.lastIndexOf(4);
console.log(lastIndex2); // Resultado: -1

/*.includes 'Devuelve un valor booleano dependiendo de si en la array está el elemnto a buscar "true-false"' '*/
const arrayIncludes1 = [1, 2, 3, 4, 5];
const includes1 = arrayIncludes1.includes(3);
console.log(includes1); // Resultado: true

const arrayIncludes2 = [1, 2, 3, 4, 5];
const includes2 = arrayIncludes2.includes(6);
console.log(includes2); // Resultado: false

/*.forEach(): Ejecuta una función proporcionada una vez por cada elemento del array.
.map(): Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
.filter(): Crea un nuevo array con todos los elementos que cumplan una condición especificada en una función proporcionada.
.reduce(): Aplica una función a un acumulador y a cada elemento del array para reducirlo a un solo valor.
.some(): Comprueba si al menos un elemento del array cumple una condición especificada en una función proporcionada.
.every(): Comprueba si todos los elementos del array cumplen una condición especificada en una función proporcionada.
.find(): Devuelve el primer elemento del array que cumple una condición especificada en una función proporcionada.
.findIndex(): Devuelve el índice del primer elemento del array que cumple una condición especificada en una función proporcionada.*/