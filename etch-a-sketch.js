console.log("hello world")

const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
square = document.createElement('div');
square.classList.add('square')

container.appendChild(square);
}

