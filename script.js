const screen = document.getElementById("value-toShow");


let value = {
    firstValue: "",
    mode: "",
    secondValue: "",

}

const buttons = document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", function() {
        if(e.value === "C"){
            screen.innerText = "";
        }
 
        else{
            screen.innerText += e.value;
        }
    })
})


function add(val1, val2){
    return val1 + val2;
}
function sub(val1, val2){
    return val1 - val2;
}
function mult(val1, val2){
    return val1 - val2;
}
function div(val1, val2){
    if(val2 === 0){
        return "zero division not possible"
    }
    return val1/val2;
}




console.log(buttons)