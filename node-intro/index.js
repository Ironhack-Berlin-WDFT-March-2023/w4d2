// How to work with npm packages and modules

// npm package: colors
// https://www.npmjs.com/package/colors

const colors = require('colors') // Common JS

// To use ES6 imports in node either use .mjs as a file extension or add "type": "module" to package.json
// import colors from "colors" // ES6 imports

console.log("Hello world!".green)
console.log("Hello world".red)
console.log("Hello rainbow".rainbow)
console.log("Inverse the colors".inverse)
console.log("Run the trap".trap)


// npm package: supervillians
// https://github.com/sindresorhus/supervillains

const supervillains = require('supervillains')

const allSupervillians = supervillains.all
console.log(allSupervillians)

const randomSupervillian = supervillains.random()
console.log(randomSupervillian)


// There are also node internal packages, then called modules
// These don"t need to be installed, but they still need to be imported

const crypto = require("crypto")
// import crypto from "crypto"

const randomString = crypto.randomBytes(64).toString("Hex")
console.log(randomString)


// Import add function
const add = require("./add")

const result = add(3, 6)
console.log(result)


// Import helloFunction and goodbyeFunction

// const functions = require("./functions")
const { helloFunction, goodbyeFunction } = require("./functions")

console.log(helloFunction())
console.log(goodbyeFunction())

// Challenge: Find an interesting npm package, import it and try it out
// https://www.npmjs.com/package/colors
// https://www.npmjs.com/package/marions-funny-cat-videos
// https://github.com/sindresorhus/supervillains
// https://github.com/sindresorhus/superb
// https://github.com/sindresorhus/yes-no-words
// https://github.com/sindresorhus/cat-names



