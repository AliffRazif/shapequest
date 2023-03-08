

let score = 0;
let health = 5;
let level = 1;


const character = document.getElementById("character");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3")
const circle = document.getElementById("circle");
const healthcircle = document.getElementById("healthcircle");
const container = document.getElementById("game-container");
const khorshid = document.getElementById("khorshid");
const scoreNum = document.getElementById("score");
const healthNum = document.getElementById("health");
const levelNum = document.getElementById("level");

const checkPoints = setInterval(function(){
    if(score < 100){
        scoreNum.textContent = `Score: ${score} /100`;
        healthNum.textContent = `Health: ${health}`;
        levelNum.textContent = `Level: ${level}`;
    }if(score >= 100 && score < 200){
        if(level === 1){
            level += 1;
        };
        scoreNum.textContent = `Score: ${score} /200`;
        healthNum.textContent = `Health: ${health}`;
        levelNum.textContent = `Level: ${level}`;
    }if(score >= 200 && score < 300){
        if(level === 2){
            level += 1;
        }
        scoreNum.textContent = `Score: ${score} /300`;
        healthNum.textContent = `Health: ${health}`; 
        levelNum.textContent = `Level: ${level}`;
    }if(score >= 300){
        goToGameWon()
    }
},10)




const checkVitals = setInterval(function(){
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft < 50 && blockLeft> 0 && characterTop > 430){
            if(health <= 1){
                block.style.animation = "none";
                goToGameOver();
            }else{
                health -=1
                character.style.background = "black"
                block.style.animation = "none";
                setTimeout(function() {
                    block.style.animation = "block 3s infinite linear";
                    character.style.background = "red";
                },200);
            }
        };

        const blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
        if(blockLeft2 < 50 && blockLeft2> 0 && characterTop > 430){
            if(health <= 1){
                block2.style.animation = "none";
                goToGameOver();
            }else{
                health -= 1 
                character.style.background = "black";
                block2.style.animation = "none";
                setTimeout(function() {
                    block2.style.animation = "block 2.4s infinite linear";
                    character.style.background = "red";
                },200) ;
            };
               
        };
        
       
        if(score >= 100){
            const blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue("left"));
            block3.style.animation = "block 6s infinite linear";
            if(blockLeft3< 50 && blockLeft3 > 0 && characterTop > 430){
                        if(health <= 1){
                            block3.style.animation = "none";
                            goToGameOver();
                        }else{
                            health -= 1
                            character.style.background = "black";
                            block3.style.animation = "none";
                            setTimeout(function() {
                                character.style.background = "red"
                                block3.style.animation = "block 6s infinite linear";
                            },200);
                        };
                    }
        }else{
            block3.style.animation = "none";
        };

    

        const circleLeft = parseInt(window.getComputedStyle(circle).getPropertyValue("left"));
        if(circleLeft< 50 && circleLeft > 0 && characterTop > 430){
            score += 25
            character.style.background= "white";
            circle.style.animation ="none";
            setTimeout(function() {
                circle.style.animation = "block 4s infinite linear";
                character.style.background = "red";
             },200);   
             
        }

        const healthcircleLeft = parseInt(window.getComputedStyle(healthcircle).getPropertyValue("left"));
        if(healthcircleLeft < 50 && healthcircleLeft > 0 && characterTop > 430){
            health += 1
            character.style.background = "lightgreen";
            healthcircle.style.animation = "none";
            setTimeout(function() {
                character.style.background = "red";
            }, 200);
            setTimeout(function(){
                healthcircle.style.animation = "block 6s infinite linear";
            }, 10000);
        
        }

        
      
},10);


const checkBackground = setInterval(function() {
    if(score >= 100){
        container.style.background = "lightgoldenrodyellow";
        khorshid.style.background =  "rgb(250, 198, 100)";
    }if(score >= 200){
        container.style.background = "black";
        khorshid.style.background = "rgb(150, 2, 2)";
    }
    
},10)


document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      jump();
    }
  });
  

let hasJumped = false
let lastSpacebarPressTime = 0

const jump = () => {
  const currentTime = Date.now()
    if(!hasJumped){
        hasJumped = true
        performFirstJump()
    }else{
        if(currentTime - lastSpacebarPressTime < 500)
        performSecondJump() 
        hasJumped = false
    lastSpacebarPressTime = currentTime
    }
}


const performFirstJump = () => {
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}


const performSecondJump = () => {
    character.classList.add("animate-double");
    setTimeout(function(){
        character.classList.remove("animate-double")
    },500);
}

const start = () => {
    score = 0;
    health = 5;
    block.style.animation = "block 3.5s infinite linear"
    block2.style.animation = "block 2.4s infinite linear"
    block3.style.animation  = "none"
    container.style.background = "rgb(121, 255, 255)"
    khorshid.style.background = "yellow"
}

const goToGameOver = () => {
    window.location.href = "gameover.html"
}

const goToGameWon = () => {
    window.location.href = "gamewon.html"
}

