const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubled = numbers.map(num=>num*2);
console.log("doubled:",doubled);
const even = numbers.filter(num=>num%2===0);
console.log("even:",even);
const sum =numbers.reduce((acc,num)=>acc+num,0);
console.log("sum:",sum)