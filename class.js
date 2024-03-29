var text1 = "<ul>";
var text2 = "<ul>";
var text3 = "<ul>";

class Circle { 
    static count = 0;
    constructor(radius) {
        this.radius = radius;
    }  

    static countCircles() {
        Circle.count++;
    }

    circleArea() {
        let circleArea = Math.PI * (this.radius * this.radius)
        this.circleArea = circleArea;
    }

    circleSides() {
        let sidesNum = 2 * Math.PI * this.radius
        this.sidesNum = sidesNum
    }

    displayCircles() {
        text1 = text1 + "<li>" + "The Circle Area = " + this.circleArea + ". The Perimeter of the circle = " + this.sidesNum + "</li>";
        return text1;
    }
} 

const circle1 = new Circle(100)
circle1.circleArea();
circle1.circleSides();
circle1.displayCircles();
Circle.countCircles();

const circle2 = new Circle(400)
circle2.circleArea();
circle2.circleSides();
circle2.displayCircles();
Circle.countCircles();

const circle3 = new Circle(200)
circle3.circleArea();
circle3.circleSides();
circle3.displayCircles();
Circle.countCircles();

text1 = text1 + "</ul>";

document.getElementById("para1").innerHTML = text1;
document.getElementById("parapara1").innerHTML = "Total amount of circles reviewed: " + Circle.count;

class Rectangle {
    static count = 0;
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    static countRectangles() {
        Rectangle.count++;
    }

    rectangleArea() {
        let rectangleArea = this.length * this.width
        this.rectangleArea = rectangleArea
    }

    rectangleSides() {
        let rectangleSides = 2 * (this.length + this.width)
        this.rectangleSides = rectangleSides
    }

    displayRectangles() {
        text2 = text2 + "<li>" + "The Rectangle Area = " + this.rectangleArea + ". The Perimeter of this rectangle = " + this.rectangleSides + "</li>";
        return text2;
    }
}

const rectangle1 = new Rectangle(200, 400)
rectangle1.rectangleArea();
rectangle1.rectangleSides();
rectangle1.displayRectangles();
Rectangle.countRectangles();

const rectangle2 = new Rectangle(500, 300)
rectangle2.rectangleArea();
rectangle2.rectangleSides();
rectangle2.displayRectangles();
Rectangle.countRectangles();

const rectangle3 = new Rectangle(100, 400)
rectangle3.rectangleArea();
rectangle3.rectangleSides();
rectangle3.displayRectangles();
Rectangle.countRectangles();

text2 = text2 + "</ul>";

document.getElementById("para2").innerHTML = text2;
document.getElementById("parapara2").innerHTML = "Total amount of rectangles reviewed: " + Rectangle.count;


class Square {
    static count = 0;
    constructor(length) {
        this.length = length;
    }

    static countSquares() {
        Square.count++;
    }

    squareArea() {
        let squareArea = this.length * this.length
        this.squareArea = squareArea
    }

    squareSides() {
        let squareSides = this.length * 4
        this.squareSides = squareSides
    }

    displaySquares() {
        text3 = text3 + "<li>" + "The Square Area = " + this.squareArea + ". The Perimeter of this square = " + this.squareSides + "</li>";
        return text3;
    }
}

const square1 = new Square(250)
square1.squareArea();
square1.squareSides();
square1.displaySquares();
Square.countSquares();

const square2 = new Square(100)
square2.squareArea();
square2.squareSides();
square2.displaySquares();
Square.countSquares();

const square3 = new Square(500)
square3.squareArea();
square3.squareSides();
square3.displaySquares();
Square.countSquares();

const square4 = new Square(220)
square4.squareArea();
square4.squareSides();
square4.displaySquares();
Square.countSquares();

text3 = text3 + "</ul>";

document.getElementById("para3").innerHTML = text3;
document.getElementById("parapara3").innerHTML = "Total amount of squares reviewed: " + Square.count;
