import { SpaceCraft } from '../space-craft/space-craft.js';

export class Rocket extends SpaceCraft{

  damage;
  constructor(x,y)
  {
    super(x,y,"assets/laser.png",20,64);
    this.damage = 15;
  }

  getDamage()
  {
    return this.damage;
  }
}
