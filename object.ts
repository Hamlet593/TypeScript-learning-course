const obj1: { a: number; b: string; c: boolean } = { a: 5, b: "alo", c: true };
console.log(obj1);

type MyObj2 = {
  readonly a: number;
  b?: string;
  c: null;
};

const obj2: MyObj2 = {
  a: 1,
  c: null,
};

console.log(obj2);

interface Obj3 {
  readonly a: number;
  b: number;
  c: string;
  [key: string]: string | number;
}

const obj3: Obj3 = {
  a: 11,
  b: 78,
  c: "barev",
  e: "23",
  6: "true",
};

console.log(obj3);

interface IPerson {
  name: string;
}

interface IPerson {
  age: number;
}

const child: IPerson = {
  name: "Hamo",
  age: 34,
};

interface ISirac {
  name: string;
}

interface ISirac {
  age?: 23;
}

interface IAccount {
  email: string;
  login: string;
  active: boolean;
}

interface ISEXAMOL extends ISirac, IAccount {
  skills: string[];
}

const qadz: ISEXAMOL = {
  name: "sirush",
  email: "f@m",
  login: "aa",
  active: true,
  skills: ["klir", "puc"],
};

console.log(qadz);

type ISirac1 = {
  age: number;
  name: string;
};

type ISirac2 = {
  email: string;
  login: string;
  active: boolean;
};

type ISirac3 = {
  skills: string[];
  level: string;
};

type FrontEndSirac = ISirac1 & ISirac2 & ISirac3;

const mySirac: FrontEndSirac = {
  age: 14,
  name: "Ashxen",
  email: "f@d",
  login: "f",
  active: false,
  skills: ["dosher"],
  level: "High Level Puc",
};

console.log(mySirac);