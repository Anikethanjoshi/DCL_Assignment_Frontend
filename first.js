let a = 100;
let b = 200;

function add(){
c = a+b;
console.log(c)
}
add()

function sub(){
c = a-b;
console.log(c)
}
sub()


function multiply() {

    let c = a * b;
    console.log(c);
}
multiply();


function divide() {
    let a = 10;
    let b = 2;
    let c = a / b;
    console.log(c);
}
divide();

function modulus() {
    let a = 10;
    let b = 3;
    let c = a % b;
    console.log(c);
}
modulus();

function power() {
    let a = 2;
    let b = 3;
    let c = a ** b;
    console.log(c);
}
power();

//assignment operator

function addAssign() {
    let a = 5;
    a += 3;
    console.log(a);
}
addAssign();

function subAssign() {
    let a = 10;
    a -= 4;
    console.log(a);
}
subAssign();

//Comparison Operators


function equalCheck() {
    let a = 5;
    let b = "5";
    console.log(a == b);
}
equalCheck();

function strictEqualCheck() {
    let a = 5;
    let b = "5";
    console.log(a === b);
}
strictEqualCheck();

function greaterCheck() {
    let a = 10;
    let b = 5;
    console.log(a > b);
}
greaterCheck();

//Logical Operators

function andOperator() {
    let a = 10;
    let b = 5;
    console.log(a > 5 && b < 10);
}
andOperator();

function orOperator() {
    let a = 2;
    let b = 10;
    console.log(a > 5 || b > 5);
}
orOperator();

function notOperator() {
    let a = true;
    console.log(!a);
}
notOperator();

function checkAge() {
    let age = 20;
    let result = (age >= 18) ? "Adult" : "Minor";
    console.log(result);
}
checkAge();

// Type Operators

function checkType() {
    let a = "Hello";
    console.log(typeof a);
}
checkType();

//instanceof`

function checkInstance() {
    let arr = [];
    console.log(arr instanceof Array);
}
checkInstance();
// Nullish Coalescing `??`


function nullishExample() {
    let a = null;
    let result = a ?? "Default Value";
    console.log(result);
}
nullishExample();

//Optional Chaining `?.`

function optionalChain() {
    let user = {};
    console.log(user.address?.city);
}
optionalChain();
//Increment `++`

function incrementExample() {
    let a = 5;
    a++;
    console.log(a);
}
incrementExample();

//STRING METHODS
//length (Property)

function stringLength() {
    let str = "Hello";
    console.log(str.length);
}
stringLength();

//toUpperCase()

function upperCase() {
    let str = "hello";
    console.log(str.toUpperCase());
}
upperCase();

//toLowerCase()

function lowerCase() {
    let str = "HELLO";
    console.log(str.toLowerCase());
}
lowerCase();
// trim()

function trimExample() {
    let str = "   Hello   ";
    console.log(str.trim());
}
trimExample();
// trimStart()


function trimStartExample() {
    let str = "   Hello";
    console.log(str.trimStart());
}
trimStartExample();
// trimEnd()


function trimEndExample() {
    let str = "Hello   ";
    console.log(str.trimEnd());
}
trimEndExample();
//includes()


function includesExample() {
    let str = "Hello World";
    console.log(str.includes("World"));
}
includesExample();
//indexOf()


function indexOfExample() {
    let str = "Hello World";
    console.log(str.indexOf("World"));
}
indexOfExample();
// lastIndexOf()


function lastIndexExample() {
    let str = "Hello Hello";
    console.log(str.lastIndexOf("Hello"));
}
lastIndexExample();
// slice()

function sliceExample() {
    let str = "JavaScript";
    console.log(str.slice(0, 4));
}
sliceExample();
// substring()


function substringExample() {
    let str = "JavaScript";
    console.log(str.substring(4, 10));
}
substringExample();
// replace()

function replaceExample() {
    let str = "Hello World";
    console.log(str.replace("World", "JS"));
}
replaceExample();
// replaceAll()

function replaceAllExample() {
    let str = "Hello Hello";
    console.log(str.replaceAll("Hello", "Hi"));
}
replaceAllExample();
//split()


function splitExample() {
    let str = "apple,banana,mango";
    console.log(str.split(","));
}
splitExample();
//charAt()


function charAtExample() {
    let str = "Hello";
    console.log(str.charAt(1));
}
charAtExample();
// charCodeAt()


function charCodeExample() {
    let str = "A";
    console.log(str.charCodeAt(0));
}
charCodeExample();
// startsWith()

function startsWithExample() {
    let str = "JavaScript";
    console.log(str.startsWith("Java"));
}
startsWithExample();
// endsWith()


function endsWithExample() {
    let str = "JavaScript";
    console.log(str.endsWith("Script"));
}
endsWithExample();
// concat()

function concatExample() {
    let str1 = "Hello";
    let str2 = " World";
    console.log(str1.concat(str2));
}
concatExample();
// repeat()

function repeatExample() {
    let str = "Hi ";
    console.log(str.repeat(3));
}
repeatExample();
//padStart()


function padStartExample() {
    let str = "5";
    console.log(str.padStart(3, "0"));
}
padStartExample();
// padEnd()


function padEndExample() {
    let str = "5";
    console.log(str.padEnd(3, "0"));
}
padEndExample();
// match()


function matchExample() {
    let str = "Hello 123";
    console.log(str.match(/\d+/));
}
matchExample();

//search()

function searchExample() {
    let str = "Hello World";
    console.log(str.search("World"));
}
searchExample();
let x = prompt("enter a first no")
let y = prompt("enter second no")
console.log(a+b)