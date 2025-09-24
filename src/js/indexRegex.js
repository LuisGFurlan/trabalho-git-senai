const btnEnviar = document.querySelector("#btn_enviar");

const cxNome = document.querySelector("#nome");
const cxEmail = document.querySelector("#email");

cxNome.addEventListener("blur", function(e){
    const flashMessageNome = document.querySelector("#nome_vazio");
    if(cxNome.value == ""){
        flashMessageNome.style.display = "block";
    }else{
        flashMessageNome.style.display = "none";
    }
})

cxEmail.addEventListener("blur", function(e){
    const flashMessageEmail = document.querySelector("#email_invalido");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(!emailRegex.test(cxEmail.value)){
        flashMessageEmail.style.display = "block";
    }else{
        flashMessageEmail.style.display = "none";
    }
})

btnEnviar.addEventListener('click', function(e){
    const flashMessageSucesso = document.querySelector("#mensagem_sucesso");
    flashMessageSucesso.style.display = "block";
    e.preventDefault();
})