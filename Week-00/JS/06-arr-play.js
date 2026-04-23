const initialArr = [1,2,3]
const secondArr = [4,5,6]

// push and unshift
initialArr.push(4)
secondArr.unshift(3)

console.log(initialArr)
console.log(secondArr)

// pop and shift
initialArr.pop()
secondArr.shift()

console.log(initialArr)
console.log(secondArr)

// concat - for adding array as argument
const finalArr = initialArr.concat(secondArr)
console.log(finalArr)
