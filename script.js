const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randonNumber = Math.floor(Math.random() * 3)
    return choices[randonNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu empate!! <img src= assets/chris-empate.gif height= '200' width= '200'>"
    } else if (human === 'rock' && machine === 'scissors' || human === 'paper' && machine === 'rock' || human === 'scissors' && machine === 'paper' ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!! <img src= assets/chris-derrota.gif height= '200' width= '200'>"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "O Chris ganhou!! <img src= assets/chris-feliz.gif height= '200' width= '200'>"
    }
}



