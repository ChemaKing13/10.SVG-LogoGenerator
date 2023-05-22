//prompt the user for logo details (text, color and shape)
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

class CLI {
  constructor() {}

  async run() {
    try {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text for your logo (No more than 3 characters)',
          validate: (input) => {
            if (input.length <= 3) {
              return true;
            }
            return 'Please enter a maximum of 3 characters.';
          },
        },
        {
          type: 'list',
          name: 'color',
          message: 'Select a color',
          choices: ['blue', 'red', 'orange'],
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape',
          choices: ['square', 'circle', 'triangle'],
        },
      ]);

      