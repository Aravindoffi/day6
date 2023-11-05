

class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    // Constructor with no arguments
    // Creates a circle with default values
    circle() {
      this.radius = 1.0;
      this.color = "red";
      console.log(this.radius);
      console.log(this.color);
    }
    setradius(radius){
        this.radius = radius
    }
    getcircumference(){
        const p = 3.16
        let a = 2*p*this.radius
        return a;
    }
}
const rac = new Circle();
const rac2 = new Circle(2, "blue");
console.log(rac)
console.log(rac2)
//rac2.setradius(3);
console.log(rac2.radius)
console.log(rac2.getcircumference())



