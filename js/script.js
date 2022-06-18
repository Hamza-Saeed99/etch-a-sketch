sliderChange();
createCanvas();


function displaySize() {
    let sliderValue = document.querySelector('#sizeSlider').value;

    const sizeP = document.querySelector('.size');
    sizeP.textContent = `${sliderValue} x ${sliderValue}`
}

function sliderChange() {
    const slider = document.querySelector('#sizeSlider');

    slider.addEventListener('input', () => {
        displaySize();
    });

    slider.addEventListener('change', () => {
        createCanvas();
    });
}

function createCanvas() {
    let canvasWidth = 500;
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = '';
    let sliderValue = document.querySelector('#sizeSlider').value;

    for(let i = 0; i < sliderValue; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.width = canvasWidth + 'px';
        row.style.height = Math.floor(canvasWidth/sliderValue) + 'px';
        for(let j = 0; j < sliderValue; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = Math.floor(canvasWidth/sliderValue) + 'px';
            box.style.height = Math.floor(canvasWidth/sliderValue) + 'px';
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = getColor();
            });
            row.appendChild(box);
        }
        canvas.appendChild(row);
    }

}

function toggleSelected(button) {
    if(button.classList.contains('selected')) {
        return;
    } else {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        button.classList.add('selected');
    }
}

function getColor() {
    const selected = document.querySelector('.selected').id;

    if(selected == 'random') {
        return getRandomColor();
    } else {
        const picked = document.querySelector('#picker');
        return picked.value;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }