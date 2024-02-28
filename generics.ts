type TypeFactory<X> = X;
type MyType = TypeFactory<string>;

const a: MyType = "Generic1";
console.log(a);

//

interface ValueContainer<x, y> {
  value: x;
  age: y;
}

type StringContainer = ValueContainer<string, boolean>;

const b: ValueContainer<string, number> = {
  value: "Valodik",
  age: 20,
};

console.log(b);

const c: StringContainer = {
  value: "Hamov",
  age: true,
};

console.log(c);

//

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printNumbers([1, 2, 3]);

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printString(["a", "b", "c"]);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a1", "b1", "c1"]);

//

function fillArray<T>(len: number, elem: T): T[] {
  return new Array<T>(len).fill(elem);
}
const filled = fillArray<string>(4, "a");
console.log(filled);

// Սա այն դեպքերում, երբ փոխանցում ես string, բայց պիտի վերադարձնի number

interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

console.log(printLength("test"));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = {
  a: 1,
  b: 222,
  c: 3,
};

console.log(getProperty(obj, "b"));
