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
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="white" />
        <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2 - 10}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="white" />
        <polygon points="${width / 2},${height / 6} ${width - width / 6},${height - height / 6} ${width / 6},${height - height / 6}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="white" />
        <rect x="${width / 6}" y="${height / 6}" width="${width - width / 3}" height="${height - height / 3}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
      </svg>
    `;
  }
}


//module.export exports shape, circle, triangle anf square so it can be used in other
module.exports = { Shape, Circle, Triangle, Square };
  