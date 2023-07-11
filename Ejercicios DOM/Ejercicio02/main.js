/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const secondDiv = document.createElement('div');
const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'Contenido del párrafo';
secondDiv.appendChild(secondParagraph);
document.body.appendChild(secondDiv);


/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
loop con javascript.*/

const thirdDiv = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const thirdParagraph = document.createElement('p');
  thirdParagraph.textContent = `Párrafo ${i + 1}`;
  thirddDiv.appendChild(thirdParagraph);
}
document.body.appendChild(secondDiv);

/* 2.4 Inserta dinamicamente con javascript en un html una p con el
texto 'Soy dinámico!'.*/

const fourthParagraph = document.createElement('p');
fourthParagraph.textContent = 'Soy dinámico!';
document.body.appendChild(fourthParagraph);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const h2Element = document.querySelector('.fn-insert-here');
h2Element.textContent = 'Wubba Lubba dub dub';

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');
apps.forEach((app) => {
  const liElement = document.createElement('li');
  liElement.textContent = app;
  ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach((element) => {
  element.remove();
});

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild.*/

const divs = document.querySelectorAll('div');
const firstDiv = divs[0];
const fivedDiv = divs[1];
const fiveParagraph = document.createElement('p');
fiveParagraph.textContent = 'Voy en medio!';
firstDiv.insertAdjacentElement('afterend', fiveParagraph);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here*/

const divsWithClass = document.querySelectorAll('.fn-insert-here');
divsWithClass.forEach((div) => {
  const sixParagraph = document.createElement('p');
  sixParagraph.textContent = 'Voy dentro!';
  div.appendChild(sixParagraph);
});