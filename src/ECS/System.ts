import Entity from "./Entity";

class System {
  private entities: Record<string, Entity>;

  constructor() {
    this.entities = {};
  }

  addEntity(entity: Entity) {
    this.entities[entity.id] = entity;
  }

  removeEntity(entity: Entity) {
    delete this.entities[entity.id]
  }
  
  update(delta: number) {
    for (let key in this.entities) {
      this.entities[key].update(delta)
    }
  }

}

export default System;