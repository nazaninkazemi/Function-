console.log("Basic Functions");
function greetStudent() {
    console.log("Welcome to the MERN Stack course!");
}

greetStudent();

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(10, 5));

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber(4));

console.log("Parameters and Return Values");

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));

function introduceStudent(name, course = "MERN Stack") {
    console.log("Student Name: " + name);
    console.log("Course: " + course);
}

introduceStudent("Bahar");
introduceStudent("Bahar", "JavaScript");

function addWithReturn(a, b) {
    return a + b;
}

function addWithConsole(a, b) {
    console.log(a + b);
}

let result = addWithReturn(5, 3);
console.log("Returned value: " + result);

let secondResult = addWithConsole(5, 3);
console.log("Console function result: " + secondResult);


console.log("Function Expressions and Arrow Functions");

const multiplyNumbers = function(a, b) {
    return a * b;
};

console.log(multiplyNumbers(4,5));

squareNumber = (number) => number * number;

console.log(squareNumber(6));

const isEven = (number) => number % 2 === 0;

console.log(isEven(8));
console.log(isEven(7)); 

console.log("Global and Function Scope");
let courseName = "MERN Stack";

function showCourse() {
    console.log("Course Name: " + courseName);
}

showCourse();

function showLocalVariable() {
    let studentName = "Bahar";
    console.log("Student Name: " + studentName);
}

showLocalVariable();
console.log("Block Scope");

if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";

    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}
console.log(varVariable);
console.log(typeof letVariable);  
console.log(typeof constVariable); 

console.log("Lexical Scope and Scope Chain");

function outerFunction() {
    let message = "Hello from the outer function";
    function innerFunction() {
        console.log(message);
    }
    innerFunction();
}

outerFunction();

let globalMessage = "I am in global scope";
function firstLevel() {
    let outerMessage = "I am in outer function scope";
    function secondLevel() {
        let innerMessage = "I am in inner function scope";

        console.log(globalMessage);
        console.log(outerMessage);
        console.log(innerMessage);
    }
    secondLevel();
}
firstLevel();

console.log(" Variable Shadowing");

let score = 90;
function showScore() {
    let score = 50;

    console.log("Score inside function: " + score);
}

showScore();

console.log("Score outside function: " + score);

console.log("Closures");

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());

let counterA = createCounter();
let counterB = createCounter();

console.log("Counter A: " + counterA()); 
console.log("Counter A: " + counterA()); 

console.log("Counter B: " + counterB()); 
console.log("Counter B: " + counterB()); 

console.log("Counter A: " + counterA()); 


console.log("Exercises Completed");