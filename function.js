//basic
function sayHello(name)
{
    console.log(`Hello ${name} how are you?`);
}
sayHello("Umaa");
sayHello("Sammy");

function namaste(){
    return "Hello India";
}
var greeting=namaste();
console.log(greeting);

//user Role Function

function getUserRole(name,role)
{
    switch(role)
    {
        case "admin":
            return `${name} is an admin with all access`;
            break;
        case "subadmin":
            return `${name} is an subadmin create / delete course`;
            break;
        case "testprep":
            return `${name} is an testprep with access to create/delete tests`;
            break;
        case "user":
            return `${name} consume all content`;
            break;
        default:
            return `${name} is an trial user`;
            break;
    }
}

var getRole1=getUserRole("umaa","admin");
console.log(getRole1);

var getRole2=getUserRole("sammy","subadmin");
console.log(getRole2);

var getRole3=getUserRole("kitty","hello");
console.log(getRole3);