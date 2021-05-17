// number
let n: number = 10;
n = 0x11; // hex value
n = 10110; // binary
n = 0o21; // octal

//boolean
let b: boolean = true;
b = false;
b = !!n; // if n == 0 ? false : true
b = !!null; // false

//string
const firstName: string = 'bzung';
let s: string = 'Hello world';
s = 'Hello Nepal';
s = `Hello ${firstName}`; // hello bzung

//undefined and null cab be assigned to any variables in javascript
let any: any = undefined;
any = null;

//any
let a: any = 2;
a = 'string';
a = false;

//void
let v: void;
v = undefined;

//array
let nArray: number[] = [1, 2, 3];
let sArray: Array<string> = ['hi', 'hello', 'hey'];
let aArray: any[] = [1, '2', 'Ram'];

//tupple - Fix array size & elements
let t: [string, number, number] = ['Software Engineer', 26, 150000];
t[1] = 29;

//enum
enum Color {
  Red,
  Green,
  Blue,
}
let e: Color = Color.Red;
e = 1;
n = Color.Blue;

//object
let person: object = {
  name: 'John',
};

let animal: { name: string } = {
  name: 'Tiger',
};

console.log(animal);
