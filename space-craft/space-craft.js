export class SpaceCraft {

  x;
  y;
  src;
  width;
  height;
  hited;
  img;

  constructor(x,y,src,width,height)
  {
    this.x=x;
    this.y=y;
    this.src=src;
    this.width=width;
    this.height=height;
    this.hited=false;
  }

  move(dx,dy)
  {
    if(this.x+dx<=document.documentElement.clientWidth-this.width)
    {
      this.x += dx;
    }
    if(this.y+dy<=document.documentElement.clientHeight-this.height)
    {
      this.y += dy;
    }
    if(this.x<0)
    {
      this.x=0;
    }
    if(this.y<-64)
    {
      this.y=-64;
    }
  }

  draw()
  {
    this.img = new Image(this.width,this.height);
    this.img.src=this.src
    this.img.style.position="absolute";
    this.img.style.top=this.y+"px";
    this.img.style.left=this.x+"px";
    return this.img;
  }

  explode()
  {
    this.src="assets/explosion.gif";
    this.x=this.x+this.width/2-50;
    this.height=100;
    this.width=100;
  }

  hit(target)
  {
    let hitTest = this.x < target.getX() + target.getWidth() &&
    this.x + this.width > target.getX() &&
    this.y < target.getY() + target.getHeight() &&
    this.height + this.y > target.getY()
    if(hitTest)
    {
      target.explode();
    }
  }

  checkPoint(x,y)
  {
    if ( x>=this.x && x<= this.x+this.width && y>=this.y && y<=this.y+this.height)
    {
      return true;
    }
    return false;
  }

  getX()
  {
    return this.x;
  }

  getY()
  {
    return this.y;
  }

  setX(x)
  {
    this.x=x;
  }

  setY(y)
  {
    this.y=y;
  }

  setCoordinates(x,y)
  {
    this.setX(x);
    this.setY(y);
  }

  getWidth()
  {
    return this.width;
  }

  getHeight()
  {
    return this.height;
  }

  getSrc()
  {
    return this.src;
  }
}
