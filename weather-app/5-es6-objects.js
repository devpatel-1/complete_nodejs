// Object Property shorthand

const name = 'Andrew'
const userAge = 20

const user = {
    name,
    age: userAge,
    location: 'Mehsana'
}

console.log(user)


// Object Destructuring

const product = {
    label: 'Red Notebook',
    price: 10,
    stock: 201, 
    salePrice: undefined,
    rating: 4
}


// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)