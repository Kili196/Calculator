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
        else if(e.value === "="){
            screen.innerText = calculate(value.mode);
        }
        else{
            screen.innerText += e.value;
            if(e.value === "+" || e.value === "-" || e.value === "/" || e.value === "*"){
                value.mode = e.value;
            }
            else if(value.mode === ""){
                value.firstValue += e.value;
            }
            else if (value.mode !== ""){
                value.secondValue += e.value;
            }
        }
    })
})

function calculate(mode){
    switch(mode){
        case "+": {
            return add(value.firstValue, value.secondValue)
        }
        case "-": {
            return sub(value.firstValue, value.secondValue)
        }
        case "/": {
            return div(value.firstValue, value.secondValue)
        }
        case "*": {
            return mult(value.firstValue, value.secondValue)
        }
    }
}


function add(val1, val2){
    return val1 + val2;
}
function sub(val1, val2){
    return val1 - val2;
}
function mult(val1, val2){
    return val1 * val2;
}
function div(val1, val2){
    if(val2 === 0){
        return "zero division not possible"
    }
    return val1/val2;
}




console.log(buttons)