var questao = "";
function validacao() {
    var questao2 = document.getElementById("q2");
    var questao3 = document.getElementById("q3");

    if (questao3.checked == true) {
        questao = "3";
        console.log(questao);
        prova();

    } else if (questao2.checked == true) {
        questao = "2";
        console.log(questao);
        prova();
    } else {
        questao = "1";
        console.log(questao);
        prova();
    }

}
function prova() {
    var gold = document.getElementById("gold");
    var bronze = document.getElementById("bronze");
    var silver = document.getElementById("silver");
    var qt1 = document.getElementById("qt1");
    var qt2 = document.getElementById("qt2");
    var qt3 = document.getElementById("qt3");
    var app= document.getElementById("aplicativo");
    switch (questao) {
        case "2":
            qt2.style.backgroundColor = "red";
            alert("Poxa que pena a resposta não está correta!");
            silver.style.display = "block";
            app.style.display = "flex";
            document.getElementById("questoes").style.display = "none";
            document.getElementById("interned").style.display = "block";
            questao = "";
            break;

        case "3":
            qt3.style.backgroundColor = "green";
            alert("Parabéns a resposta está correta!");
            gold.style.display = "block";
            app.style.display = "flex";
            document.getElementById("questoes").style.display = "none";
            document.getElementById("avanco").style.display = "block";
            questao = "";
            break;

        case "0":
            document.getElementById("questoes").style.display = "block";
            qt1.style.backgroundColor = "transparent";
            qt2.style.backgroundColor = "transparent";
            qt3.style.backgroundColor = "transparent";
            document.getElementById("avanco").style.display = "none";
            document.getElementById("interned").style.display = "none";
            document.getElementById("inicio").style.display = "none";
            app.style.display = "none";
            console.log(questao);
            break;

        default:
            if (questao == "7") {
                bronze.style.display = "block";
                document.getElementById("questoes").style.display = "none";
                document.getElementById("title_question").style.display = "none";
                app.style.display = "flex";
                questao = "";
            } else {
                document.getElementById("qt1").style.backgroundColor = "red";
                alert("Poxa que pena a resposta não está correta!");
                bronze.style.display = "block";
                document.getElementById("questoes").style.display = "none";
                document.getElementById("inicio").style.display = "block";
                app.style.display = "flex";
                questao = "";
            }
            break;
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