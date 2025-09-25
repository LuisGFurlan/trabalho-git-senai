(function(){
    const form = document.getElementById('form-sugestao');
    const textarea = document.getElementById('sugestao');
    const email = document.getElementById('email');
    const erro = document.getElementById('erro-form');
    const ok = document.getElementById('ok-form');
    const contador = document.getElementById('contador');
  
    const MAX = parseInt(textarea.getAttribute('maxlength'), 10) || 300;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    const atualizaContador = () => {
      const len = textarea.value.length;
      contador.textContent = len > MAX ? MAX : len;
    };
  
    textarea.addEventListener('input', atualizaContador);
    atualizaContador();
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      erro.textContent = '';
      ok.textContent = '';
  
      if(!textarea.value.trim()){
        erro.textContent = 'Digite sua sugestão antes de enviar.';
        textarea.focus();
        return;
      }
  
      if(textarea.value.length > MAX){
        erro.textContent = `Sua sugestão ultrapassou ${MAX} caracteres.`;
        textarea.focus();
        return;
      }
  
      if(!emailRegex.test(email.value.trim())){
        erro.textContent = 'E-mail inválido. Verifique e tente novamente.';
        email.focus();
        return;
      }
  
      ok.textContent = 'Sugestão enviada com sucesso! Obrigado pelo feedback.';
      form.reset();
      atualizaContador();
    });
  })();
  