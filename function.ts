const fn1 = (x: number): string => String(x);

console.log(fn1(5));

//

type CallBack = (arg: number) => string;
const cB = (arg: number) => arg + "";

const fn2 = (cB: CallBack, arg2: number): string => {
  return cB(arg2);
};

console.log(fn2(cB, 6));

//

function fn3(x = 1, y = 2): [number, string] {
  return [x, y + ""];
}
console.log(fn3(9, 20));

//

function fn4(...args: number[]): string[] {
  const arr: string[] = [];
  for (let i = 0; i < args.length; i++) {
    arr.push(args[i] + "");
  }
  return arr;
}
console.log(fn4(1, 2, 3));

//

interface Printable {
  label: string;
  price: number;
}

const drink = {
  label: "Jermuk",
  price: 577,
  fresh: true,
};

// const phone: Printable = {
//   label: "Jermuk",
//   price: 577,
//   fresh: true,
// };

function fn5(obj: Printable) {
  return obj;
}
console.log(fn5(drink));
// console.log(fn5(phone));
// console.log(
//   fn5({
//     label: "Jermuk",
//     price: 577,
//     fresh: true,
//   })
// );
//

//

function pickCard(x: number | { suit: string; card: number }[]): number | { suit: string; card: number }[] {
    return x
}

console.log(pickCard(6));

//

