/* 1.1 Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
let total = 0;
for (const element of param) {
    if (typeof element === "string)") {
        total += element.length;
    } else {
        total += element;
    }
}
const promedio = param.length;
console.log(total / promedio);
}

averageWord(mixedElements)