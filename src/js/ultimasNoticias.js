async function getNoticiasRSS() {
  const rssUrl = "https://g1.globo.com/rss/g1/tecnologia/";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  const container = document.getElementById("ultimas-noticias");
  data.items.slice(0, 5).forEach(n => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${n.link}" target="_blank">${n.title}</a>`;
    container.appendChild(li);
  });
}

getNoticiasRSS();
