
// same as app.js ... new module - chalk

const chalk = require("chalk");

const getNotes = require("./notes.js");

const msg = getNotes();

console.log(msg);

console.log(chalk.yellow("Error!"));

console.log(chalk.blue.bold.inverse("Hello From Dev Patel!"));


//
// Challenge 3 : Use the chalk library in your project
//
// 1. Install chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in the green
// 4. Test your work 
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

