document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})



const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
    if(winner === "You win!"){
        const playerScore = document.querySelector('#p-score')
        playerScore.innerHTML++
    } else if(winner === "You lose..."){
        const computerScore = document.querySelector('#c-score')
        computerScore.innerHTML++
    }
}



const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "You chose "+player+". Computer chose "+computer+"."
    resultDiv.appendChild(choiceElement)

    const winnerElement = document.createElement('h2')
    winnerElement.textContent = winner
    if(winner === "You win!"){
        winnerElement.classList.add('win')
    }else if(winner === "You lose..."){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}




const play = function(player, computer){
    if(player === "rock" && computer === "paper"){
        return "You lose..."
    }
    if(player === "rock" && computer === "scissors"){
        return "You win!"
    }
    if(player === "paper" && computer === "rock"){
        return "You win!"
    }
    if(player === "paper" && computer === "scissors"){
        return "You lose..."
    }
    if(player === "scissors" && computer === "paper"){
        return "You win!"
    }
    if(player === "scissors" && computer === "rock"){
        return "You lose..."
    }
    if(player === computer){
        return "Its a draw..."
    }
}



const getRandomChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice
}


