class Vector {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getDistance(ohterVector: Vector) {
    return Math.sqrt(Math.pow(ohterVector.x, 2) + Math.pow(ohterVector.y, 2));
  }
}

export default Vector