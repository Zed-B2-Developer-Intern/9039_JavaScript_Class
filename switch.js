var user="user";
switch(user)
{
    case "admin":
        console.log("Gets Full Access");
        break;
    case "subadmin":
        console.log("Get Access to Create/Delete Course");
        break;
    case "testprep":
        console.log("Get Access to Create/Delete tests");
        break;
    case "user":
        console.log("Gets acess to Comsume Content ");
        break;
    default:
        console.log("Trial User");
        break;
}