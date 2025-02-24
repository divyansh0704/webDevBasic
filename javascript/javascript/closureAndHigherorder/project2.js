function apply(arr,func){
    return arr.map(func);
}

const numbers = [1,2,3,4,5];
const double = (num)=>num*2;

const result = apply(numbers,double);
console.log(result);