//this lines import the clasees from the shapes.js file
//here we are using object destructuring to extract each class 
const { Circle } = require('./shapes.js');
const { Triangle } = require('./shapes.js'); 
const { Square } = require('./shapes.js'); 


//this line set the expectation for the test case, expect function represents the value being tested
//wich invoques logoMarkup method of the circle and passes the width adn height arguments. toEqual is the matcher function that asserts that
//the actual value is equal to the expected value defined in the template literal 
describe("Circle", () => {
  it("Should render  logo with the input parameters text, color, backgroundcolor, width and height", () => {
    const circle = new Circle("JMH", "pink", "yellow");
    const width = 400;
    const height = 400;
    expect(circle.logoMarkup(width, height)).toEqual(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        <rect width="400" height="400" fill="yellow" />
        <circle cx="200" cy="200" r="190" fill="pink" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">JMH</text>
      </svg>
    `);
  });
});

describe("Square", () => {
  it("Should render logo with the input parameters text, color, backgroundcolor, width and height", () => {
    const square = new Square("JMH", "yellow", "green");
    const width = 400;
    const height = 400;
    expect(square.logoMarkup(width, height)).toEqual(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        <rect width="400" height="400" fill="green" />
        <rect x="66.66666666666667" y="66.66666666666667" width="266.66666666666663" height="266.66666666666663" fill="yellow" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">JMH</text>
      </svg>
    `);
  });
});

describe("Triangle", () => {
  it("Should render logo with the input parameters text, color, backgroundcolor, width and height", () => {
    const triangle = new Triangle("JMH", "pink", "yellow"); 
    const width = 400; 
    const height = 400; 
    expect(triangle.logoMarkup(width, height)).toEqual(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        <rect width="400" height="400" fill="yellow" />
        <polygon points="200,66.66666666666667 333.3333333333333,333.3333333333333 66.66666666666667,333.3333333333333" fill="pink" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="undefined">JMH</text>
      </svg>
    `);
  });
}); 
  
//by running "npm run test" jest will execute this test, comparing the generated sgv markup, with the exprected markup, if they match the test will be pass. 


