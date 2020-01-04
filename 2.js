function testEmail(email) {
    const regEmail = /^[0-9][\w-.]*@[a-z.]+[.][a-z]{2,4}$/
    console.log(regEmail.test(email))
}
function testPassword(password) {
    const letter = password.match(/[a-z]/gi)
    const number = password.match(/\d/g)
    const symbol = password.match(/[^ a-z0-9]/g)
    if (letter == null || number == null || symbol == null) {
        return console.log(false) 
    }
    if (letter.length == 5 && number.length == 2 && symbol.length == 2) {
        return console.log(true)
    }
    return console.log(false)
}

testEmail(email)            //  input your email here
testPassword(password)      //  input your password here