const buttons = document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", function() {
        console.log(e.value)
    })
})
console.log(buttons)