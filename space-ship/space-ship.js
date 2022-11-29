import { Rocket } from '../rocket/rocket.js';
import { SpaceCraft } from '../space-craft/space-craft.js';

export class SpaceShip extends SpaceCraft{

  canFire;
  rocketArray= new Array();

  constructor(x,y)
  {
    super(x,y,"assets/tie-fighter.png",100,100);
    this.canFire=true;
  }

  fire()
  {
    if(this.canFire)
    {
      this.canFire=false;
      this.rocketArray.push(new Rocket(this.x+this.width/2,this.y));
    }
    return false;
  }

  draw()
  {
    let div = document.createElement("div");
    this.img = new Image(this.width,this.height);
    this.img.src=this.src
    this.img.style.position="absolute";
    this.img.style.top=this.y+"px";
    this.img.style.left=this.x+"px";
    div.appendChild(this.img);
    for (const rocket of this.rocketArray) {
      div.appendChild(rocket.draw());
    }
    return div;
  }

  moveRockets(ovni)
  {
    for (const rocket of this.rocketArray) {
      rocket.move(0,-30);
      switch (ovni.hit(rocket)) {
        case 0:
          return true;
        case 1:
          this.rocketArray.splice(this.rocketArray.indexOf(rocket),1);
          break;
        case 2:
          if(rocket.getY()===-64)
          {
            this.rocketArray.splice(this.rocketArray.indexOf(rocket),1);
          }
          break;
        default:
          break;
      }
    }
    return false;
  }

  resetRockets()
  {
    this.rocketArray= new Array();
  }



  setCanFire()
  {
    this.canFire=true;
  }
}
