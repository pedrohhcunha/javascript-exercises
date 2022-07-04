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

console.log(countOccurrences([0, 0, 1, 1, 0, 1, 1, 0, 2, 8, 2, 1], 0))