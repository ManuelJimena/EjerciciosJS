/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const button = document.querySelector('.showme');
console.log(button);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const myH1 = document.querySelector("#pillado");
console.log(myH1);

/* 1.3 Usa querySelector para mostrar por consola todos los p*/

const p = document.body.querySelectorAll("p");
console.log(p);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con
la clase.pokemon*/

const pokemonElements = document.querySelectorAll('.pokemon');
pokemonElements.forEach((elements) => {
  console.log(elements.textContent);
});


/* 1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".*/

const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
elementosTestMe.forEach((elemento) => {
  console.log(elemento.textContent);
});

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".*/

if (elementosTestMe.length >= 3) {
  const tercerPersonaje = elementosTestMe[2];
  console.log(tercerPersonaje.textContent);
}
