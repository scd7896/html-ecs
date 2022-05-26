import Component from "./Component";

class Entity {
  private _id: string;
  private _components: Component[];

  constructor() {
    this._components = [];
    this._id = crypto.randomUUID();
  }

  get id() {
    return this._id;
  }

  addComponent(component: Component) {
    this._components.push(component);
  }

  update(delta: number) {
    this._components.map(component => component.update(delta));
  }
}

export default Entity;