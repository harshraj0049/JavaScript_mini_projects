const choices=["rock","paper","scissor"];
const player_display=document.getElementById("player_display");
const computer_display=document.getElementById("computer_display");
const display=document.getElementById("result");
const player_score=document.getElementById("player_score");
const computer_score=document.getElementById("computer_score");

let p_score=0;
let c_score=0;

function playgame(playerchoice){
    const computer_choice=choices[Math.floor(Math.random()*3)];
    console.log(computer_choice);

    let res="";

    if(playerchoice===computer_choice){
        res ="It is a TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
                res=(computer_choice === "scissor") ? "YOU WIN" :"YOU LOSE";
                break;
            case "paper":
                res=(computer_choice === "rock") ? "YOU WIN" :"YOU LOSE";
                break;
            case "scissor":
                res=(computer_choice === "paper") ? "YOU WIN" :"YOU LOSE";
                break;
        }
    }
    player_display.textContent=`PLAYER :${playerchoice}`;
    computer_display.textContent=`COMPUTER:${computer_choice}`;
    display.textContent=res;
    display.classList.remove("greentext","redtext");

    switch(res){
        case "YOU WIN":
            display.classList.add("greentext");
            p_score++;
            player_score.textContent=`Player score:${p_score}`;
            break;
        case "YOU LOSE":
            display.classList.add("redtext");
            c_score++;
            computer_score.textContent=`Computer score:${c_score}`;
            break;
    }

}