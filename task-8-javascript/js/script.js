let result = [];
let form = document.querySelector('form');
let colorsDiv = document.querySelector('#color');



form.addEventListener('submit', event => {
    event.preventDefault();

    const number = Number(document.querySelector('#number').value);
    const split = Number(document.querySelector('#count').value);


    for (let i = 0; i < split; i++) {
        result.push(Math.floor(number / split));
    }

    let rem = number % split;
    for (let i = 0; i < rem; i++) {
        result[i]++;
    }
    colorsDiv.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.width = `${100 * result[i]}%`;
        colorDiv.style.height = '100px';
        colorDiv.style.margin = '5px';
        let text = document.createTextNode(`${result[i]}`);
        colorDiv.appendChild(text);
        colorsDiv.appendChild(colorDiv);
    }

});

