function vars(): void {
  let text: string;
  text = 'A value of type defined can be assigned after initialisation';
  console.log(text);
  text = 'And value can be changed later on';
  console.log(text);

  const message = 'The const value must be initialized beforehand';
  console.log(message, '\n');
}

/** 
  You can see that the compiled JavaScript is almost identical.
   While in the TypeScript version, the types are explicit and 
   must conform when the variables are assigned vales, 
   the JavaScript version does not indicate the type, 
   but will fall back to a type known as any which can be anything. 
   Since the source was written in TypeScript, you can 
   trust that the outputted JavaScript will work correctly 
   in regard to the types that you have chosen despite 
   the JavaScript version not actually enforcing it.

  So, in the TypeScript version I have demonstrated explicitly setting some types of

  string
  boolean
  number
  array of numbers
  a tuple of two elements consisting of a number and a string
  dictionary if string where the key is a number
  a Set of numbers
  As an experiment, try swapping some types of each variable without changing the values. I.e., re-declare foo as a boolean and you will see that the VSCode IDE will indicate that you are assigning the wrong type of values to each variable. If you were to write this directly in JavaScript, then no such error would be indicated. 
*/

function basicTypes(): void {
  let foo: string;
  let bar: boolean;
  let baz: number;
  let qux: string[];
  let quuz: [number, string];
  let corge: { [key: number]: string };
  let grault: Set<number>;

  foo = 'ABC';
  bar = true;
  baz = 123;
  qux = ['a', 'b', 'c'];
  quuz = [1, 'abc'];
  corge = { 123: 'abc', 456: 'def' };
  grault = new Set([1, 2, 3]);

  console.log(`${foo} ${bar} ${baz} ${qux} ${quuz} ${corge} ${grault}\n`);
}

export default function (): void {
  vars();
  basicTypes();
}
