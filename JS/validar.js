function validar() {
    var login = window.document.getElementById("login").value;
    var senha = window.document.getElementById("senha").value;

    var dados = {
        login: "usuario", login: "Usuario", senha: "abc123"
    }

            if ((dados.login == login) && (dados.senha == senha)) {
                console.log("estou aqui");
                document.getElementById("entrar").disabled=false;
                return false;
        }else {
            alert("Login ou Senha invalida");
            console.log("estou aqui5");
            return true;
        }


}
