function findSame(data) {
    if (typeof data != "object") {
        return console.log("Not found!")
    }
    if (data.length == undefined) {
        return console.log("Not found!")
    }

    const stringOnly = data.filter(x => typeof x == "string")
    if (stringOnly.length <= 1) {
        return console.log("Not Found!")
    }
    
    const sortChar = stringOnly.map(x => {return x.split("").sort().join("")})
    const findDuplicate = sortChar.filter((x, index) =>
        sortChar.indexOf(x, index + 1) != -1
    ).sort()

    const keyword = []
    for (x = 0; x < findDuplicate.length; x++) {
        if (findDuplicate[x] != findDuplicate[x - 1]) {
            keyword.push(findDuplicate[x])
        }
    }

    for (x = 0; x < keyword.length; x++) {
        let container = []
        for (y = 0; y < sortChar.length; y++) {
            if (keyword[x] == sortChar[y]) {
                container.push(stringOnly[y])
            }
        }
        console.log(container.join(", "))
    }
} 

findSame(data)      //  Input your data here