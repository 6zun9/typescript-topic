// class ClassName {
//   prop: string = '';
//   constructor(prop: string) {
//     this.prop = prop;
//   }
// }

// let Animal = class {

// }

class Animal {
  readonly specie: string = '';

  private _numberOfKidneys = 2;
  // public weight: number = 0; // named parameter

  constructor(specie: string, public weight: number) {
    this.specie = specie;
    this.weight = weight;
  }

  public setNumberOfKidneys(num: number) {
    this._numberOfKidneys = num;
  }

  get numberOfKidneys() {
    return this._numberOfKidneys;
  }

  set numberOfKidneys(num: number) {
    if (num < 0) return;
    this._numberOfKidneys = num;
  }
}

let gorilla = new Animal('Grollia', 150);
gorilla.weight = 100; // named parameter
// grollia.specie = 'Chimpanze'; throws error
// grollia._numberOfKidneys = 5; // throws error private can not be accessible outside  class
let numberOfKidneys = gorilla.numberOfKidneys;
gorilla.numberOfKidneys = 5;

//static members
class MathHelper {
  public static pi: number = 3.1416;
  public static Add(x: number, y: number): number {
    return x + y;
  }
  public static Multiply = (x: number, y: number): number => {
    return x * y;
  };
}

let myPassword = MathHelper.Add(2, MathHelper.pi);
