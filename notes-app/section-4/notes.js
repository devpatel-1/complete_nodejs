const fs = require("fs");
const chalk = require("chalk")


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    console.log(duplicateNote)
    console.log(title)
    
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })   

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


const removeNote = (title) => {
        const notes = loadNotes()
        const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

// Goal (lecture - 23) :- Wire up list command
//
// 1. reate and export listNotes from notes.js
// -- "Your notes" using chalk
// -- Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!   


const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })

}



// Goal(lecture - 24) :- Wire up read command
//
// 1. Setup --title option for read command 
// 2. Create readNote in notes.js
// -- Search for note by title
// -- Find note and print title (styled) and body (plain text)
// -- No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple of commands



const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


module.exports = {
    addNote,
    removeNote, 
    listNotes,
    readNote
}

