// global variables

var num1 = ""; //store first number for math
var num2 = ""; //store second number for math
var operator; //store value of operator
var flag = false; //boolean false if we haven't used an operator
var equalTo = false; //boolean false if we haven't pressed '=' yet
var display = document.getElementById("display");
var opString = "";

// calculator

//function to set num1 & num2 variables
function setValue(number) {
    if(equalTo === true) {
        clearButton();
    }

    if (flag === false) {
        num1 += number;
        display.innerHTML = num1;
    }
    if (flag === true){
        num2 += number;
        display.innerHTML += number;
    }
    // if (num1.length > 8 || num2.length > 8) {
    //     display.innerHTML = "Max Limit of Digits Reached";
    //     alert("You can't have more than 8 numbers");
    // }
    
}

//functions to clear the calculator
function clearButton() {
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag = false;
}

//functions to clear current entry
function clearEntry() {
    if (flag === false) {
        if (num1 !== "") {
          num1 = "";
          display.innerHTML = num1;  
        }
    }
    if (flag === true) {
        num2 = "";
        display.innerHTML = num1 + opString;
    }
    if (equalTo === true) {
        num1 = "";
        display.innerHTML = num1;
    }
}

//functions for storing/selecting operator value
function setOperator(number) {
    operator = number;
    
    flag = true;

    //checks for which operator
    if (operator === 4) {
        display.innerHTML += " / ";
        opString = " / ";
    } else if (operator === 3) {
        display.innerHTML += " * ";
        opString = " * ";
    } else if (operator === 2) {
        display.innerHTML += " - ";
        opString = " - ";
    } else {
        display.innerHTML += " + ";
        opString = " + ";
    }

    //getting rid of multiple operators
    if (flag === true) {
        display.innerHTML = num1 + opString;
        num2 = "";
    }

    //prevents operations before entering a num1
    if(num1 === "" && flag === true){
        clearButton();
    }

    if(equalTo === true) {
        clearButton();
    }
}

//function to solve math equation
function equalClick() {
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result = "";
    var roundedResult = "";

    if (operator === 1) {
        result = num1 + num2;
    } else if(operator === 2) {
        result = num1 - num2;
        
    } else if(operator === 3){
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if (roundedResult === "Infinity") {
        display.innerHTML = "Cannot divide by zero.";
    } else if(roundedResult === "NaN") {
        display.innerHTML = "Invalid calculation";
    }
}
//function to find inverse
function findInverse() {
    if (flag === false) {
            num1 = (1/num1);
            display.innerHTML = num1;
            equalTo = true;
    }
    if (flag === true) {
        if (num2 === "") // if the second number is nothing 
        {
            display.innerHTML = "Invalid Compution"
        } else //if the second number is something
        {
            num2 = (1/num2);
            display.innerHTML = "" + num1 + opString + num2 + "";
            equalTo = true;``
        }
    }
}
//function to find square root 
function findSqrt() {
    if (flag === false) {
        num1 = Math.sqrt(num1);
        display.innerHTML = num1;
        equalTo = true;
    }
    if (flag === true) {
    if (num2 === "") // if the second number is nothing 
    {
        display.innerHTML = "Invalid Compution"
    } else //if the second number is something
    {
        num2 = Math.sqrt(num2);
        display.innerHTML = "" + num1 + opString + num2 + "";
        equalTo = true;
    }
    }
}

//function to find square
function findSquared() {
    if (flag === false) {
        num1 = Math.pow(num1, 2);
        display.innerHTML = num1;
        equalTo = true;
    }
    if (flag === true) {
    if (num2 === "") // if the second number is nothing 
    {
        display.innerHTML = "Invalid Compution"
    } else //if the second number is something
    {
        num2 = Math.pow(num2, 2);
        display.innerHTML = "" + num1 + opString + num2 + "";
        equalTo = true;
    }
    }
}

//function for delete last entered digit
function backspace() {
    var temp1 = "";
    var temp2 = "";
    if (equalTo === true) {
        clearButton();
    }
    if(flag===false) {
        temp1 = num1.substring(0, (num1.length - 1));
        num1 = temp1;
        display.innerHTML = num1;
    } 
    else if (flag===true && num2 !== ""){
        temp2 = num2.substring(0, num2.length - 1);
        num2 = temp2;
        display.innerHTML =num1 + opString + num2;
    } else {
        flag = false;
        display.innerHTML = num1;
    }
}

//function for adding decimal places
function setDecimal() {
    if (flag === false) {
        if (num1 === "") {
            num1 = "0."
            display.innerHTML += num1;
        }
        if (num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }
    if (flag === true) {
        if (num2 === "") {
            num2 = "0."
            display.innerHTML += num2;
        }
        if (num2.indexOf(".") === -1){
            num2 += ".";
            console.log(num2);            
            display.innerHTML = num1 + opString + num2;
        }
    }
}

//tell calculator what operater you need when messing with num2
function opSetString(op) {
    if (op === 1) {
        display.innerHTML = num1 + " + " + num2;
    } else if(op === 2) {
        display.innerHTML = num1 + " - " + num2;
    } else if(op === 3) {
        display.innerHTML = num1 + " * " + num2;
    } else {
        display.innerHTML = num1 + " / " + num2;
    }
}

