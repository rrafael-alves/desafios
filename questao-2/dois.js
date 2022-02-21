

let inputSenha = document.querySelector(".senha")

let inputNome = document.querySelector(".nome")


let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    let senha = inputSenha.value
    let nome = inputNome.value


    if (senha.length < 6) {
        
        let resposta = 6 - senha.length;
        alert(nome + " faltam " + resposta + " caracteres para ser uma senha segura.")
    
    } else {
        alert("senha cadastrada com sucesso?")
    }

    console.log(nome, senha)
})



