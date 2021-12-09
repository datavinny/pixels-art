const elementTitle = document.getElementById('title');
const paletaCores = document.getElementById('color-palette');

const arrayColors = ['black', 'red', 'green', 'blue', 'yellow'];
for(let index in arrayColors) {
    const colors = document.createElement('div');
    colors.className = 'color';
    colors.style.backgroundColor = arrayColors[index];
    paletaCores.appendChild(colors);
} 

const quadroPixels = document.getElementById('pixel-board');
for(let index = 0; index < 25; index += 1) {
    const emBranco = document.createElement('div');
    emBranco.className = 'pixel';
    emBranco.style.backgroundColor = 'white';
    quadroPixels.appendChild(emBranco);
}