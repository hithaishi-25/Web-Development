let userscore=0;
let compscore=0;
const c=document.querySelectorAll(".choice");

const generateCompChoice=() =>{
    //pick one among rock, paper, scissors
    const options=["rock", "paper", "scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex]
}


const drawGame = () =>{
    console.log("game is draw");
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
    }else{
        console.log("you lose");
    }
}

const playgame=(userChoice)=>{
    console.log("user choice =", userChoice);
    // generate computer choice
    const compChoice=generateCompChoice();
    console.log("comp choice =", compChoice);

    //draw
    if (compChoice===userChoice) {
        drawGame();
    } else{
        let userWin=true;
        if (userChoice==="rock"){
            //paper, scissor
            userWin= compChoice ==="paper"? false : true;
        }
        else if (userChoice==="paper"){
            //rock, scissor
            userWin= compChoice ==="scissors"? false : true;
        }
        else{
            //paper, rock
            userWin= compChoice ==="rock"? false : true;
        }
        showWinner(userWin);
    }

}

c.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id") // to access id 
        // console.log(userChoice,"was clicked");
        playgame(userChoice)
    });
});