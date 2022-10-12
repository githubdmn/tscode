const title = '->->Protorype example SHAPES\n';

abstract class Shape {
  public x: number;
  public y: number;
  public color: string;

  constructor(source: Shape) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(source: Rectangle) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  public clone(): Shape {
    const clone = Object.create(this);
    clone.width = this.width;
    clone.height = this.height;
    return clone;
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(source: Circle) {
    super(source);
    this.radius = source.radius;
  }

  public clone(): Shape {
    const clone = Object.create(this);
    clone.radius = this.radius;
    return clone;
  }
}

class Application {
  }
}

export default (): void => {
  console.log(title);
};
