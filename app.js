//! CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = '';
}
// function calculate(){
//     let result = eval(display.value);
//     display.value = result;
// }

function calculate(){
    try{
        let result = eval(display.value);
         display.value = result;
    }
    catch(error){
        display.value = "Error";
    }
}