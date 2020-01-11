function formatInput(format, ...parameters) {
    const array = [...parameters]
    const regex = /{[\d]+}/g
    const regex2 = /\d/g
    
    const source = format.match(regex)
    const arrayIndex = source.map(x => {return x.match(regex2)}).flat().filter(x => x < array.length)
    let firstWord = format.slice(0, format.indexOf("{"))
    for (x = 0; x < arrayIndex.length; x++) {
        if (x != arrayIndex.length - 1) {
            firstWord += array[arrayIndex[x]] + " "
        } else {
            firstWord += array[arrayIndex[x]]
        }
    }
    return console.log(firstWord)
}

formatInput(format, parameters)     //  Input your parameter here