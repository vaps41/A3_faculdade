var hoje = new Date().getFullYear();
document.getElementById("hoje").innerHTML = hoje;

function interesse(){
    var block= document.getElementById("chat").style.display ="block";

    if(block != true){
        document.getElementById("chat").style.display ="block";
        console.log("estou aqui");
        block = false;
        return true;
    }else{
        document.getElementById("chat").style.display ="none";
        console.log("sai vazado");
        block = true;
        return false;
    }
}
