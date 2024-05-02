let btn = document.getElementById("btn")
let div = document.getElementById("cont")
let button = document.getElementById("button")

btn.addEventListener("click",() => {
    div.style.left = "300px"
})

button.addEventListener("click",() => {
    div.style.right = "300px"
})