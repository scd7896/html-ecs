import Entity from "../Entity";
import Vector from "./Vector";
interface IOption {
  defaultPosition: { x: number, y: number }; 
  speed: number;
}

class Move2d extends Vector {
  private speed: number;
  private entity: Entity;
  
  constructor(entity: Entity, option: IOption) {
    super(option.defaultPosition.x, option.defaultPosition.y);
    this.speed = option.speed;
    this.entity = entity;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  update(delta: number): void {
    
    this.entity.setStyle({
      "transform": `translate(${this.x}px, ${this.y}px)`
    })
    
  }
}

export default Move2d;