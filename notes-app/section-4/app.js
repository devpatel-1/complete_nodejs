const chalk = require("chalk");

const getNotes = require("/Users/devpatelsm4/Desktop/complete_nodejs/complete_nodejs/notes-app/section-3/notes.js");

// console.log(chalk.red.inverse.bold("Helllo!"));

// console.log(process.argv);

// Index

// console.log(process.argv[2]);


  // Lecture - 15


// const command = process.argv[2];

// if (command === "add") {
//     console.log("Adding note!")
// } else if (command === "remove") {
//     console.log("Removing note!")
// }



// lecture -- 16 :- Yargs package

const yargs = require("yargs");


// console.log(yargs.argv);


// version customize
yargs.version("1.1.0");

// Lecture - 17 :- builder in yargs.command

// Create add command -- body (lecture - 16)

// Challenge (lecture - 17) : Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a discription, make it required, and for it to be a string
// 3. Log the body value in handler function
// 4. Test your work!



//
// Goal (lecture 22) : Refactor all functions
//
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your Work!



yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    }
});

// Create remove command
yargs.command({
    command : "remove",
    describe: "Remove a note",
    handler() {
        console.log("Removing a note!")
    }
})


//
// Challenge 4 : Add two new commands
//
// 1. Setup a command to support 'list' command (print placeholder message for now)
// 2. Setup a command to support 'read' command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output  


yargs.command({
    command : "list",
    describe : "Liste your notes",
    handler() {
        console.log("Listed out all your notes!")
    }
})

yargs.command({
    command : "read",
    describe : "Read a note",
    handler() {
        console.log("Reading a note!")
    }
})

yargs.parse();

// console.log(yargs.argv);