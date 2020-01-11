function usernameValidity(username) {
    const regUsername = /^[a-z][a-zA-Z0-9_]{4,11}$/
    console.log(regUsername.test(username))
}
function passwordValidity(password) {
    const letter = password.match(/[A-Z]/g)
    const number = password.match(/\d/g)
    const symbol = password.match(/[\W_]/g)
    if (letter == null || number == null || symbol == null) {
        return console.log(false) 
    }
    if (letter.length == 5 && number.length == 1 && symbol.length == 1) {
        return console.log(true)
    }
    return console.log(false)
}

usernameValidity(username)            //  Input your username here
passwordValidity(password)            //  Input your password here