const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Dev Patel.");


//
// Challenge 1 : - Append a message to notes.txt
//
// 1. Use appendFileSync to apend to the file
// 2. Run the Script
// 3. Check your work by opening the file and Viewing the appended text


fs.appendFileSync("notes.txt"," I am learning Node.Js and I am new in This.");