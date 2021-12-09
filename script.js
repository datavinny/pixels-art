const elementTitle = document.getElementById('title');
const paletaDeCores = document.getElementById('color-palette');

const arrayColors = ['red', 'green', 'blue', 'black'];
for(let index in arrayColors) {
    const colors = document.createElement('div');
    colors.className = 'color';
    colors.style.backgroundColor = arrayColors[index];
    paletaDeCores.appendChild(colors);
} 