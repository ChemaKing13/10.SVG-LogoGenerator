const fs = require('fs'); //fs module provides functionality it will help to save the generated SGV to a file 
const inquirer = require('inquirer'); // inquirer is used to prompt the user input and collect answers
const colors = require('./colors'); //it exports the array of colors from our colors.js file
const { Circle, Triangle, Square } = require('./shapes'); //circle. triangle and square are classes defined in shapes.js 

console.log('Hi, welcome to LogoGenerator.svg! 🎨'); //welcomes the user 


//CLI class is responsible for managing the command-line interface, it manage the logo generations process
class CLI {
  async run() { //asyn run() run the logo generation process 
    try {
      const answers = await inquirer.prompt([ //this returns a promise that resolves with an object containning users answers
        {
          type: 'input',
          name: 'text', //ask the user for the text that they want in their logo
          message: 'Enter text for your logo (No more than 3 characters)',
          validate: (input) => {
            if (input.length <= 3) { //if the text is longer than 3 characters, users will be notified
              return true;
            }
            return 'Please enter a maximum of 3 characters.';
          },
        },
        { //ask user for the text color 
          type: 'list',
          name: 'textColor',
          message: 'Select a text color',
          choices: colors,
        },
        { //ask user for the background color 
          type: 'list', 
          name: 'backgroundColor', 
          message: 'Select background color', 
          choices: colors, 
        }, 
        { //ask user for the shape of their logo
          type: 'list',
          name: 'shape',
          message: 'Select a shape',
          choices: ['square', 'circle', 'triangle'],
        },
        { //ask user for the dimensions for their logo, height and width
          input: 'input', 
          name: 'width', 
          message: 'Enter the width of your logo (suggested between 200 and 400 px)',
          validate: (input) => { //height and width must be numbers > 0
            if (Number.isInteger(+input) && +input > 0) {
              return true; 
            }
            return 'Please enter a positive integer'; 
          }, 
        }, 
        {
          type: 'input', 
          name: 'height', 
          message: 'Enter the height of your logo (suggested between 200 and 400 px)', 
          validate: (input) => {
            if (Number.isInteger(+input) && +input > 0) {
              return true; 
            } //if the input isnt a number bigger than 0, users will be notified 
            return 'Please enter a positive integer';
          }, 
        }, 
      ]);

      const { text, textColor, backgroundColor, shape, width, height } = answers; //by destructuring assignment this extracts specific properties from answer object 
      this.generateLogo(text, textColor, backgroundColor, shape, width, height); //generateLogo its method is responsible for creating the logo based on the provided inputs 
    } catch (error) { //this catches any error that may occur during the process 
      console.error('Something went wrong:', error);
    }
  }

  generateLogo(logoText, textColor, backgroundColor, shape, width, height) {
    let shapeObj;
  
    switch (shape) { //this switch statement checks the value od the shape input and determine the type of shape it will create
      case 'circle':
        shapeObj = new Circle(logoText, textColor, backgroundColor);
        break;
      case 'triangle':
        shapeObj = new Triangle(logoText, textColor, backgroundColor);
        break;
      case 'square':
        shapeObj = new Square(logoText, textColor, backgroundColor);
        break;
      default:
        console.log('Invalid shape');
        return;
    }
  
    const svgMarkup = shapeObj.logoMarkup(width, height);
    this.saveSvgToFile(svgMarkup);
  }
  

  saveSvgToFile(svgMarkup) { //this method is responsible for saving the generated SVG logo to a file
    const fileName = `./examples/logo.svg`; //it defines the file name and specifies where its going to be store

    fs.writeFile(fileName, svgMarkup, (err) => {  //fs.write write data to a file async, svgMarkup its the date that will be written to the file 
      if (err) { //if an error its presented, a message will be logged with the specific details
        console.log('Error saving SVG file:', err);
      } else { //else its going to print: 
        console.log(`Logo successfully created and saved as: ${fileName}`);
      }
    });
  }
}

//the cli class is exported so it can be used in other files 
module.exports = CLI;

      