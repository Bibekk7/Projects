

let sendd=document.getElementById("button");


function check(){
var first=document.getElementById("firstpass").value;
var second=document.getElementById("secondpass").value;
    if(first==second) alert("Congrats!! Password Matches");
    else alert("Sorry..Password Doesn't match")

    location.reload();
}


sendd.addEventListener("click",check);




