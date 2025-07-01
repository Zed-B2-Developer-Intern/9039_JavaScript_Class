var isEven= (number)=>{
 
    return number%2===0;
}
//arrow function should have return
console.log(isEven(2));


var result=[2,4,7,8].every(isEven);
console.log(result);
//when curly braces we should mention return
var result=[2,4,7,8].every((e)=>{
    return e%2===0;
});
console.log("Curly Braces",result);
//when we use paranthesis does not required return
var result=[2,4,6,8].every((e)=>(e%2===0));
console.log("Paranthesis:"+result);

