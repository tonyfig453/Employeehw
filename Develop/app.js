const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var output =[];
var questions = [
    {
        name: "name",
        message: "what is your name?",

    },
    {   name: "email",
        message: "what is your email?",
    },
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"],
        },
    {
        name: "github",
        message:"what is your github?",
        when: function (answers) {
            return answers.role === "Engineer";
          },
    },
    {
        name: "office",
        message:"what is your office number?",
        when: function (answers) {
            return answers.role === "Manager";
          },
    },
    {
        name: "school",
        message:"what school do you go to?",
        when: function (answers) {
            return answers.role === "Intern";
          },
    }, {

    
        name: "again",
        message:"press enter if you want to add another user",
        default: true,
    } 
];






ask()

function ask() {
    inquirer.prompt(questions)
.then(answers => {
    if (answers.role === "Engineer") {
        var user = new Engineer (answers.name, new Date(),answers.email, answers.github)
    }
    if (answers.role === "Manager") {
        var user = new Manager (answers.name, new Date(),answers.email, answers.office)
    }
    if (answers.role === "Intern") {
        var user = new Intern (answers.name, new Date(),answers.email, answers.school)
    }
output.push(user);
if (answers.again === true) {
    ask();
} 


    var html = render(output)
    console.log(html)
    fs.writeFile(outputPath, html, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    console.log(html)
    
})
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
