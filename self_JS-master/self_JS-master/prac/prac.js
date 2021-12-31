const A = "Sungwoo";

console.log(A);

const B = 543;

console.log(B);

const C = true;

console.log(C);

const D = 4.3;

console.log(D);

const E = ["Mon", "Tue", "Wed", "Thu", "Fri", true, B];

console.log(E);

console.log(E[3]);

const kimInfo = {
    name:"Kim",
    age:24,
    gender:"Male",
    isHandsome:true,
    favMovies:["Oldboy", "Along"]
}

console.log(kimInfo);

console.log(kimInfo.age);

function sayHello(name,age){
    console.log("Hello", name, "You are", age, "years old")
}

function sayBye(name){
    return `Bye ${name}`
}

sayHello("sungwoo", 24);

const A = sayBye("sungwoo");

console.log(A);

const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    }
}

const plus = calculator.plus(5,5)
const minus = calculator.minus(10,5)

console.log(plus);
console.log(minus);

if (20 > 5 && "Kim" === "Kim") {
    console.log("yes");
} else {
    console.log("no");
}

if (20 > 5 || "Kim" === "Lee") {
    console.log("yes");
} else {
    console.log("no");
}

const title = document.querySelector("#title")

function handleClick(){
    title.style.color = "red";
}

title.addEventListener("click", handleClick);

const age = prompt("How old are U?");

console.log(age);

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(128, 0, 128)";
const OTHER_COLOR = "#ff7675";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();

//클릭시 클래스를 바꿔서 색을 바꾸는 법

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

