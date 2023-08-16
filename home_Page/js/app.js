'use strict'

//////////////////// 
easy
////////////////////


function salomlashish() {
  console.log("Salom Dunyo");
}

salomlashish()


/////////////////////////////////////////////////////


function user(name) {
  name = "Kamil"
  console.log(name);
}


user()


/////////////////////////////////////////////////////

function userQuestion() {
  
  const askName = prompt("Ismingiz nima?","jhon");
  const askAge = +prompt("yoshingizni kiriting", "16");
  const askAddress = prompt("Manzilingizni kiriting", "navoi")
  console.log(askName);
  console.log(askAge);
  console.log(askAddress);
}
userQuestion()


///////////////////
Callback Functions
///////////////////

function Salomlashish(text) {
  text = "qalay"
  console.log("Salom");
}
Salomlashish()


/////////////////////////////////////////////////////

function callback1(name, callback) {
  name = "Tommy" 
  console.log(`salom ${name}`);

  function Callback() {
    console.log("Callback function ishladi");
  }

  Callback( )
}

callback1()



/////////////////////////////////////////////////////


function greet(params) {
  setTimeout(()=>{
    console.log("Salom Dunyo ");
} ,2000)
}

function sayName(name) {
  name = "Jacob"
  console.log(name);
}

greet();
sayName();  


///////////////////////////////////////////////////////


function helloWorld(name, myFunction) {
  myFunction
  console.log("Hello World");
}
helloWorld()

// 