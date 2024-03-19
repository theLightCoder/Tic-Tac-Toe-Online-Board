//screen
const body = document.querySelector('body')
const blueScreen = document.createElement('div')
blueScreen.setAttribute('class','blue-screen')
body.appendChild(blueScreen)
//selection box
const selectionBox = document.createElement('div')
selectionBox.setAttribute('class','selectBox')
blueScreen.appendChild(selectionBox)
//creating text Nodes; new skill
const boxText = document.createTextNode('SELECT YOUR SYMBOL')
selectionBox.appendChild(boxText)
//button box
const box = document.createElement('div')
box.setAttribute('class','box')
selectionBox.appendChild(box)
//button x
const xBtn = document.createElement('button')
xBtn.setAttribute('class','x-btn')
const xText = document.createTextNode('X')
box.appendChild(xBtn)
xBtn.appendChild(xText)
//button 
const oBtn = document.createElement('button')
const oText = document.createTextNode('O')
oBtn.setAttribute('class','o-btn')
oBtn.appendChild(oText)
box.appendChild(oBtn)

// x and o symbols
const X_SYNTAX = document.createElement('div')
X_SYNTAX.setAttribute('class', 'x')

const O_SYNTAX = document.createElement('div')
O_SYNTAX.setAttribute('class', 'o')

//clear button


const cells = ['','','','','','','','','']
const x = 'x'
const o = 'o'

let player = null
let computer = null 
// let botMove = true


xBtn.addEventListener('click', () =>{
    selectionBox.classList.add('vanish')
    blueScreen.classList.add('vanish')
    alert(`you chose X`)
    if(player === null){
        player = 'x'
        computer = 'o'
        console.log(`human: ${player}`)
        console.log(`computer: ${computer}`)
    }
})

oBtn.addEventListener('click', () =>{
    selectionBox.classList.add('vanish')
    blueScreen.classList.add('vanish')
    alert(`you chose O`)
    if(player === null){
        player = 'o'
        computer = 'x'
        // console.log(`human: ${player}`)
        // console.log(`computer: ${computer}`)
        if(player === 'o'){
                let int = 0
                cells.forEach(grid => {
                //grid = i
                grid = int++
                const cell = document.createElement('div')
                cell.setAttribute('class','div-cell')
                cell.setAttribute('cell-data', grid)
                cell.addEventListener('click', printPlayer)
                body.appendChild(cell)
            })
        }
    }
})

const printPlayer = (e) =>{
    const o = 'o'
    const emptyCell = e.target.getAttribute('cell-data')
    console.log(`cell ${emptyCell} was clicked`)
    // console.log(e.target.attributes)
    // console.log(cells)
    if(cells[emptyCell] === ''){
        cells[emptyCell] = o
        console.log(cells)
        e.target.appendChild(O_SYNTAX.cloneNode())
        //if cell is filled slice from array
    }else{
        console.log('cell is already filled')
    }
    setTimeout(function(){
        botAI()
    },2000)
    winningConditions()
}

//grid

const botAI = () =>{
    let num = Math.floor(9 * Math.random())
    // console.log(num)
    if(cells[num] === ''){
       cells[num] = x
       console.log(cells)
       const first_X = document.querySelector(`[cell-data="${num}"]`)
       first_X.appendChild(X_SYNTAX.cloneNode())
       console.log(`first matrix number ${num}`)
    }else if(cells[num] !== ''){
        for(let i = 0; i < cells.length; i++){
            if(cells[i] === ''){
                cells[i] = x;
                console.log(console.log(`second matrix number ${i}`)) 
                console.log(cells)
                const second_X = document.querySelector(`[cell-data="${i}"]`)
                second_X.appendChild(X_SYNTAX.cloneNode())
                break;
            };
        }
    }
    winningConditions();
}

const winningConditions = () =>{
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [6,4,2]
    ]
    for(const combo of winCombos){
        const [a,b,c] = combo
        if(cells[a] === 'o' && cells[b] === 'o' && cells[c] === 'o'){
            alert('O wins')
        }else if(cells[a] === 'x' && cells[b] === 'x' && cells[c] === 'x'){
            alert('X wins')
        }
    }
}
winningConditions()
