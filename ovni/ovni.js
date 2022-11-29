import { SpaceCraft } from '../space-craft/space-craft.js';

export class Ovni extends SpaceCraft{

  left=false;
  hp=100;

  constructor()
  {
    let x=0;
    let y=0;
    super(x,y,"assets/X-Wing.png",215,100);
  }

  move(speed)
  {
    let x=speed;
    if(this.left){
      x=-x;
    }
    if(this.x+x<=document.documentElement.clientWidth-this.width)
    {
      this.x += x;
    }
    else
    {
      this.left=true;
      if(this.y+70<=document.documentElement.clientHeight-this.height)
      {
      this.y += 70;
      }
      else{
        return false;
      }
    }
    
    if(this.x<0)
    {
      this.left=false;
      this.x=0;
      if(this.y+70<=document.documentElement.clientHeight-this.height)
      {
      this.y += 70;
      }
      else
      {
        return false;
      }
    }
    return true;
  }

  hit(rocket)
  {
    let hitTest = this.x < rocket.getX() + rocket.getWidth() &&
    this.x + this.width > rocket.getX() &&
    this.y < rocket.getY() + rocket.getHeight() &&
    this.height + this.y > rocket.getY();
    if(hitTest)
    {
      console.log("hit");
      this.hp-=rocket.getDamage();
      console.log(this.hp);
      if(this.hp<=0)
      {
        console.log("no hp");
        this.explode();
        return 0;
      }
      return 1;
    }
    return 2;
  }
}
