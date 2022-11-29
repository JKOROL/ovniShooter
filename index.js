import { Rocket } from "./rocket/rocket.js";
import { Ovni } from "./ovni/ovni.js";
import { SpaceShip } from "./space-ship/space-ship.js";

let score=0;
let speed=60;

let spaceShipDiv = document.getElementById("SpaceShip");
let ovniDiv = document.getElementById("Ovni");
let missilesDiv = document.getElementById("Missiles");
let scoreDiv = document.getElementById("Score");
let mortDiv = document.getElementById("Mort");

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
    if(!ovni.move(10))
    {
      window.clearInterval(ovniIntervalMove);
      window.clearInterval(rocketsInterval);
      window.clearInterval(drawInterval);
      spaceShipDiv.innerHTML="";
      ovniDiv.innerHTML="";
      mortDiv.innerText="T'es mort ! T'es vraiment à chier !";
    }
  }, speed);

  let rocketsInterval = window.setInterval(function(){
    if(spaceShip.moveRockets(ovni))
    {
        spaceShip.resetRockets();
        score+=100;
        speed=speed*0.8;
        //console.log(speed);
        window.clearInterval(ovniIntervalMove);
        setTimeout(()=>{
            missilesDiv.innerHTML="";
            ovni.setCoordinates(-500,-500);
            ovniIntervalMove = window.setInterval(function(){
    
              if(!ovni.move(10))
              {
                window.clearInterval(ovniIntervalMove);
                window.clearInterval(rocketsInterval);
                window.clearInterval(drawInterval);
                spaceShipDiv.innerHTML="";
                ovniDiv.innerHTML="";
                mortDiv.innerText="T'es mort ! T'es vraiment nul !";
              }
              }, speed);
              ovni = new Ovni();
            ovniDiv.innerHTML="";
        },500)
        
    };
  }, 60);

let drawInterval= window.setInterval(function(){
    spaceShipDiv.innerHTML="";
    spaceShipDiv.appendChild(spaceShip.draw());
    ovniDiv.innerHTML="";
    ovniDiv.appendChild(ovni.draw());
    scoreDiv.innerText=score;
  }, 2);
