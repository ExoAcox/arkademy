function validateColor(hex_code) {
    console.log(hex_code.length)
    if (hex_code.length != 4 && hex_code.length != 7 ) {
        return console.log("Format Hex Code salah!")
    }
    if (hex_code[0] != "#") {
        return console.log("Format Hex Code salah!")
    }
    for (x = 1; x < hex_code.length; x++) {
            if (hex_code[x] > "f") {
                return console.log("Format Hex Code salah!")
            }
    }
    return console.log("Format Hex Code benar!")
}

validateColor(hex_code)     //  Input your hex code here