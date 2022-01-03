function validacao() {
    var questao2= document.getElementById("q2");
    var questao3 = document.getElementById("q3");
    if (questao3.checked == true) {
        document.getElementById("qt3").style.backgroundColor="green";
        document.getElementById("qt2").style.backgroundColor="transparent";
        document.getElementById("qt1").style.backgroundColor="transparent";
        alert("Parabéns a resposta está correta!");
        document.getElementById("gold").style.display="block";
        document.getElementById("silver").style.display="none";
        document.getElementById("bronze").style.display="none";
        document.getElementById("questoes").style.display = "none";

    } else if (questao2.checked == true) {
        document.getElementById("qt2").style.backgroundColor="red";
        document.getElementById("qt3").style.backgroundColor="transparent";
        document.getElementById("qt1").style.backgroundColor="transparent";
        alert("Poxa que pena a resposta não está correta!");
        document.getElementById("silver").style.display="block";
        document.getElementById("gold").style.display="none";
        document.getElementById("bronze").style.display="none";
        document.getElementById("questoes").style.display = "none";

    } else {
        document.getElementById("qt1").style.backgroundColor="red";
        document.getElementById("qt3").style.backgroundColor="transparent";
        document.getElementById("qt2").style.backgroundColor="transparent";
        alert("Poxa que pena a resposta não está correta!");
        document.getElementById("bronze").style.display="block";
        document.getElementById("gold").style.display="none";
        document.getElementById("silver").style.display="none";
        document.getElementById("questoes").style.display = "none";
    }

}
function aceito() {
    var aceitar = document.getElementById("questoes").style.display;
    if (aceitar == "block") {
        document.getElementById("questoes").style.display = "none";
        document.getElementById("title_question").style.display = "flex";
    } else {
        document.getElementById("questoes").style.display = "block";
        document.getElementById("title_question").style.display = "none";
    }
}