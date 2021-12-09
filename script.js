const elementTitle = document.getElementById('title');
const paletaCores = document.getElementById('color-palette');

const arrayColors = ['black', 'red', 'green', 'blue'];
for(let index in arrayColors) {
    let colors = document.createElement('div');
    colors.className = 'color';
    colors.id = arrayColors[index];
    colors.style.backgroundColor = arrayColors[index];
    paletaCores.appendChild(colors);
} 

const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const quadroPixels = document.getElementById('pixel-board');
for(let index = 0; index < 25; index += 1) {
    const emBranco = document.createElement('div');
    emBranco.className = 'pixel';
    emBranco.style.backgroundColor = 'white';
    quadroPixels.appendChild(emBranco);
}

black.classList.add('selected');
let cor = '';
function selecionar(event) {
    const selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    event.target.classList.add('selected');
    return cor = event.target.id;
}

black.addEventListener('click', selecionar);
red.addEventListener('click', selecionar);
green.addEventListener('click', selecionar);
blue.addEventListener('click', selecionar);

function colorir(event) {
    event.target.style.backgroundColor = cor;
}

const pixel = document.querySelectorAll('.pixel');
for(let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', colorir);
}
