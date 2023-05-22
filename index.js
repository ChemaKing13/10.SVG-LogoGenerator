//this file imports the necessary modules and classes for running the logo generations process using cli
const CLI = require('./lib/cli'); //imports the cli class from the cli.js 
const colors = require('./lib/colors'); //imports the colors array from the colors.js 
const { Circle, Triangle, Square } = require('./lib/shapes'); //imports circle, triangle and square classes from the shapes.js 


const cli = new CLI(); //const CLI holds the 
cli.run(); //this calls the run() method that starts the logo generation process, 
            //by prompting the user input, collecting the answers and generates the loga based on the user input 


