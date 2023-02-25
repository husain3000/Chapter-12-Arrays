//An array can be destructured when being assigned to a new variable.//
// const triangle = [3, 4, 5];
// const [length, height, hypotenuse] = triangle;
// length === 3; 
// height === 4; 
// hypotenuse === 5;

// console.log(length)

// Elements can be skipped
const [,b,,d] = [1, 2, 3, 4];
console.log(b,d); 