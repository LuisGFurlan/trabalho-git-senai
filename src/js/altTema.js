document.addEventListener("DOMContentLoaded", () => {
    const btnAltTema = document.getElementById("alt-tema");
    const body = document.body;
  
    // Verifica o tema salvo no localStorage
    const temaSalvo = localStorage.getItem("tema");
    if(temaSalvo) {
      body.classList.toggle("tema_escuro", temaSalvo === "dark");
      btnAltTema.textContent = temaSalvo === "dark" ? "☀️" : "🌙";
      
    }
  
    // Alterna o tema ao clicar no botão
    btnAltTema.addEventListener("click", () => {
      const modoEscuro = body.classList.toggle("tema_escuro");
      btnAltTema.textContent = modoEscuro ? "☀️" : "🌙";
  
      // Salva o tema no localStorage
      localStorage.setItem("tema", modoEscuro ? "dark" : "light");
    });
  });