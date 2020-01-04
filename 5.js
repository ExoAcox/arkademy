function countChar(word, letter) {
    if (letter.length > 1) {
        return console.log("Letter must in one digit character!")
    }
    let count = 0
    for (x = 0; x < word.length; x++) {
        if (word[x] == letter) {
            count++
        }
    }
    if (count == 0) {
        return console.log("Not found!")
    }
    return console.log(count)
}

countChar(word, letter)     //  Input your data here