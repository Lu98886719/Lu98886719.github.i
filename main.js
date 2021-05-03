let container = document.querySelector("#container");
let start = document.querySelector("#start");
let game = document.querySelector("#game");
let block = document.querySelector("#block");
let gap = document.querySelector("#gap");
let bird = document.querySelector("#bird");
let gameOver = document.querySelector("#gameOver");
let score= document.querySelector("#score");
let playAgain = document.querySelector("#playAgain");
let jumping = 0;
let scoreCount = 0;

//run game
start.addEventListener("click", () => {
    //display game screen and hide start button
    start.style.display = "none";
    game.style.display = "block";

    //start "block" animation
    block.style.animation = "animate 3.5s linear infinite";

    //start running game
    let runGame = setInterval(()=>{
        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
        let gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
        //console.log(birdTop);
        //show result
        if(birdTop < 0 || birdTop > 600){
            game.style.display = "none";         // Game over message and stop game
            gameOver.style.display = "grid";    
            block.style.animation = "none";
            score.innerText = scoreCount;
            clearInterval(runGame);

        }else if(blockRight > 680 && blockRight <800 && (birdTop <= gapTop || birdTop >= gapTop + 140)){
            game.style.display = "none";         // Game over message and stop game
            gameOver.style.display = "grid";    
            block.style.animation = "none";
            score.innerText = scoreCount;
            clearInterval(runGame);
        }else{
            bird.style.top = birdTop + 3 + "px";        //keep playing
        }
    },10);

});
 
//count animation and change gap position randomly

block.addEventListener("webkitAnimationIteration", () => {
    //generate andome number
    let random = Math.floor(Math.random() * 70) + 5;  // urjuulj bui too ni baga bh tusam random mani heseg zgr yvj bsnaa butsaad neg shugamand yvj ehelne Herev het undur buyu 200-ot urjuulbel bagan mani niilj hrgdaad zvarsan ym blno
    gap.style.top = random + "%";       // %-ar uguh ni neg ijil shugamaar yvhaas zailshiine
    scoreCount++;
});

//fly bird when space button clicked
    window.addEventListener("keyup",e =>{
        if(e.code === "Space"){
            let jumpInterval= setInterval(()=>{
                //get bird current position
                let changeBirdPosition = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

                //fix bird overflow
                if(changeBirdPosition > 80){
                    bird.style.top = changeBirdPosition - 80 + "px";

                    clearInterval(jumpInterval);
                }else{
                    clearInterval(jumpInterval);
                }
            },3);
        }
    });

    //togloom duushad playagain tovchiig darhad dahin toglogdoh
    playAgain.addEventListener("click", ()=>{
        window.location.reload();
    })