
     // Normal function syntax - 1
// const square = function (x) {
//     return x * x
// }


    // Arrow function syntax (used for more statement functions, not for methods or constructors) - 2
// const square = (x) => {
//     return x * x
// }

     // Arrow function syntax for only one statement (no need for return or curly braces) - 3
// const square = (x) => x * x

// console.log(square(6))


const event = {
    name: 'Birthday Party',
    guestList : ['Dev', 'Ansh', 'Rutul', 'Virat Kohli'],
    printGuestList() {
        
        console.log("Guest list for " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending  '+ this.name)
        })
    }
}

event.printGuestList()


