const screen = document.getElementById("value-toShow");

const buttons = document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", function() {
        screen.innerText += e.value;
    })
})




console.log(buttons)