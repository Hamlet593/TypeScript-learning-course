let test0 = "Ester";
console.log(test0);

let test1: boolean;
test1 = true;
console.log(test1);

let yourName: string;
yourName = "Valod";
console.log(yourName);

let test2: string | number; //union
test2 = 465;
test2 = "test2";
console.log(test2);

type Name = string;
const myName: Name = "Hamlet";
console.log(myName);

type Score = number | string; // Declaring the type - հայտարարում ենք տիպը
const myScore: Score = 8; // it calls "allias" - սա կոչվում է ալիաս
console.log(myScore);

let x1: number = JSON.parse("6"); // this function returned ANY and we should check value
console.log(x1);
let x2: string = JSON.parse("9");
console.log(x2);

let test3:any;
test3 = 'e';
console.log(test3);