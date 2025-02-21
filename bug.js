function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect handling of null values
  }
  return a + b;
}

console.log(foo(null, 5)); //outputs 0
console.log(foo(5, null)); //outputs 0
console.log(foo(5, 5)); //outputs 10