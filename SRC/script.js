// js variable exercise 1
var carName = "Volvo";
// js variable exercise 2
var x = 50;
//js variable exercise 3
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;
// js variable exercise 4
var x = 5;
var y = 10;
var z = x + y;
alert(z);
// js variable exercise 5
var firstName = "John",
  lastName = "Doe",
  age = 35;
// js operators exercise 1
alert(10 * 5);
// js operators exercise 2
alert(10 / 2);
// js operators exercise 3
alert(15 % 9);
// js operators exercise 4
x = 10;
y = 5;
x += y;
// js operators exercise 5
x = 10;
y = 5;
x *= y;
// Js data type exercise 1
let length = 16; //
number;

let lastName = "Johnson"; //
string;

const x = {
  firstName: "John",
  lastName: "Doe",
}; //
object;
// js function exercise 1
function myFunction() {
  alert("Hello World!");
}
myFunction();
// js function exercise 2
function myFunction() {
  alert("Hello World!");
}

function myFunction() {
  //   js function exercise 3
  return;
  ("Hello");
}
document.getElementById("demo").innerHTML = myFunction();
// js function exercise 4
function myFunction() {
  document.getelementbyId("demo").innerHTML = "Hello";
}
//   js object exercise 1

const person = {
  firstName: "John",
  lastName: "Doe",
};

alert(person.firstName);
{
  const person = {
    name: "John",
    age: 50,
  };
  alert(person.name + " is " + person.age);
  // js object exercise 2
  const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway",
  };
}
// js object exercise 3
const person = {
  name: "John",
  age: 50,
};
alert(person.name + " is " + person.age);
const person = {
  name: "John",
  age: 50,
};
alert(person.name + " is " + person.age);
// js event exercise 1
<button onclick="alert('Hello')">Click me.</button>;
// js  event exercise 2
<button
  onclick="
myFunction()
"
>
  Click me.
</button>;
// js  event exercise 3
<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>;
{
// js string exercise 1
let txt = "Hello World!";
let x = txt.length;
alert(x); }
{
// js string exercise 2
let txt = "
We are \"Vikings\"
";
    alert(txt);}
{// js string exercise 2

    let str1 = "Hello ";
let str2 = "World!";
alert(
str1
 
+
 
str2
);}
// Js string method exercise 1
let txt = "Hello World!";
txt = txt.
toUpperCase()
;
{// Js string method exercise 2


let txt = "I can eat bananas all day";
let x = txt.slice(
10
, 
17
);}
// Js string method exercise 3 
let txt = "Hello World";
txt = txt.
replace
("Hello", "Welcome");

// Js string method exercise 4
let txt = "Hello World";
txt = 
txt.toUpperCase()
;
// Js string method exercise 5
txt = "Hello World";
txt = 
txt.toLowerCase()
;
// js array exercise 1
const cars = ["Saab", "Volvo", "BMW"];
let x = 
cars[1]
;
// js array exercise 2
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0]
// js array exercise 3 
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(
cars.length
);
// js array method exercise 1
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop()
;
// js array method exercise 2 
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi")
;
// js array method exercise 3
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(
1
, 
2
);
// js array sort exercise 1
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort()
;
// js date exercise 1
const d = 
new Date()
;
alert(d);
// js date exercise 2

const d = new Date();
year = 
d.getFullYear()
;
// js date exercise 3
const d = new Date();
month = 
d.getMonth()
;
// js date exercise 4
const d = new Date();
d.
setFullYear(2020)
;
// js math exercise 1
let r = 
Math.random()
// js math exercise 2

let x = 
Math.max
(10, 20);
// js math exercise 3

let x = Math.
round
(5.3);
// js math exercise 4

let x = Math.
sqrt(9)
;
// js comparison exercise 1

x = 10;
y = 5;
alert(x 
>
 y);
// js comparison exercise 2 
x = 10;
y = 10;
alert(x 
==
 y);
//  js comparison exercise 3
x = 10;
y = 5;
alert(x 
!=
 y);
//  js comparison exercise 4
var age = n;
var voteable = (age 
<
 18) 
?
 "Too young" 
:
 "Old enough";
alert(voteable);
// js condition exercise 1
if 
(
x > y
)
{
  alert("Hello World");
}
// js condition exercise 2

if
 (x 
>
 y) {
  alert("Hello World");
} 
else
 {
  alert("Goodbye");
}
// js switch exercise 1

switch
(fruits) {
  
case
 "Banana":
    alert("Hello")
    break;
  
case
 "Apple":
    alert("Welcome")
    break;    
}
// js switch exercise 2
switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  
default:

    alert("Neither");
}
// js for loop exercise 1
let i;
for
 (
i
 = 
0
; 
i
 < 
10
; 
i++
) {
  console.log(i);
}
// js for loop exercise 2
const fruits = ["Apple", "Banana", "Orange"];
for (x 
of
 
fruits
) {
  console.log(x);
}
// js while loops exercise 1
while
(i 
<
10) {
 console.log(i);
 i++
}
//  js while loops exercise 2
let i = 0;
while (i < 10) {
  console.log(i);
  
i
 = 
i
 
+
 
2
;
}
// js break loops exercise 1
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    
break
;
  }
}
// Js html dom exercise 3

<p class="test"></p>
<p class="test"></p>

<script>
document.getElementsByClassName("test")[0].innerHTML
  {/*  Js html dom exercise 3 */}
<img id="image" src="smiley.gif">

<script>
document.getElementById("image")
.src
 = "pic_mountain.jpg";
</script>