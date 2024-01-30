const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = require('./utils/generateSVG.js');

inquirer
.prompt([
    {
        type: 'input',
        message: 'Up to 3 charaters, what initials would you like your logo to read?',
        name: 'logo',
        //probably need some sort of validation here
    },
    {
        type: 'input',
        message: 'What color would you like the letters of the logo to be?',
        name: 'letterColor'

    },
    {
        type: 'list',
        message: 'What shape do you want the logo?',
        name: 'shape',
        choices: ['Circle','Triangle','Square'],
    },
    {
        type: 'input',
        message: 'What color do you want the logo shape?',
        name: 'logoColor'
    }

])


.then((response) => {
    const content = generateSVG(response);
    fs.writeFile(`${response.logo}.svg`, content, (err) => {
        if (err) throw err;
        console.log("Generated logo.svg")
    });
  });