import Component from "./Component";

abstract class Vector extends Component {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    super();
    this._x = x;
    this._y = y;
  }

  getDistance(ohterVector: Vector) {
    return Math.sqrt(Math.pow(ohterVector.x, 2) + Math.pow(ohterVector.y, 2));
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  set x(nextX: number) {
    this._x = nextX
  }

  set y(nextY: number) {
    this._y = nextY
  }
}

export default Vector