var testArray=[2,4,5,7,8,3,1,9,6];
console.log(testArray.fill("h",3,7));

const myNumber=[12,55,45,78,96,24,36];
const result=myNumber.filter((num)=>(num >= 45));
console.log(result);

var users=["Tim","Ted","Tom","Sam","sor","Sod"];
//console.log(users.slice(1,4));

//the 1 is staring and 2 is count of the index
users.splice(1,2,"HII","BYE");
console.log(users);