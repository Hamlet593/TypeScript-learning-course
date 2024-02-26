const arr1: string[] = ["alo"];
arr1.push("Vochxar");

console.log(arr1);

const arr2: boolean[] = [!true];
console.log(arr2);

const arr3: Array<number> = [5];
console.log(arr3);

const arr4 = [null];
console.log(arr4);

const arr5: string[][] = [["Armen"], ["Ashot"]];
console.log(arr5);

type myType1 = string | number;
const myArr1: myType1[] = ["Ola ALo"];
console.log(myArr1);

type GeneralArray = boolean | string;
const myArray: GeneralArray[][] = [["armenchik", true]];
console.log(myArray);

const secondArray: (string | boolean)[][] = [["Hamo", true]];
secondArray.push([false]);
console.log(secondArray);

const lastArrTest1 = [['str', true]];
lastArrTest1.push(['null']);
console.log(lastArrTest1);

//

const tupple1: [boolean, string, number] = [true, "Hamo", 5];
console.log(tupple1);

const fakeTuppple2: any[] = ["fakeTupple2", true, null];
console.log(fakeTuppple2);

const realTupple3: [number, string] = [54, "realTupple3"];
console.log(realTupple3);

const realTupple4: [string, string, boolean][] = [["Hamo", "Etuk", true]];
console.log(realTupple4);

type SimpleCSV = [string, string, number];
const realTupple5: SimpleCSV[] = [['Valodik', 'Aramik', 8]];
console.log(realTupple5);

//
const arr8 = ['a', 'b', 'c'];
let el = arr8[0];
console.log(arr8)