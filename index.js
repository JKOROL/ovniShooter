import { Rocket } from "./rocket/rocket.js";
import { Ovni } from "./ovni/ovni.js";
import { SpaceShip } from "./space-ship/space-ship.js";

let score=0;
let speed=10;

let spaceShipDiv = document.getElementById("SpaceShip");
let ovniDiv = document.getElementById("Ovni");
let missilesDiv = document.getElementById("Missiles");
let scoreDiv = document.getElementById("Score");

let spaceShip = new SpaceShip(250,500);

let ovni = new Ovni();

let keyMap = new Map();

document.addEventListener("keydown", (event) => {
    keyMap.set(event.key,true);
})

document.addEventListener("keyup", (event) => {
    keyMap.set(event.key,false);
})

window.setInterval(function(){
    if(keyMap.get("ArrowDown"))
    {
        spaceShip.move(0,10);
    }
    if(keyMap.get("ArrowUp"))
    {
        spaceShip.move(0,-10);
    }
    if(keyMap.get("ArrowRight"))
    {
        spaceShip.move(10,0);
    }
    if(keyMap.get("ArrowLeft"))
    {
        spaceShip.move(-10,0);
    }
    if(keyMap.get(" "))
    {
        spaceShip.fire();
    }
  }, 10);

  window.setInterval(function(){
    
    spaceShip.setCanFire();
  }, 500);

  
let ovniIntervalMove = window.setInterval(function(){
    
    ovni.move(speed);
  }, 60);

  window.setInterval(function(){
    if(spaceShip.moveRockets(ovni))
    {
        spaceShip.resetRockets();
        score+=100;
        speed=speed*1.2;
        //console.log(speed);
        window.clearInterval(ovniIntervalMove);
        setTimeout(()=>{
            missilesDiv.innerHTML="";
            ovni.setCoordinates(-500,-500);
            ovniIntervalMove = window.setInterval(function(){
    
                ovni.move(speed);
              }, 60);
              ovni = new Ovni();
            ovniDiv.innerHTML="";
        },500)
        
    };
  }, 60);

window.setInterval(function(){
    spaceShipDiv.innerHTML="";
    spaceShipDiv.appendChild(spaceShip.draw());
    ovniDiv.innerHTML="";
    ovniDiv.appendChild(ovni.draw());
    scoreDiv.innerText=score;
  }, 2);
