interface MyObj {
  [key: string]: string | number;
}

const obj: MyObj = {
  name: "testName",
  age: 31.
};

console.log(obj['age']);
