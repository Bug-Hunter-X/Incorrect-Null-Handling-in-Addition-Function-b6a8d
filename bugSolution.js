function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Handle null values by throwing an error
  }
  return a + b;
}

console.log(foo(5,5)); //outputs 10

function foo2(a, b) {
  if (a === null || b === null) {
    return null; //Handle null values by returning null
  }
  return a + b;
}
console.log(foo2(null,5)); //outputs null
console.log(foo2(5,null)); //outputs null
console.log(foo2(5,5)); //outputs 10