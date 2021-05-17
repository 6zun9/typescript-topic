class Entity {
  constructor(public id: number) {}
}

class User extends Entity {
  constructor(id: number, public name: string) {
    super(id);
  }
}

class Product extends Entity {
  constructor(id: number, public price: number) {
    super(id);
  }
}

function UserSerializer(input: User): string {
  return JSON.stringify(input);
}

function ProductSerializer(input: Product): string {
  return JSON.stringify(input);
}

// solution

function EnititySerializer(input: any): string {
  return JSON.stringify(input);
}

//proper solution

function EnititySerializerProper<T extends Entity>(input: T): string {
  return JSON.stringify(input);
}

let user = new User(1, 'John');
let product = new Product(1, 200);

let serializeUser = UserSerializer(user);
let serializeProduct = ProductSerializer(product);

serializeUser = EnititySerializerProper<User>(user);
// serializeUser = EnititySerializerProper<User>(product) //can not pass arguement product for user type
serializeProduct = EnititySerializerProper<Product>(product);

// let wrongSerializer = EnititySerializerProper<Number>(2); // Number doesnot satisfy the constraint Entity

//generic classes for

class EntityHelper<T extends Entity> {
  serializer(input: T): string {
    return JSON.stringify(input);
  }

  deserializer(input: string): T {
    return JSON.parse(input) as T;
  }
}

let userHelper = new EntityHelper<User>();
userHelper.serializer(user);
