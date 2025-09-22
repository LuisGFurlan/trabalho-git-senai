async function getNoticiasRSS() {
    const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://g1.globo.com/rss/g1/tecnologia/");
    const res = await fetch(url);
    const data = await res.json();
  
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "application/xml");
    const items = [...xml.querySelectorAll("item")].slice(0, 5); // pega só 5 últimas
  
    return items.map(item => ({
      titulo: item.querySelector("title")?.textContent,
      link: item.querySelector("link")?.textContent,
    }));
  }
  
  getNoticiasRSS().then(noticias => {
    const container = document.getElementById("ultimas-noticias");
    noticias.forEach(n => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${n.link}" target="_blank">${n.titulo}</a>`;
      container.appendChild(li);
    });
  });
  