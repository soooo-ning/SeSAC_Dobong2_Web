class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    let rec = this.width * this.height;
    return rec;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getDiagonal() {
    let length = Math.sqrt(width ** 2 + height ** 2);
    return length;
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getDiagonal());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    let tRec = this.width * this.height * 0.5;
    return tRec;
  }
}

let rec3 = new Triangle(3, 4);
console.log(rec3.getArea());

class Circle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.radius = this.width / 2;
  }

  getArea() {
    let cRec = this.radius ** 2 * Math.Pi;
    return cRec;
  }
}

let rec4 = new Circle(4, 4);
console.log(rec4.getArea());
