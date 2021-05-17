let something: Array<any> | string;

something = [1, 2, 3];
something = 'Hello world';

const lenght = something.length; //accepts length for both array & string

// something.substr(1, 3); // throws error for array

//resolve techniques
if (typeof something === 'string') {
  something.substr(1, 3);
}

// typecasting
(something as string).substr(1, 3);
(<string>something).substr(1, 3);
