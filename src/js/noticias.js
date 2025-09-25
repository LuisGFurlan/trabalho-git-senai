function validaFormulario(event){
  event.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value

  const regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/g;
  const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/g;
 
  if( regexNome.test(nome) == false){
      alert("Nome inválido!")
      return false;
  }
  
  if( regexEmail.test(email) == false){
      alert("Email inválido!")
      return false;
  }

  alert("Você foi cadastrado com sucesso!")

}
const noticias = {
  1: {
    titulo: "TypeScript 6: o que muda para quem trabalha com APIs",
    destaque: "No dia 11 de março de 2025, Anders Hejlsberg, arquiteto-chefe do TypeScript, anunciou um marco revolucionário para a linguagem: um TypeScript 10x mais rápido. Esse avanço promete transformar a experiência de desenvolvimento, especialmente para projetos de grande escala, onde o desempenho do TypeScript tem sido um desafio.",
    texto: "<div style='display: flex; justify-content: center;'><img style='height: 500px; width: 90%;'src='/src/img/img_noticia_typescript.jpeg' alt='Imagem logo Typescript'></div><br>No dia 11 de março de 2025, Anders Hejlsberg, arquiteto-chefe do TypeScript, anunciou um marco revolucionário para a linguagem: um <strong>TypeScript 10x mais rápido</strong>. Esse avanço promete transformar a experiência de desenvolvimento, especialmente para projetos de grande escala, onde o desempenho do TypeScript tem sido um desafio. O anúncio detalha os esforços para criar uma versão nativa do compilador TypeScript, que trará melhorias significativas em velocidade, uso de memória e eficiência.\
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
    destaque: "O vibe coding vem revolucionando o desenvolvimento de software. Em vez de escrever linhas de código manualmente, os profissionais descrevem ideias em linguagem natural e deixam a inteligência artificial gerar o código correspondente.",
    texto: "<div style='display: flex; justify-content: center;'><img style='height: 500px; width: 90%;'src='/src/img/img_noticia_vibe_coding.webp' alt='Imagem Vibe Code'></div><br>O <strong>vibe coding</strong> vem revolucionando o desenvolvimento de software. Em vez de escrever linhas de código manualmente, os profissionais descrevem ideias em linguagem natural e deixam a <strong>inteligência artificial</strong> gerar o código correspondente. Isso abre espaço para que qualquer pessoa, mesmo sem domínio avançado de programação, consiga criar protótipos de forma rápida.\
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
    autor: "Lucas",
    data: "há 5h",
    categoria: "Inteligência Artificial"
  },
  3:{
    titulo: "Java 25: a nova era da linguagem com foco em produtividade, IA e segurança",
    destaque: "A Oracle anunciou o lançamento do Java 25, a mais recente versão da linguagem de programação mais utilizada do mundo. Essa atualização traz 18 propostas de aprimoramento (JEPs) que reforçam o compromisso da empresa em evoluir continuamente a plataforma.",
    texto: "<div style='display: flex; justify-content: center;'><img style='height: 500px; width: 90%;'src='/src/img/img_java.png' alt='Imagem Java 25'></div><br>A <strong>Oracle anunciou o lançamento do Java 25</strong>, a mais recente versão da linguagem de programação mais utilizada do mundo. Essa atualização traz <strong>18 propostas de aprimoramento (JEPs)</strong> que reforçam o compromisso da empresa em evoluir continuamente a plataforma. O foco central do Java 25 está em <strong>aumentar a produtividade dos desenvolvedores, fortalecer a segurança, melhorar o desempenho</strong> e tornar a linguagem ainda mais amigável para iniciantes.<br>\
            Entre os pontos mais importantes, destacam-se os avanços em <strong>inteligência artificial (IA)</strong>, <strong>criptografia pós-quântica</strong> e <strong>concorrência estruturada</strong>. A nova versão oferece também <strong>arquivos de origem compactos</strong> e <strong>métodos principais de instância</strong>, que simplificam o aprendizado de programação e reduzem a complexidade de projetos menores, como scripts e utilitários. Esses recursos permitem que novos desenvolvedores te\nham um caminho de aprendizado mais suave, enquanto profissionais experientes podem usar o Java em tarefas rápidas do dia a dia.<br>\
            <br>Do lado técnico, o Java 25 introduz <strong>tipos primitivos em padrões, instanceof e switch</strong>, aumentando a expressividade da linguagem; <strong>declarações de importação de módulo</strong>, que simplificam a utilização de bibliotecas externas; e <strong>corpos de construtores flexíveis</strong>, que elevam a confiabilidade e segurança do código ao possibilitar inicializações mais controladas. Além disso, a plataforma inclui <strong>melhorias na API de vetores</strong>, útil para cálculos de alto desempenho e aplicações de IA, e no <strong>JDK Flight Recorder (JFR)</strong>, que agora captura informações mais detalhadas de tempo de CPU e gargalos de desempenho.<br>\
            <br>Outro aspecto fundamental é a <strong>segurança</strong>: o Java 25 traz <strong>suporte a criptografia resistente a ataques quânticos</strong>, um passo essencial para preparar aplicações do futuro. Além disso, a nova <strong>API para codificações PEM</strong> de objetos criptográficos facilita a integração com sistemas de autenticação e dispositivos de segurança, como chaves físicas.<br>\
            <br>Em relação à infraestrutura, a <strong>Oracle reforça o vínculo do Java com a Oracle Cloud Infrastructure (OCI)</strong>. Na nuvem, o Java 25 garante <strong>maior eficiência, economia de custos e desempenho otimizado</strong>, permitindo que empresas desenvolvam e executem aplicações de forma escalável e segura. Clientes também podem contar com o <strong>Oracle Java SE Universal Subscription</strong>, que oferece suporte de classe empresarial, incluindo pacotes de desempenho avançados e serviços de gerenciamento.<br>\
            <br>A nova versão terá <strong>suporte de longo prazo por pelo menos oito anos</strong>. Isso significa que as organizações terão <strong>atualizações trimestrais de desempenho e segurança até 2028</strong>, com <strong>manutenção garantida até 2033</strong>. Essa política dá liberdade para que empresas migrem seus sistemas no próprio ritmo, sem a pressão de mudanças rápidas.<br>\
            <br>Com o <strong>Java completando 30 anos</strong> de existência, a comunidade e especialistas destacam que a linguagem nunca esteve tão relevante. Professores, líderes técnicos e desenvolvedores apontam que os novos recursos equilibram inovação para novatos e robustez para grandes corporações. A <strong>cadência semestral de lançamentos</strong>, antes vista com ceticismo, mostrou-se altamente eficiente: cada versão chega com avanços concretos que tornam o Java mais moderno, seguro e adaptado às necessidades do mercado atual.<br>\
            <br>Assim, o <strong>Java 25</strong> marca um novo passo na evolução da linguagem, mantendo sua tradição de confiabilidade e ampliando seu alcance para aplicações que vão desde <strong>pequenos scripts utilitários até sistemas corporativos de larga escala integrados com IA e nuvem</strong>.\
            ",
    autor: "Luis Gustavo",
    data: "há 5h",
    categoria: "Inteligência Artificial"
  },
  4:{
    titulo: "Hangzhou: o “novo Vale do Silício” chinês",
    destaque: "Hangzhou, no sul da China, está se consolidando como um verdadeiro polo tecnológico e de inteligência artificial, sendo chamada de “novo Vale do Silício” chinês.",
    texto: "<div style='display: flex; justify-content: center;'><img style='height: 500px; width: 90%;'src='/src/img/img_noticia_hangzhou.webp' alt='Imagem aérea da cidade de Hangzhou - China'></div><br>Hangzhou, no sul da China, está se consolidando como um verdadeiro <strong>polo tecnológico e de inteligência artificial</strong>, sendo chamada de “novo Vale do Silício” chinês. A cidade é berço de gigantes como <strong>Alibaba, DeepSeek, NetEase</strong> e <strong>Hikvision</strong>, e atrai uma comunidade vibrante de programadores, empreendedores e jovens talentos universitários que buscam criar <strong>startups inovadoras</strong>.<br><br>\
            O bairro de <strong>Liangzhu</strong>, tradicional subúrbio de Hangzhou, tornou-se um ponto central para empreendedores. É comum ver reuniões informais em quintais e cafés, onde aspirantes a fundadores apresentam ideias, testam protótipos e trocam experiências. Eventos locais, organizados por ex-funcionários de grandes empresas, funcionam como <strong>hubs de networking</strong>, conectando programadores, investidores e especialistas em IA. Os participantes, conhecidos como “aldeões”, aproveitam a atmosfera criativa da cidade para desenvolver soluções em <strong>inteligência artificial</strong>, desde aplicativos de produtividade até companheiros digitais personalizados.<br><br>\
            Nos últimos anos, o <strong>governo local</strong> tem apoiado o crescimento tecnológico com subsídios, incentivos fiscais e facilitação de investimentos. Isso permitiu o surgimento de centenas de startups, atraindo profissionais de cidades como Pequim, Xangai e Shenzhen, que viajam para Hangzhou em busca de oportunidades. A cidade combina <strong>aluguel acessível, infraestrutura tecnológica</strong> e proximidade com grandes empresas para criar um ambiente favorável à inovação.<br><br>\
            <strong>Startups locais</strong> vêm ganhando atenção internacional. A <strong>DeepSeek</strong>, por exemplo, lançou sistemas de IA de alto desempenho com custos significativamente menores que os praticados no Vale do Silício. Outras empresas, como <strong>Game Science</strong>, conquistaram o público global com videogames de grande orçamento, enquanto a <strong>Unitree</strong> inovou com robôs que se apresentaram em eventos transmitidos nacionalmente. Além disso, startups como <strong>Rokid</strong> e <strong>Mindverse</strong> exploram aplicações de IA para dispositivos de consumo e assistentes pessoais, mostrando que Hangzhou não produz apenas softwares corporativos, mas também soluções inovadoras para o cotidiano.<br><br>\
            O ecossistema local se beneficia de universidades de destaque, como a <strong>Universidade Zhejiang</strong>, cujos formados se tornaram talentos altamente cobiçados pelas empresas de tecnologia chinesas. Muitos engenheiros aproveitam esse ambiente para planejar suas próprias startups, aguardando o fim de acordos de não concorrência firmados com grandes corporações. Esse ciclo de talento e oportunidade contribui para o crescimento de um <strong>cluster tecnológico altamente especializado e colaborativo</strong>.<br><br>\
            Apesar do dinamismo, existem desafios. Alguns empreendedores encontram dificuldades para atrair <strong>investimentos estrangeiros</strong> devido à política do governo e restrições de capital. Além disso, o acesso a <strong>chips avançados</strong>, essenciais para sistemas de IA, é limitado pelas sanções dos Estados Unidos, forçando empresas como <strong>Huawei</strong> e <strong>SMIC</strong> a desenvolver alternativas domésticas. Esse cenário cria um dilema estratégico: depender do governo e atender ao mercado interno ou buscar capital e expansão internacional.<br><br>\
            Outro conceito emergente é a <strong>“IA agêntica”</strong>, que busca criar sistemas capazes de agir de forma autônoma. Aplicações práticas já existem, como o <strong>All Time</strong>, um companheiro digital que interage com usuários de acordo com seu humor e personalidade, ou produtos da <strong>Mindverse</strong>, que ajudam na gestão da rotina pessoal e profissional. Esses projetos mostram que Hangzhou não só acompanha tendências globais de IA, como também lidera em <strong>inovação aplicada ao cotidiano</strong> das pessoas.<br><br>\
            O ambiente da cidade, com seus lagos, paisagens históricas e cultura rica, alimenta a <strong>criatividade e a colaboração</strong>. Os “aldeões” de Liangzhu promovem atividades comunitárias, como noites de cinema temáticas, que estimulam a troca de ideias e inspiram novos projetos. Essa combinação de <strong>apoio institucional, talento jovem</strong> e <strong>liberdade criativa</strong> cria um ecossistema único, onde a próxima grande revolução tecnológica chinesa pode emergir.<br><br>\
            Em resumo, <strong>Hangzhou tornou-se um laboratório vivo de inovação tecnológica</strong>, onde startups de IA e robótica crescem lado a lado com gigantes do setor, atraindo profissionais ambiciosos e consolidando-se como referência mundial em empreendedorismo e tecnologia. Entre oportunidades e desafios, a cidade demonstra que a China não apenas acompanha o ritmo do Vale do Silício, mas está construindo seu próprio caminho de liderança tecnológica.\
            ",
    autor: "Gustavo Tamanini",
    data: "há 9h",
    categoria: "Inovação Tecnológica | Inteligência Artificial"
  },
  5:{
    titulo: "Por que os data centers de inteligência artificial consomem tanta água",
    destaque: "No mundo moderno, a inteligência artificial (IA) se tornou um elemento central em diversos setores, desde saúde e finanças até entretenimento e logística. À medida que a tecnologia avança, a demanda por processamento de dados cresce exponencialmente, e com ela, os data centers, que funcionam como o cérebro dessas operações, consomem cada vez mais recursos.",
    texto: "<div style='display: flex; justify-content: center;'><img style='height: 500px; width: 90%;'src='/src/img/img_noticia_datacenters.webp' alt='Imagem datacenter'></div><br>No mundo moderno, a <strong>inteligência artificial (IA)</strong> se tornou um elemento central em diversos setores, desde saúde e finanças até entretenimento e logística. À medida que a tecnologia avança, a <strong>demanda por processamento de dados cresce exponencialmente</strong>, e com ela, os <strong>data centers</strong>, que funcionam como o cérebro dessas operações, consomem cada vez mais recursos. Entre esses recursos, a <strong>água surge como um insumo crítico</strong>, muitas vezes subestimado, mas essencial para o funcionamento e a sustentabilidade dessas infraestruturas.<br><br>\
            <strong>O papel da água nos data centers</strong>\
            Data centers abrigam <strong>servidores de alta performance</strong> que processam enormes volumes de dados. Esses equipamentos operam em níveis de capacidade extremos, gerando <strong>calor significativo</strong>. Sem controle térmico adequado, o superaquecimento pode comprometer a integridade dos sistemas, reduzir o desempenho e até causar falhas catastróficas. É nesse contexto que a <strong>água se torna vital</strong>, sendo utilizada nos sistemas de refrigeração, especialmente através de <strong>torres de resfriamento</strong>.\
            Nessas torres, a água <strong>absorve o calor dos servidores</strong> e é evaporada na atmosfera, dissipando energia térmica de forma eficiente. Esse processo não apenas mantém os equipamentos funcionando de maneira estável, mas também contribui para a <strong>eficiência energética</strong> do data center.<br><br>\
            <strong>Como a água é usada nos data centers</strong>\
            O consumo de água em data centers pode ser surpreendentemente alto. <strong>Sistemas modernos de refrigeração</strong> dependem de ciclos contínuos de água para remover o calor de CPUs, GPUs e outras unidades de processamento de IA. Alguns data centers de grande porte podem consumir <strong>milhões de litros de água por dia</strong>, dependendo da quantidade de servidores e da intensidade do processamento.\
            Além disso, os data centers têm explorado novas tecnologias de resfriamento, como:\
            • <strong>Reciclagem de água</strong>, que permite reutilizar o mesmo recurso em múltiplos ciclos de refrigeração.\
            • <strong>Uso de fontes não potáveis</strong>, reduzindo o impacto sobre o consumo de água tratada para fins humanos.\
            • <strong>Sistemas híbridos</strong>, combinando resfriamento líquido direto e ar ambiente, para otimizar o consumo.\
            Essas soluções buscam equilibrar <strong>eficiência energética</strong> e <strong>conservação hídrica</strong>, enfrentando o desafio de operar em locais onde a água é escassa.<br><br>\
            <strong>Desafios ambientais do consumo de água</strong>\
            O uso extensivo de água nos data centers levanta importantes questões ambientais. Em regiões com <strong>escassez hídrica</strong>, a competição entre necessidades industriais e abastecimento urbano pode gerar tensões significativas. Além disso, a água aquecida devolvida ao meio ambiente pode afetar <strong>ecossistemas locais</strong>, prejudicando rios, lagos e a fauna aquática.\
            Para mitigar esses impactos, as empresas têm adotado práticas de <strong>gestão ambiental robustas</strong>, que incluem:\
            • Planejamento de data centers em <strong>regiões de clima frio</strong>, reduzindo a necessidade de refrigeração líquida.\
            • Monitoramento contínuo do <strong>consumo de água</strong> e da temperatura dos recursos devolvidos à natureza.\
            • Investimento em tecnologias avançadas, como sistemas de resfriamento que utilizam <strong>materiais alternativos</strong> e processos de <strong>evaporatividade controlada</strong>.<br><br>\
            <strong>Estratégias para o futuro</strong>\
            O futuro do consumo de água em data centers de IA depende de <strong>inovação tecnológica</strong> e <strong>políticas públicas</strong>. Espera-se que os próximos anos tragam:\
            • <strong>Sistemas de resfriamento mais eficientes</strong>, demandando menos água ou utilizando ar ambiente em larga escala.\
            • <strong>Integração de IA</strong> para otimizar a refrigeração, ajustando dinamicamente os fluxos de água e energia de acordo com a carga de trabalho.\
            • <strong>Regulamentações mais rigorosas</strong>, pressionando empresas a adotar práticas sustentáveis e relatórios de consumo detalhados.\
            • <strong>Pesquisa colaborativa</strong> entre indústrias, governos e universidades para desenvolver soluções que equilibram crescimento tecnológico e preservação ambiental.\
            Além disso, novas <strong>arquiteturas de servidores e chips</strong> com menor geração de calor podem reduzir drasticamente a dependência de sistemas de resfriamento baseados em água. Startups e grandes empresas já exploram <strong>resfriamento por imersão líquida</strong>, onde servidores são mergulhados em líquidos especiais que dissipam calor de maneira eficiente sem evaporar grandes volumes de água.<br><br>\
            <strong>Equilibrando inovação e sustentabilidade</strong>\
            Embora o consumo de água continue sendo uma preocupação, há caminhos claros para conciliar <strong>expansão tecnológica</strong> com <strong>responsabilidade ambiental</strong>. Com planejamento adequado, <strong>inovação constante</strong> e adoção de <strong>práticas sustentáveis</strong>, os data centers podem continuar suportando o crescimento exponencial da IA sem comprometer recursos naturais vitais.\
            O desafio é global: garantir que a revolução da inteligência artificial não venha às custas do meio ambiente, tornando a <strong>eficiência hídrica tão estratégica quanto a eficiência energética</strong>. A próxima geração de data centers precisará ser <strong>resiliente, inteligente e sustentável</strong> — um equilíbrio entre <strong>inovação tecnológica</strong> e <strong>respeito ao planeta</strong>.\
            ",
    autor: "Hiron Novais",
    data: "há 2h",
    categoria: "Inteligência Artificial"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (noticias[id]) { 
  const n = noticias[id];
  document.getElementById("conteudo").innerHTML = `
    <article>
      <h1>${n.titulo}</h1>
      <p style="font-size: 90%";><em>${n.categoria} · ${n.data} · <strong>Por</strong> ${n.autor}</em></p>
      <p>${n.texto}</p>
    </article>
  `;
  let id_nova_materia
  id_nova_materia = id

  while(parseInt(id) == id_nova_materia){
    id_nova_materia = Math.floor(Math.random() * 5) + 1;
  }

 /* if ((id - 1) > 0) {
    id_nova_materia = parseInt(id) - 1
  }else{
    id_nova_materia = parseInt(id) + 1
  }*/
  const materia = noticias[id_nova_materia];
  document.getElementById("materia-destaque").innerHTML = `
    <h1 id="destaque">${materia.titulo}</h1>
    <p>${materia.destaque}</p>
    <a class="readmore" href="noticias.html?id=${id_nova_materia}">Ler reportagem</a>
  `
  
} else {
  document.getElementById("conteudo").innerHTML = "<p>Notícia não encontrada.</p>";
}