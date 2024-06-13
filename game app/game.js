let userscore=0;
let compscore=0;
const c=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const u_score=document.querySelector("#user-score");
const c_score=document.querySelector("#computer-score");

const generateCompChoice=() =>{
    //pick one among rock, paper, scissors
    const options=["rock", "paper", "scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex]
}

const drawGame = () =>{
    msg.innerText = "Try again, teh game was a Draw!"; 
    msg.style.backgroundColor = "grey";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++; 
        u_score.innerText= userscore
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice} ` ;   //to change the content below score tab
        msg.style.backgroundColor = "green";
    }else{
        compscore++; 
        c_score.innerText= compscore
        msg.innerText = `you lose! ${compChoice} beats ${userChoice} ` ;
        msg.style.backgroundColor = "red";
    }
}

const playgame=(userChoice)=>{
    // generate computer choice
    const compChoice=generateCompChoice();
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
        showWinner(userWin, userChoice, compChoice);
    }

}

c.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id") // to access id 
        // console.log(userChoice,"was clicked");
        playgame(userChoice)
    });
});
