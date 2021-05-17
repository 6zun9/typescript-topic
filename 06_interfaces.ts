interface Printable {
  colors?: string[]; // optional
  readonly paperSize: string;
  print(): void;
}

let printIt = function (what: Printable) {
  what.print();
};

let printableObject: Printable = {
  paperSize: 'A4',
  print: () => console.log('Printable object is print'),
};

printIt(printableObject); // prints the printable object

class PdfDoc implements Printable {
  public paperSize: string = 'A4';
  public print(): void {
    console.log('Pdf is printed');
  }
}

// function interfaces

interface MathOperators {
  (x: number, y: number): number;
}

let addition: MathOperators;
addition = function (x: number, y: number): number {
  return x + y;
};

//Asserting types
let getChanceOfLife = function (person: {
  age: number;
  sex: string;
  [propName: string]: any;
}): { remained: number } {
  return person.sex == 'male'
    ? { remained: 68 - person.age }
    : { remained: 72 - person.age };
};

getChanceOfLife({ age: 38, sex: 'male', coutry: 'Austraila' });
