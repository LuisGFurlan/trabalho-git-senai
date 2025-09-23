async function getNoticiasRSS() {
  const rssUrl = "https://g1.globo.com/rss/g1/tecnologia/";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  const container = document.getElementById("ultimas-noticias");

  // lista fake caso dê erro
  const fakeNoticias = [
    { title: "Novo chip revoluciona a inteligência artificial", link: "#" },
    { title: "Startup lança óculos de realidade aumentada acessível", link: "#" },
    { title: "Carros autônomos já circulam em 5 capitais brasileiras", link: "#" },
    { title: "Cientistas criam bateria que dura 10 vezes mais", link: "#" },
    { title: "Tecnologia 6G começa a ser testada em universidades", link: "#" },
  ];

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);

    const data = await res.json();

    data.items.slice(0, 5).forEach(n => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${n.link}" target="_blank">${n.title}</a>`;
      container.appendChild(li);
    });
  } catch (error) {
    console.warn("Erro ao buscar RSS, exibindo notícias fake:", error);

    fakeNoticias.forEach(n => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${n.link}" target="_blank">${n.title}</a>`;
      container.appendChild(li);
    });
  }
}

getNoticiasRSS();

// Validação e envio do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formContato');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');
  const mensagemInput = document.getElementById('mensagem');
  const mensagemSucesso = document.getElementById('mensagemSucesso'); // Novo: Para mostrar sucesso
  const erroNome = document.getElementById('erroNome');
  const erroEmail = document.getElementById('erroEmail');
  const erroTelefone = document.getElementById('erroTelefone');
  let erroMensagem = document.getElementById('erroMensagem');
  if (!erroMensagem) {
      erroMensagem = document.createElement('span');
      erroMensagem.className = 'erro';
      erroMensagem.id = 'erroMensagem';
      mensagemInput.parentNode.appendChild(erroMensagem);
  }
  // Máscara para telefone (formato brasileiro: (99) 99999-9999)
  telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove não dígitos
      if (value.length >= 11) {
          value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (value.length >= 7) {
          value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (value.length >= 2) {
          value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      }
      e.target.value = value;
  });
  // Função para limpar erros 
  function limparErros() {
    [erroNome, erroEmail, erroTelefone, erroMensagem].forEach(erro => {
        erro.textContent = '';
        erro.style.display = 'none';
    });
    // Resetar bordas dos inputs
    [nomeInput, emailInput, telefoneInput, mensagemInput].forEach(input => {
        input.style.borderColor = '';
    });
    if (mensagemSucesso) mensagemSucesso.style.display = 'none';
}
 // Função de validação genérica
 function validarCampo(input, erro, mensagemErro, validacao) {
  if (!validacao(input.value)) {
      erro.textContent = mensagemErro;
      erro.style.display = 'block';
      input.style.borderColor = '#dc2626';
      input.focus();
      return false;
  } else {
      erro.style.display = 'none';
      input.style.borderColor = '';
      return true;
  }
}
    // Validações específicas com regex 
    function validarNome(nome) {
        return nome.trim().length >= 2;
    }
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para email
        return regex.test(email.trim());
    }
    function validarTelefone(telefone) {
        const regex = /^\(\d{2}\)\s?\d{5}-\d{4}$/; // Regex para telefone BR (com ou sem espaço)
        return regex.test(telefone);
    }
    function validarMensagem(mensagem) {
        return mensagem.trim().length >= 10;
    }
    // Validação em tempo real (ao sair do campo) - Para UX melhor
    nomeInput.addEventListener('blur', () => validarCampo(nomeInput, erroNome, 'Nome deve ter pelo menos 2 caracteres.', validarNome));
    emailInput.addEventListener('blur', () => validarCampo(emailInput, erroEmail, 'E-mail inválido (ex: voce@exemplo.com).', validarEmail));
    telefoneInput.addEventListener('blur', () => validarCampo(telefoneInput, erroTelefone, 'Telefone deve estar no formato (99) 99999-9999.', validarTelefone));
    mensagemInput.addEventListener('blur', () => validarCampo(mensagemInput, erroMensagem, 'Mensagem deve ter pelo menos 10 caracteres.', validarMensagem));
    // Submit do form 
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      limparErros();
      let isValid = true;
      isValid &= validarCampo(nomeInput, erroNome, 'Nome deve ter pelo menos 2 caracteres.', validarNome);
      isValid &= validarCampo(emailInput, erroEmail, 'E-mail inválido (ex: voce@exemplo.com).', validarEmail);
      isValid &= validarCampo(telefoneInput, erroTelefone, 'Telefone deve estar no formato (99) 99999-9999.', validarTelefone);
      isValid &= validarCampo(mensagemInput, erroMensagem, 'Mensagem deve ter pelo menos 10 caracteres.', validarMensagem);
      if (isValid) {
          const dados = {
              nome: nomeInput.value,
              email: emailInput.value,
              telefone: telefoneInput.value,
              mensagem: mensagemInput.value
          };
          
          console.log('Dados enviados:', dados); // Para debug
          
          // Mostrar sucesso 
          if (mensagemSucesso) {
              mensagemSucesso.style.display = 'block';
              mensagemSucesso.scrollIntoView({ behavior: 'smooth' });
          } else {
              alert('Mensagem enviada com sucesso! Entraremos em contato em breve.'); // Fallback
          }
          
          form.reset();
      }
  });
});
