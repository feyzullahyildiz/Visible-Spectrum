
const listContainer = document.querySelector('.list');

function getColorFromValue(value) {
    const color = Math.floor(256 * (value  % 0.2) * 5);
    if (value <= 0.2) {
        return `rgb(0, 0, ${color})`
    } if (value <= 0.4) {
        return `rgb(0, ${color}, 255)`
    } if (value <= 0.6) {
        return `rgb(0, 255, ${255 - color})`
    } if (value <= 0.8) {
        return `rgb(${color}, 255, 0)`
    } if (value <= 1) {
        return `rgb(255, ${255 - color}, 0)`
    }
    return null;
}

function createItem(value) {
    const item = document.createElement('div')
    item.classList.add('item');
    const c = getColorFromValue(value);
    if (c === null) {
        return
    }
    console.log(c)
    item.style.backgroundColor = c;
    listContainer.appendChild(item);
}

// for (let i = 0; i < 256; i++) {
//     createItem(i / 256);
// }
for (let i = 0.2; i < 1; i += 0.001) {
    createItem(i);
}


