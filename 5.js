function randomize(number) {
    if (typeof number != "number") {
        return console.log("Data must be number!")
    } else if (number <= 0) {
        return console.log("Data must be greater than zero!")
    }

    let array = []
    for (x = number; x > 0; x--) {
        array.push(Math.ceil(Math.random() * 10))
    }
    const sum = array.reduce((con, x) => {return con + x})
    console.log("Array : [" + array + "]");
    console.log("Sum : " + sum)
}

randomize(number)       //  Input your number here