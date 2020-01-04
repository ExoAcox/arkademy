const popup = document.getElementById("popup")

document.getElementById("table").addEventListener("click", event => {
    document.getElementById("xCashier").value = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    document.getElementById("xProduct").value = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    if (event.target.parentElement.previousElementSibling
        .previousElementSibling.textContent == "Food") {
        document.getElementById("xCategory").selectedIndex = 0
    } else {
        document.getElementById("xCategory").selectedIndex = 1
    }
    const price = event.target.parentElement.previousElementSibling.textContent
    const regex = /\d/g
    const xPrice = price.match(regex).join("")
    document.getElementById("xPrice").value = xPrice
        
    if (event.target.text == "Edit") {
        popup.querySelector("button").innerHTML = "Change"

        popup.classList.add("show")
        document.getElementById("popup-bg").classList.add("show")
    }
    if (event.target.text == "Delete") {
        document.getElementById("popup-del").classList.add("show")
        document.getElementById("popup-bg").classList.add("show")
    }
})
document.getElementById("header").querySelector("a").addEventListener("click", () => {
    document.getElementById("xCashier").value = null
    document.getElementById("xProduct").value = null
    document.getElementById("xCategory").selectedIndex = null
    document.getElementById("xPrice").value = null
    popup.querySelector("button").innerHTML = "Add"
    popup.classList.add("show")
    document.getElementById("popup-bg").classList.add("show")
})
const close = document.getElementsByClassName("close")
for (x = 0; x < close.length; x++) {
    close[x].addEventListener("click", event => {
    popup.classList.remove("show")
    document.getElementById("popup-del").classList.remove("show")
    document.getElementById("popup-bg").classList.remove("show")
    })
}