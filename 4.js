function palindrom(word) {
    const regex = /[a-z]+/gi
    const noSymbol = word.match(regex)
    const newWord = noSymbol.join("")
    for (x = 0; x < Math.floor(newWord.length / 2); x++) {
        if (newWord[x].toLowerCase() != newWord[newWord.length - (1 + x)].toLowerCase()) {
            return console.log("Bukan Kata Palindrom!")
        }
    }
    if (newWord.match(/[a-z]/) == null || newWord.match(/[A-Z]/) == null) {
        return console.log("Palidrom Murni")
    }
    const uppercase = newWord.match(/[A-Z]/g).length
    const lowercase = newWord.match(/[a-z]/g).length
    if (uppercase == 1 && uppercase < lowercase) {
        return console.log("Palidrom Kapital")
    }
    if (lowercase == 1 && uppercase > lowercase) {
        return console.log("Palidrom Kecil")
    }
    return console.log("Palidrom Mix")
}

palindrom(word)     //  Input your word here