let container = document.createElement('div')
container.className = 'container'
document.body.append(container)

function createGrid(number) {
    for(let i = 1; i < number; i++) {
        if( i % 2 === 0){
            makeSquare()
        }else{
        makeSquare().style.backgroundColor = "black"
        }
    }
}

function makeSquare() {
    const div = document.createElement('div')
    // div.classList.add('square')
    div.className = 'square'
    div.style.height = "11.1%"
    div.style.width = "11.1%"
    div.style.paddingBottom = "11.1%"
    div.style.float = "left"
    div.style.backgroundColor = "red"
    container.appendChild(div)
    return div
}
createGrid(108)