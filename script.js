let items = ['paper', 'rock', 'scissor'];
let counter = -1;


const getRndInteger = () => {
    return Math.floor(Math.random() * (3 - 0)) + 0;
}





let playingFunction = function(player){
    let randomNumber = getRndInteger();
    let comparisonValues = [];
    let randomItem;
    let playerOneComparisonValue, playerTwoComparisonValue;
    if(player == "playerOne"){
        randomItem = items[randomNumber]
        document.getElementById('playerOneItem').src = randomItem + ".png";
        playerOneComparisonValue = randomItem;
        document.getElementById('playerOneBtn').setAttribute("disabled","disabled");
        document.getElementById('playerTwoBtn').removeAttribute("disabled");
        counter++;
        compareValue(playerOneComparisonValue, counter);
        
    }else{
        randomItem = items[randomNumber]
        document.getElementById('playerTwoItem').src = items[randomNumber] + ".png";
        playerTwoComparisonValue = randomItem;
        document.getElementById('playerTwoBtn').setAttribute("disabled","disabled");
        document.getElementById('playerOneBtn').removeAttribute("disabled");
        counter++;
        compareValue(playerTwoComparisonValue, counter);
    }
    
}

let values = [];
let round = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
const compareValue = function(givenValue, index){
    values[index] = givenValue;
    if(index % 2 != 0 && playerOneScore < 3 && playerTwoScore < 3){
        if(values[index-1] == "rock" && values[index] == "paper"){
            playerTwoScore++;
            round++;
            document.getElementById('playerTwoScore').innerHTML = "Player 2 = " + playerTwoScore;
            console.log("Player 2" + playerTwoScore);
        }
        if(values[index-1] == "rock" && values[index] == "scissor"){
            playerOneScore++;
            round++;
            document.getElementById('playerOneScore').innerHTML = "Player 1 = " + playerOneScore;
            console.log(playerOneScore);
        }
        if(values[index-1] == "paper" && values[index] == "rock"){
            playerOneScore++;
            round++;
            document.getElementById('playerOneScore').innerHTML = "Player 1 = " + playerOneScore;
            console.log(playerOneScore);
        }
        if(values[index-1] == "paper" && values[index] == "scissor"){
            playerTwoScore++;
            round++;
            document.getElementById('playerTwoScore').innerHTML = "Player 2 = " + playerTwoScore;
            console.log("Player 2" + playerTwoScore);
        }
        if(values[index-1] == "scissor" && values[index] == "rock"){
            playerTwoScore++;
            round++;
            document.getElementById('playerTwoScore').innerHTML = "Player 2 = " + playerTwoScore;
            console.log("Player 2" + playerTwoScore);
        }
        if(values[index-1] == "scissor" && values[index] == "paper"){
            playerOneScore++;
            round++;
            document.getElementById('playerOneScore').innerHTML = "Player 1 = " + playerOneScore;
            console.log(playerOneScore);
        }
        if(playerOneScore == 3 || playerTwoScore == 3){
            if(playerOneScore > playerTwoScore){
                document.getElementById('winner').innerHTML = "Player 1 is winner";
            }else{
                document.getElementById('winner').innerHTML = "Player 2 is winner";
            }
            document.getElementById('playerOneBtn').setAttribute("disabled","disabled");
            document.getElementById('playerTwoBtn').setAttribute("disabled","disabled");
        }
        
    }
}



const newGameFunction = function(){
    location.reload();
}