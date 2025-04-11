class Shape {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    getinfo(){
        console.log(`${this.name},and its color is ${this.color}`);
    }
}
class Circle extends Shape {
constructor(radius){
      this r=r
    }
}
function getArea(radius) {
   Math.PI * r;
}
class getinfo extends Shape{
    console.log(`${this.name},and its color is ${this.color},and its radius is ${this.r}`);
}
class Rectangle extends Shape {
constructor(width, height){
       this.width = width;
        this.height = height;
    }
}
function getArea(Rectangle) {
  this.width * this.height;
}
class getinfo extends Circle{
    console.log(`${this.name},and its color is ${this.color},and its radius is ${this.r},It has width ${this.width} and height ${this.height}`);
}



// თქვენი კოდი აქ

// ტესტის შემთხვევები
const circle = new Circle("circle", "red", 5);
const rectangle = new Rectangle("rectangle", "blue", 4, 6);

console.log(circle.getInfo());
// უნდა დაბეჭდოს: "This is a circle and its color is red. It has a radius of 5"

console.log(rectangle.getInfo());
// უნდა დაბეჭდოს: "This is a rectangle and its color is blue. It has width 4 and height 6"

console.log(circle.getArea());
// უნდა დაბეჭდოს: 78.53981633974483 (π * 5^2)

console.log(rectangle.getArea());
// უნდა დაბეჭდოს: 24 (4 * 6)
