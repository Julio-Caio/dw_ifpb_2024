import { typeTriangle } from "./lib.mjs";

console.log(typeTriangle(2, 2, 2)); // equilateral
console.log(typeTriangle(10, 10, 10)); // equilateral
console.log(typeTriangle(3, 4, 4)); // isosceles
console.log(typeTriangle(4, 3, 4)); // isosceles
console.log(typeTriangle(4, 4, 3)); // isosceles
console.log(typeTriangle(10, 10, 2)); // isosceles
console.log(typeTriangle(3, 4, 5)); // scalene
console.log(typeTriangle(10, 11, 12)); // scalene
console.log(typeTriangle(5, 4, 2)); // scalene
console.log(typeTriangle(0, 0, 0)); // none
console.log(typeTriangle(3, 4, -5)); // none
console.log(typeTriangle(1, 1, 3)); // none
console.log(typeTriangle(2, 4, 2)); // none