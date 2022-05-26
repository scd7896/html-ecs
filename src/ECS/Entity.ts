import Component from "./components/Component";

abstract class Entity {
  private _id: string;
  private _components: Component[];
  private _element?: HTMLElement;

  constructor() {
    this._components = [];
    this._id = crypto.randomUUID();
  }

  get id() {
    return this._id;
  }

  getStyle(key: string) {
    return this._element?.style.getPropertyValue(key);
  }

  setStyle(style: Record<string, string>) {
    if (this._element) {
      for (let key in style) {
        this._element?.style.setProperty(key, style[key]);
      }
    }
  }

  addComponent(component: Component) {
    this._components.push(component);
  }

  abstract render(): void;

  update(delta: number) {
    this._components.map(component => component.update(delta));
  }
}

export default Entity;