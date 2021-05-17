abstract class Person {
  public name: string;
  // private money: number = 10000; // not access
  protected money: number = 10000; // accessible to child classes
  constructor(name: string) {
    this.name = name;
  }

  public getMoney(): number {
    return this.money;
  }
}

class Employee extends Person {
  public salary: number = 0;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }

  public checkAccess() {
    this.name = '';
    this.money = 131; //accessbile while access  is protected
  }

  public getMoney(): number {
    return super.getMoney() + this.salary;
  }
}

let bill = new Employee('John', 250000);

// let newPerson  = new Person('Shine')  throws error can not create instace of abstract class
