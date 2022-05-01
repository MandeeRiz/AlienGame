//glossary of ship objects//////////////////////////////////
let userShip = {
hull: 20,
firepower: 5,
accuracy: .7,
}

let compShip1 = {
hull:0,
firepower: 0,
accuracy:0,
}

let compShip2 = {
hull:0,
firepower: 0,
accuracy:0,
}

let compShip3 = {
hull:0,
firepower: 0,
accuracy:0,
}

let compShip4 = {
hull:0,
firepower: 0,
accuracy:0,
}

let compShip5 = {
hull:0,
firepower: 0,
accuracy:0,
}

let compShip6 = {
hull:0,
firepower: 0,
accuracy:0,
}


//get random hulls for compShips///////////////////////////////////

const randomhull = function(compShip){
    let randomNum = Math.floor(Math.random()* 4)
    compShip.hull=randomNum
    if (compShip.hull === 0){
        compShip.hull = 4;
    } else if (compShip.hull === 1){
        compShip.hull = 5;
    } else if (compShip.hull === 2){
        compShip.hull = 6;
    } else {
        compShip.hull = 3;
    }
}
randomhull(compShip1);
randomhull(compShip2);
randomhull(compShip3);
randomhull(compShip4);
randomhull(compShip5);
randomhull(compShip6);

//get random fire for compShips/////////////////////////////////////
const randomFire = function(sship){
   let randomNumb = Math.floor(Math.random()* 3)
    sship.firepower = randomNumb
    if(sship.firepower === 0){
       sship.firepower = 2;
   } else if (sship.firepower === 1){
        sship.firepower = 3;
   } else if (sship.firepower === 2){
       sship.firepower = 4;
   } else {
       console.log("error");
     }
}

randomFire(compShip1);
randomFire(compShip2);
randomFire(compShip3);
randomFire(compShip4);
randomFire(compShip5);
randomFire(compShip6);

// get random accuracy for compships//////////////////////////////
const accuracy = function(cship){
    let ranNum = Math.floor(Math.random()* 3)
    cship.accuracy = ranNum
    if(cship.accuracy === 0){
        cship.accuracy = .6;
    } else if (cship.accuracy === 1){
        cship.accuracy = .7;
    } else if (cship.accuracy === 2){
        cship.accuracy = .8;
    }
}

accuracy(compShip1);
accuracy(compShip2);
accuracy(compShip3);
accuracy(compShip4);
accuracy(compShip5);
accuracy(compShip6);
//==========================================
 //everything that happens in the game happens in the event listener
const startButton = document.querySelector(".start")
let boom = document.querySelector(".boom")

//start of battle

const startBattle = () => {
   let userMove = prompt("[A]ttack or [R]etreat", "Input A or R");
    if(userMove === "A"){ 
        //user attack function runs
        console.log("You Attacked")
        shootAnimation();
        cIsHit(compShip1);
    } else if(userMove === "R"){
        //run game over function "you lose"
        console.log("you lose")
        alert("You Lose!")
    } else {
        console.log("error, choose A or R.")
    }
    //aliens turn
    if(compShip1.hull > 0){ 
        let alienMove = alert("Alien ship is attacking!")
        uIsHit(compShip1);
        console.log(`Your hull stands at ${userShip.hull}`);
    } else if (compShip1.hull <= 0){
        console.log("onto the next alien ship");
    }
}

// click start Game to start the game
startButton.addEventListener("click", startBattle)
   
//////////////////////////////////////////////////////////////////////////

//shoot animation

const shootAnimation = () =>{
boom.classList.toggle("boomtoggle");
    }


//trying to make my shoot animation reset without having the user click again and once more to reset the boom
 //   let shootAnimationComplete = () =>{
    //    boom.classList.toggle("boom");
      //  setTimout(shootAnimationComplete(), 4000);
    

///////////////////////////////////////////////////////////////////



//calculates if alien ship will hit the user!
const uIsHit = (compShip) => {
    let randomNumber = Math.random();
    if (randomNumber <= compShip.accuracy){
        console.log("You have been hit!")
        userShip.hull -= compShip.firepower
    } else if (randomNumber > compShip.accuracy){
        console.log("The alien missed!")
    } else {
        console.log("error")
    }
}

//calculates if alien ship will be hit by your shot

const cIsHit = (compShip) => {
    let randomNumber = Math.random();
    if(randomNumber <= userShip.accuracy){
        console.log("You hit the alien ship!");
        compShip.hull -= userShip.firepower;
        if(compShip.hull <= 0){
            console.log("You destoyed the alien ship!");
            let alien = document.querySelector(".evilShip")
            alien.classList.toggle("none")
        }
    } else {
        console.log("You missed!");
        //aline attacks
    }
}