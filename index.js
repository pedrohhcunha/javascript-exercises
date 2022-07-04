// Exercise 1

function isArray(value) {

    return Array.isArray(value)
}


// Exercise 2

function getEnds(list) {

    return [ list[0], list[list.length - 1] ]
}

// Exercise 3

function getElement(list, index) {
    
    return list[index]
}

// Exercise 4

function reverseArray(list) {

    return list.reverse()
}

// Exercise 5

function getIndex(list, value) {
    
    const index = list.indexOf(value)

    if(index !== -1) return index

    return undefined
}

// Exercise 6

function countOccurrences(list, value) {
    
    return list.reduce((accumulator, currentValue) => {

        if(currentValue === value) return ++accumulator

        return accumulator
    }, 0)

    // return list.reduce((acc, c) => c === value ? ++acc : acc)
}

// Exercise 7

function firstToEnd(list) {

    return [...list, list[0]].slice(1)
}

// Exercise 8

function sumOfBiggestPair(list) {
    
    const sumOfPairs = new Array()

    list.forEach((item, index) => {
        if(index % 2 == 0){
            sumOfPairs.push(item)
        } else {
            sumOfPairs[sumOfPairs.length - 1] = sumOfPairs[sumOfPairs.length - 1] + item
        }
    });
    
    return Math.max(...sumOfPairs)
}

console.log(sumOfBiggestPair([0, 2, 7]))