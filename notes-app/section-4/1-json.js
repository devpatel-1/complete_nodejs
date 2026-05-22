
const fs = require("fs");   

// const book = {
//     title : 'Ego',
//     author : 'Virat Kohli'
// }

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.author)



console.log(dataBuffer)
    
console.log(dataBuffer.toString())




//
// Challenge (lecture - 18) : Work with the JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file


const dataBuffer1 = fs.readFileSync("1-json.json");
const dataJSON1 = dataBuffer1.toString()
const user1 = JSON.parse(dataJSON1)

user1.name = "Dev Patel";
user1.age = 20

const userJSON1 = JSON.stringify(user1);
fs.writeFileSync('1-json.json', userJSON1)