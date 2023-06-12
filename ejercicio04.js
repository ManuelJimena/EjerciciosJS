//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN".
avengers[0] = "IRONMAN";
console.log(avengers);

//1.3 Muestra en consola el numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length); //3

//1.4 Añade 2 elementos al array: "Morty" y "Summer".
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer"); //["Rick", "Beth", "Jerry", "Morty", "Summer"]
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.push("Lapiz Lopez"); //["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(1, 1); //["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
console.log(rickAndMortyCharacters);