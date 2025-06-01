var node = document.getElementById('my-node');

var IS_CLICKED = false
var DEFAULT_COLOR = 'rgb(255,255,255)'
var CURRENT_COLOR = 'rgb(255,255,255)'
var FILL_MODE = false
let COLORS = []
let id  = 0


let grids = document.querySelector('.drawplane')

document.addEventListener('mousedown', function() {
    IS_CLICKED = true
})
document.addEventListener('mouseup', function() {
    IS_CLICKED = false
})


for (let i = 0; i <20000; i+=1) {
    let cell = document.createElement("div")
    cell.classList.add("cell")
    grids.appendChild(cell)
}

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 50,
                easing: 'linear',
            })
        }
    })
})

cells.forEach(cell => {
    cell.addEventListener('click', function(){
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 50,
                easing: 'linear',
            })
    })
})

let curr = document.querySelectorAll('.current')
let cellcolor = document.querySelectorAll('.ccolor')
cellcolor.forEach(cecolor => {
    cecolor.addEventListener('click', function() {
        CURRENT_COLOR = getComputedStyle(cecolor).backgroundColor;
        anime({
            targets: curr,
            background: CURRENT_COLOR,
            duration: 150,
            easing: 'linear',
        })
    })
})

let filling = document.querySelector('.filler')
filling.addEventListener('click', function() {
    cells.forEach(cell => {
        anime({
            targets: cell,
            background: CURRENT_COLOR,
            duration: 150,
            easing: 'linear',
        })
    })
})

let downbb = document.querySelector('.downloadbb')
downbb.addEventListener('click', function() {
    domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'new-image.jpeg';
            link.href = dataUrl;
            link.click();
        });
})
