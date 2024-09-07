let currMoleTile;
let currPlantTile;
let score = document.querySelector('#score');
let count = 0;


window.onload = function() {
    setgame()
}

function setgame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++ ) {
        let tile = document.createElement("div")
        tile.id = i.toString();
        document.getElementById('board').appendChild(tile)
    }

    setInterval(setMole, 1000)
    setInterval(setPlant, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function setMole() {

    if (currMoleTile) {
        currMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img');
    mole.src = "./monty-mole.png"

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) {
        return
    } else {
        currMoleTile = document.getElementById(num)
        currMoleTile.appendChild(mole);
        mole.addEventListener('click', function() {
            count = count + 10
            updatedisplay()
        })
    }
}

function setPlant() {
    if (currPlantTile) {
        currPlantTile.innerHTML = '';
    }
    let plant = document.createElement('img')
    plant.src = "./piranha-plant.png"
    
    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) {
        return
    } else {
        currPlantTile = document.getElementById(num)
        currPlantTile.appendChild(plant);
        plant.addEventListener('click', gameOver)
    }
}

function updatedisplay() {
    score.textContent = count
}

function gameOver() {
    alert(`game over, your score was ${score.textContent}, press ok to replay`)
    location.reload()
}