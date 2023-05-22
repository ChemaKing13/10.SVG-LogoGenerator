//this is the main class that serves the base class for all shapes
//takes text and color as parameters and a
class Shape {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
  }
  
  //this class extends the shape class and represents the shape for the logo 
  //in addition to the other properties, it will add the color and text according to the user inputs
  //this will apply to our 3 shapes (circle, triangle and square)
  class Circle extends Shape {
    logoMarkup() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect width="200" height="200" fill="white" />
          <circle cx="100" cy="100" r="80" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Triangle extends Shape {
    logoMarkup() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect width="200" height="200" fill="white" />
          <polygon points="100,20 180,180 20,180" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    logoMarkup() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect width="200" height="200" fill="white" />
          <rect x="40" y="40" width="120" height="120" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  
  //module.export exports shape, circle, triangle anf square so it can be used in other
  module.exports = { Shape, Circle, Triangle, Square };
  