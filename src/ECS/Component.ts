import Vector from "./Vector";

abstract class Component {
  public speed = 0;
  public element?: HTMLElement;

  constructor(public position: Vector) {}

  setStyle(style: Record<string, string>) {
    if (this.element) {
      for (let key in style) {
        this.element?.style.setProperty(key, style[key]);
      }
    }
  }

  abstract update(delta: number): void;
  abstract render(): void;
}

export default Component;