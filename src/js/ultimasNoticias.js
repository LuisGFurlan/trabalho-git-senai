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