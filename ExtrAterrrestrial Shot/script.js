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
    
    
    //start of battle
   /* 
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
    */
   
       
    //////////////////////////////////////////////////////////////////////////
    
    //shoot animation

    let boom = document.querySelector(".boom")
    const shootAnimation = async() =>{
    boom.classList.toggle("boomtoggle");
    await wait(6000);
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
                let alien1 = document.querySelector(".evilShip1")
                if(compShip === compShip1){
                    alien1.classList.toggle("none");
                } else if (compShip === compShip2){
                   let alien2 = document.querySelector(".evilShip2");
                    alien2.classList.toggle("none");
                } else if (compShip === compShip3){
                    let alien3 = document.querySelector(".evilShip3");
                     alien3.classList.toggle("none");
                } else if (compShip === compShip4){
                    let alien4 = document.querySelector(".evilShip4");
                     alien4.classList.toggle("none");
                } else if (compShip === compShip5){
                    let alien5 = document.querySelector(".evilShip5");
                     alien5.classList.toggle("none");
                } else if (compShip === compShip6){
                    let alien6 = document.querySelector(".evilShip6");
                     alien6.classList.toggle("none");
                }
            }
        } else {
            console.log("You missed!");
            //alien attacks
        }
    }
    const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
///////////////////////////////////////////////


const startBattle = (compShipPlaceHolder) => {
    let userMove = prompt("[A]ttack or [R]etreat", "Input A or R");
     if(userMove === "A"){ 
         //user attack function runs
         console.log("You Attacked")
         shootAnimation();
         cIsHit(compShipPlaceHolder);
         
     } else if(userMove === "R"){
         //run game over function "you lose"
         console.log("you lose")
         alert("You Lose! reset page to try again")
     } else {
         console.log("error, choose A or R.")
     }
     //aliens turn
     if(compShipPlaceHolder.hull > 0){ 
         let alienMove = alert("Alien ship is attacking!")
         uIsHit(compShipPlaceHolder);
         console.log(`Your hull stands at ${userShip.hull}`);
         startBattle(compShipPlaceHolder);
     } else if (compShipPlaceHolder.hull <= 0){
         console.log("onto the next alien ship");
     }
 }

  // click start Game to start the game
  startButton.addEventListener("click", function(){
      startBattle(compShip1);
      startBattle(compShip2);
      startBattle(compShip3);
      startBattle(compShip4);
      startBattle(compShip5);
      startBattle(compShip6);
      console.log("You have completed the game! Winner!")
  })

  //startBattle(nextComShip, compShip3);