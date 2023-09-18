var objPeople =  [
{
    username : "Sungmurin_n",
    password : "End#1402"
},
{
    username : "Babejeno",
    password : "luvudarling"
},
{
    username : "Jaehyunbooboo",
    password : "14021411"
},
{
    username : "Pumkinpie",
    password : "jsparkrighthere"
},
{
    username : "Tattoocolor",
    password : "bibi34+35"
}
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0;i < objPeople.length;i++){
        if(username == objPeople[i].username&&password == objPeople[i].password){
            console.log(username + "your username and password are correct! you are logged in.");
            alert("your username and password are correct! you are logged in.");
            return false;
        }
        console.log("incorrect username and password.");
        alert("incorrect username and password.");
        return false;
    }
}