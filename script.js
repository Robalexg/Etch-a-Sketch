let container = document.querySelector('.container')
let resetButton = document.querySelector('#resetButton')




const onHover = (e) => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    e.target.style.background = randomColor
}

const makeGrid = () => {
    console.log(resetButton)
    for(let i = 0; i< 6400; i++){
        let div = document.createElement("div")
        div.className = 'gridBlock'
        div.addEventListener('mouseover',onHover)
        container.appendChild(div)
    }
}

const resetGrid = () => {
    container.replaceChildren([])
    makeGrid()
}



resetButton.addEventListener('click',resetGrid)
makeGrid()