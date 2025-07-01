tipper("7");
function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}

//bigtipper(15); this does not run when we call here
var bigtipper=function (a){
    var bill=parseInt(a);
    console.log(bill+200);
}

bigtipper(15);

console.log(name);
var name="Umaa";
function sayName(){
    console.log("Hey Umaa");

}
sayName();
console.log(name);