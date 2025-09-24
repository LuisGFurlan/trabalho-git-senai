const btnEnviar = document.querySelector("#btn_enviar");

const cxNome = document.querySelector("#nome");
const cxEmail = document.querySelector("#email");

const flashMessageNome = document.querySelector("#nome_vazio");
const flashMessageEmail = document.querySelector("#email_invalido");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

cxNome.addEventListener("blur", function(e){
    flashMessageNome.style.display = !cxNome.value == "" ? "none" : "block";
})

cxEmail.addEventListener("blur", function(e){ 
    
    flashMessageEmail.style.display = emailRegex.test(cxEmail.value) ? "none" : "block";
})

btnEnviar.addEventListener('click', function(e){
    if(cxNome.value != "" && emailRegex.test(cxEmail.value)){
        const flashMessageSucesso = document.querySelector("#mensagem_sucesso");
        flashMessageSucesso.style.display = "block";
        setTimeout(() => {
            flashMessageSucesso.style.display = "none";
        }, 5000)
        e.preventDefault();
    }else{
        const flashMessageErro = document.querySelector("#mensagem_erro");
        flashMessageErro.style.display = "block";
        setTimeout(() => {
            flashMessageErro.style.display = "none";
        }, 3000)
        e.preventDefault();
    }
})