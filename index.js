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

// Execise 9

function concatObjectList(list1, list2) {

    return list1.map(item => {
        return {
            ...item,
            ...list2.find(item2 => item.id === item2.id)
        }
    })
}

// Execise 10

function removeDuplicates(list) {
    
    let newList = new Array()

    list.forEach(item => {
        if(!newList.includes(item)) newList.push(item)
    })

    return newList
}

// Esercise 11

function biggestListSum(listOfLists) {

    let listsSum = listOfLists.map((list, index) => {
        let sum = list.reduce((accumulator, item) => {
            return accumulator + item
        })

        return {
            orginalIndex: index,
            sum
        }
    })

    let listSumOrdered = listsSum.sort((listSumA, listSumB) => {
        return listSumA.sum - listSumB.sum
    }).reverse()

    return listSumOrdered[0].orginalIndex

    // return listOfLists.map((list, index) => [index, list.reduce((acc, item) => acc + item)]).sort((a, b) => a[1] - b[1]).reverse()[0][0]
}

// Exercise 12

function getBiggestObjectId(listOfObjects) {
    return listOfObjects.sort((a, b) => a.id >= b.id ? -1 : 1)[0]
}