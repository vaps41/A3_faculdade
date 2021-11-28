var hoje = new Date().getFullYear();
document.getElementById("hoje").innerHTML = hoje;

function interesse() {
    var block = document.getElementById("chat").style.display;

    if (block == "none") {
        document.getElementById("chat").style.display = "block";
        return true;
    } else {
        document.getElementById("chat").style.display = "none";
        return false;
    }
}
function menu_lingua_ent() {
    var display = document.getElementById("linguagem").style.display;


    if (display == "none") {
        document.getElementById("linguagem").style.display = "block";
        return true;
    } else {
        document.getElementById("linguagem").style.display = "none";
        return false;
    }
}
