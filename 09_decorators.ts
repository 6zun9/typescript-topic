//modifies the behavior of classes,methods,accessors,parameters &  properties

// @class_decorator
// class SimpleClass {
//   @method_decorator
//   SimpleMethod() {}
// }

function logClass(originalConstructor: Function) {
  console.log('class is created');
}

function logInstance<T extends Function>(originalConstructor: T): T {
  let newConstructor = function (...args) {
    console.log(`Object is instantiated: ${JSON.stringify(args)}`);
    return originalConstructor.apply(this, args);
  };

  return (newConstructor as Function) as T;
}

console.log('Before class declarations');

@logClass
@logInstance
class MyClass {
  constructor(public name: string) {
    this.name = name;
  }
}

console.log('After class declarations');
let obj = new MyClass('John');
console.log(obj.name);
