// Banco de dados fake

const noticias = {
  1: {
    titulo: "TypeScript 6: o que muda para quem trabalha com APIs",
    texto: "No dia 11 de março de 2025, Anders Hejlsberg, arquiteto-chefe do TypeScript, anunciou um marco revolucionário para a linguagem: um <strong>TypeScript 10x mais rápido</strong>. Esse avanço promete transformar a experiência de desenvolvimento, especialmente para projetos de grande escala, onde o desempenho do TypeScript tem sido um desafio. O anúncio detalha os esforços para criar uma versão nativa do compilador TypeScript, que trará melhorias significativas em velocidade, uso de memória e eficiência.\
            <br><br><strong>O Problema Atual</strong><br>\
            TypeScript é amplamente amado por sua capacidade de melhorar a produtividade dos desenvolvedores, especialmente em grandes codebases. No entanto, à medida que os projetos crescem, o tempo de carregamento e verificação do TypeScript pode se tornar um gargalo. Desenvolvedores frequentemente enfrentam longos tempos de inicialização do editor e builds lentos, o que impacta diretamente a produtividade. Além disso, ferramentas modernas, como assistentes de IA, exigem respostas rápidas e acesso a grandes volumes de informações semânticas, algo que o TypeScript atual nem sempre consegue fornecer de forma eficiente.\
            <br><br><strong>A Solução: TypeScript Nativo</strong>\
            A equipe do TypeScript está trabalhando em uma <strong>versão nativa do compilador TypeScript</strong>, escrita em Go. Essa nova implementação promete reduzir drasticamente o tempo de build, melhorar a inicialização do editor e diminuir o uso de memória. <br><br>Os primeiros testes mostram resultados impressionantes:\
            <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•<strong>VS Code</strong>: Tempo de build reduzido de 77,8s para 7,5s (<strong>10,4x mais rápido</strong>).\
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•<strong>Playwright</strong>: De 11,1s para 1,1s (<strong>10,1x mais rápido</strong>).\
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•<strong>TypeORM</strong>: De 17,5s para 1,3s (<strong>13,5x mais rápido</strong>).\
            <br><br>Esses números são apenas o começo. A equipe espera que a maioria dos projetos veja melhorias na ordem de <strong>10x</strong> em velocidade de verificação e builds.\
            <br><br><strong>Benefícios para Editores</strong>\
            <br><br>A maior parte do tempo dos desenvolvedores é gasto em editores, e a performance nessa área é crítica. Com a nova implementação nativa, o tempo de carregamento de projetos grandes no editor será reduzido significativamente. Por exemplo, o tempo de carregamento do projeto <strong>VS Code</strong> no editor caiu de <strong>9,6s</strong> para <strong>1,2s</strong>, uma melhoria de <strong>8x</strong>. Além disso, operações como autocompletar, navegação de código e busca de referências serão muito mais rápidas.\
            <br><br><strong>Roadmap e Compatibilidade</strong>\
            equipe do TypeScript está planejando uma transição suave para a nova versão nativa. O TypeScript 6.x continuará sendo desenvolvido com base no código JavaScript atual, enquanto o TypeScript 7.0 será a primeira versão baseada na implementação nativa. A equipe garante que a compatibilidade com projetos existentes será mantida, e os desenvolvedores poderão migrar para a nova versão quando estiverem prontos.\
            <br><br><strong>Próximos Passos</strong>\
            Nos próximos meses, a equipe compartilhará mais detalhes sobre o desempenho, a nova API do compilador e a integração com o <strong>Language Server Protocol (LSP)</strong>. Além disso, uma sessão de <strong>AMA (Ask Me Anything)</strong> está marcada para o dia 13 de março no Discord da comunidade TypeScript, onde os desenvolvedores poderão tirar dúvidas e dar feedback.\
            <br><br><strong>Impacto no Ecossistema</strong>\
            Essa melhoria de desempenho não apenas beneficia desenvolvedores individuais, mas também abre portas para novas ferramentas e experiências de desenvolvimento. Com a capacidade de processar grandes volumes de dados semânticos em tempo real, o TypeScript nativo permitirá a criação de ferramentas de IA mais avançadas e integradas, elevando a produtividade a um novo patamar.\
            <br><br><strong>Conclusão</strong>\
            O anúncio do TypeScript 10x mais rápido é um marco emocionante para a comunidade de desenvolvimento. Com ganhos significativos em velocidade, eficiência e experiência do usuário, o TypeScript está se preparando para continuar sendo uma das linguagens mais poderosas e versáteis do mercado.\
            ",
    autor: "Redação",
    data: "há 2h",
    categoria: "<strong>Programação</strong>"
  },
  2: {
    titulo: "IA e Vibe Coding: como a programação está mudando",
    texto: "O <strong>vibe coding</strong> vem revolucionando o desenvolvimento de software. Em vez de escrever linhas de código manualmente, os profissionais descrevem ideias em linguagem natural e deixam a <strong>inteligência artificial</strong> gerar o código correspondente. Isso abre espaço para que qualquer pessoa, mesmo sem domínio avançado de programação, consiga criar protótipos de forma rápida.\
Esse movimento está ligado ao crescimento das <strong>plataformas low-code e no-code com IA</strong>, que permitem tanto a criação de aplicativos simples quanto o desenvolvimento de soluções SaaS completas, usadas comercialmente por empreendedores e empresas.<br><br>\
<strong>Principais ferramentas em destaque</strong><br><br>\
• n8n: automação visual de fluxos complexos com agentes de IA, permitindo arrastar e soltar elementos e integrar modelos de linguagem em várias etapas.\
• Cursor: editor inteligente que atualiza funções ou classes inteiras a partir de instruções em linguagem natural.\
• Base44: transforma descrições verbais em aplicações web completas em poucos minutos.\
• Skip: gera sites e apps apenas com prompts de texto, entregando páginas rápidas e com design profissional.\
• Claude Code: assistente da Anthropic que atua no terminal, ajudando a encontrar bugs, criar funcionalidades e corrigir falhas.\
• v0 (Vercel): converte ideias em código e interface, já com opção de publicação na própria infraestrutura.\
• DBExpert: cria esquemas de banco de dados completos a partir de prompts, respeitando restrições e relacionamentos.<br><br>\
<strong>Qualificação técnica ainda é essencial</strong><br><br>\
Apesar da praticidade, depender só da IA pode trazer problemas. <strong>Códigos automáticos costumam exigir ajustes estruturais</strong> e podem esconder bugs ou falhas de segurança. Por isso, desenvolvedores que entendem <strong>arquitetura, banco de dados, escalabilidade e segurança</strong> conseguem entregar aplicações mais robustas.\
Um exemplo claro é a <strong>modelagem de dados</strong>: ignorar esse aspecto pode comprometer a aplicação em cenários reais de carga. Já com ferramentas como o DBExpert, a IA auxilia nesse processo, mas o <strong>conhecimento humano garante que a solução seja confiável e escalável</strong>.<br><br>\
<strong>Comunidade e evolução no aprendizado</strong><br><br>\
Participar de comunidades e programas de mentoria também se mostra fundamental. <strong>Trocar experiências, discutir boas práticas e aprender com especialistas</strong> acelera a curva de aprendizado e ajuda a evitar erros comuns.\
Além disso, grupos organizados permitem acompanhar as tendências e evoluções mais recentes do mercado.<br><br>\
<strong>Em resumo:</strong> o vibe coding está tornando o desenvolvimento mais acessível e acelerado, mas <strong>quem alia IA com conhecimento técnico sólido e participação em comunidades</strong> consegue aproveitar todo o potencial dessa mudança, criando softwares <strong>seguros, profissionais e prontos para crescer no mercado</strong>.\
",
    autor: "Luis Gustavo",
    data: "há 5h",
    categoria: "Inteligência Artificial"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Monta o HTML da notícia escolhida
if (noticias[id]) { 
  const n = noticias[id];
  document.getElementById("conteudo").innerHTML = `
    <article>
      <h1>${n.titulo}</h1>
      <p><em>${n.categoria} · ${n.data} · <strong>Por</strong> ${n.autor}</em></p>
      <p>${n.texto}</p>
    </article>
  `;
} else {
  document.getElementById("conteudo").innerHTML = "<p>Notícia não encontrada.</p>";
}