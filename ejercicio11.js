/* 1.1 Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar 
tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let counter = 0
    for (const item of param) {
        counter += item;
    }
    const promedio = counter / param.length;
    console.log(promedio);
}

average(numbers)