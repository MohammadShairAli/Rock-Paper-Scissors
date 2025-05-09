const btn_rock = document.querySelector("#btn_rock")
const btn_paper = document.querySelector("#btn_paper")
const btn_scissors = document.querySelector("#btn_scissors")
const player_wins = document.querySelector("#Player_wins")
const bot_wins = document.querySelector("#Bot_wins")
playerchoosed = "";
bot_winnings = 0;
player_winnings = 0;
player_wins.innerHTML = player_winnings;
bot_wins.innerHTML = bot_winnings;


function disableButtons(){
    btn_rock.disabled = true;
    btn_paper.disabled = true;
    btn_scissors.disabled = true;
}

function PlayerChoosed(playerchoosed){
    player_choosed = document.querySelector("#player_choosed")
    player_choosed.classList.remove("hidden")
    if (playerchoosed == "rock"){
        player_choosed_rock = document.querySelector("#player_choosed_rock");
        player_choosed_rock.classList.remove("hidden");
    }
    else if (playerchoosed == "paper"){
        player_choosed_paper = document.querySelector("#player_choosed_paper");
        player_choosed_paper.classList.remove("hidden");
    }
    else if (playerchoosed == "scissors"){
        player_choosed_scissors = document.querySelector("#player_choosed_scissors");
        player_choosed_scissors.classList.remove("hidden");
    }
}

function BotChoosed(){
    const randomNumber = Math.floor(Math.random() * 3);
    bot_choosed = document.querySelector("#bot_choosed")
    bot_choosed.classList.remove("hidden")
    if (randomNumber == 0){
        botchoosed = "rock";
        bot_choosed_rock = document.querySelector("#bot_choosed_rock");
        bot_choosed_rock.classList.remove("hidden");
    }
    else if (randomNumber == 1){
        botchoosed = "paper";
        bot_choosed_paper = document.querySelector("#bot_choosed_paper");
        bot_choosed_paper.classList.remove("hidden");
    }
    else if (randomNumber == 2){
        botchoosed = "scissors";
        bot_choosed_scissors = document.querySelector("#bot_choosed_scissors");
        bot_choosed_scissors.classList.remove("hidden");
    }
    return botchoosed
}

function winner(playerchoosed, bot_decision){
    const result = document.querySelector("#result")
    result.classList.remove("hidden")
    if (playerchoosed == bot_decision){
        result.innerHTML = "It's a Tie!";
    }
    else if (playerchoosed == "rock" && bot_decision == "scissors"){
        result.innerHTML = "You Win!";
        player_winnings += 1;
        player_wins.innerHTML = player_winnings;
    }
    else if (playerchoosed == "paper" && bot_decision == "rock"){
        result.innerHTML = "You Win!";
        player_winnings += 1;
        player_wins.innerHTML = player_winnings;
    }
    else if (playerchoosed == "scissors" && bot_decision == "paper"){
        result.innerHTML = "You Win!";
        player_winnings += 1;
        player_wins.innerHTML = player_winnings;
    }
    else{
        result.innerHTML = "You Lose!";
        bot_winnings += 1;
        bot_wins.innerHTML = bot_winnings;
    }
    
}

function reset(){
    player_choosed = document.querySelector("#player_choosed")
    player_choosed.classList.add("hidden")
    bot_choosed = document.querySelector("#bot_choosed")
    bot_choosed.classList.add("hidden")
    player_choosed_rock = document.querySelector("#player_choosed_rock");
    player_choosed_rock.classList.add("hidden");
    player_choosed_paper = document.querySelector("#player_choosed_paper");
    player_choosed_paper.classList.add("hidden");
    player_choosed_scissors = document.querySelector("#player_choosed_scissors");
    player_choosed_scissors.classList.add("hidden");
    bot_choosed_rock = document.querySelector("#bot_choosed_rock");
    bot_choosed_rock.classList.add("hidden");
    bot_choosed_paper = document.querySelector("#bot_choosed_paper");
    bot_choosed_paper.classList.add("hidden");
    bot_choosed_scissors = document.querySelector("#bot_choosed_scissors");
    bot_choosed_scissors.classList.add("hidden");
    result = document.querySelector("#result")
    result.classList.add("hidden")
    btn_rock.disabled = false;
    btn_paper.disabled = false;
    btn_scissors.disabled = false;
    playerchoosed = "";
}
                                                        // On clicking the buttons for rock, paper and scissors for player
btn_rock.onclick = ()=>{
    playerchoosed = "rock";
    disableButtons()
    PlayerChoosed(playerchoosed)
    bot_decision = BotChoosed()
    winner(playerchoosed, bot_decision)
    setTimeout(() => {
        reset()
      }, 2000);

}
btn_paper.onclick = ()=>{
    playerchoosed = "paper";
    disableButtons()
    PlayerChoosed(playerchoosed)
    bot_decision = BotChoosed()

    winner(playerchoosed, bot_decision)
    setTimeout(() => {
        reset()
      }, 2000);
}
btn_scissors.onclick = ()=>{
    playerchoosed = "scissors";
    disableButtons()
    PlayerChoosed(playerchoosed)
    bot_decision = BotChoosed()

    winner(playerchoosed, bot_decision)
    setTimeout(() => {
        reset()
      }, 2000);
}

    



                                                        