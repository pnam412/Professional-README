// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of your README file',

            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description.',

            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install',

            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use.',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'List collaborators or 3rd party assets.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license',
                choices: [{name:'MIT',value:'MIT'},{name:'Apache_2.0',value:'Apache_2.0'},{name:'GNU',value:'GNU'}],
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'How to contribute',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Go the extra mile and run tests',
            }
        ])

        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers.title);
            console.log(answers.description);
            console.log(answers.installation);
            console.log(answers.usage);
            console.log(answers.credits);
            console.log(answers.license);
            console.log(answers.contribute);
            console.log(answers.test);
            console.log(generateMarkdown(answers));     
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
