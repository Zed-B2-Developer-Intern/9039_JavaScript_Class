var names="Umaa";
console.log("Line2",names);
function sayName(){
    var names="U";
    console.log("Line5:",names);
    function sayName2(){
        var names="Uma";
        console.log("Line 8:",names);
    }
    sayName2(); 
}

sayName();
