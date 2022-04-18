// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
        default: "readmeGenerator"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
        default: "This app generate professional readme file"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
        default: "patel-rajendra"
    },
    {
        type: "input",
        name:"email",
        message: "What is your email address?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "BSD 3 License",
            "Mozilla Public License 2.0",
            "Zlib"
        ]
        
    },
    {
        type: "input",
        name: "install",
        message: " Describe the installation steps",
        default: "To install the project follow these steps: - Install npm"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contributing",
        message: " What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run test?"
    },
    {
        type: "input",
        name: "questions",
        message: "Enter any questions you may have"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),err =>{
        if(err)
            return console.log(err);
        else
            console.log("Suceessfully Generate README.md file");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            writeToFile("readmeGenerator.md", answers);
        })
        .catch((err)=>{
            console.log(err);
        })
}

// Function call to initialize app
init();
