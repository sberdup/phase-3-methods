/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
function greetProgrammer() {
  console.log("Hello, programmer!");
}
greetProgrammer()
/*
  You should be able to call this function with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Sergio')
/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"
  
  You should also be able to call this function with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
function greetWithDefault(name = "programmer") {
  console.log(`Hello, ${name}!`);
}
greetWithDefault('Link')
/*
  You should be able to call this function with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3,8))
/*
  You should be able to call this function with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the function is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
function halve(number) {
  if (typeof number !== "number") return null;

  return number / 2;
}
console.log(halve('Sergio'))
console.log(halve(67))