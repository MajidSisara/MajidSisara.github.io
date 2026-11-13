/* Renders the page from the data/*.js files. You normally never need to edit this file. */
(function () {
  const $ = (id) => document.getElementById(id);
  const P = window.PROFILE || {};
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ICONS = {
    email: '<svg viewBox="0 0 24 24"><path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 2.8-8 5-8-5V17h16z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zm-6.8 9.6v3.9L12 20l6.8-3.5v-3.9L12 16.3z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.7 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.2c-.2-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.3 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM8.1 17.6H6.6V7.2h1.5zM7.4 6.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 1h4c3.7 0 5.4 2.7 5.4 5.2 0 2.8-2.2 5.2-5.4 5.2h-4zm1.5 1.3v7.7h2.4c3.4 0 4.2-2.6 4.2-3.9 0-2-1.3-3.8-4.2-3.8z"/></svg>',
    cv: '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6zm8 1.5V8h4.5zM8 12h10v1.5H8zm0 3h10v1.5H8zm0 3h7v1.5H8z"/></svg>'
  };
  const LABELS = { email: "Email", scholar: "Google Scholar", linkedin: "LinkedIn", github: "GitHub", orcid: "ORCID" };

  function socialLinks(includeCV) {
    const L = P.links || {};
    let html = Object.keys(LABELS).filter((k) => L[k]).map((k) => {
      const href = k === "email" ? "mailto:" + L[k] : L[k];
      return `<a href="${esc(href)}" target="_blank" rel="noopener">${ICONS[k]}${LABELS[k]}</a>`;
    }).join("");
    if (includeCV && P.cv) html += `<a href="${esc(P.cv)}" target="_blank">${ICONS.cv}CV</a>`;
    return html;
  }

  // ---------- hero / about ----------
  document.title = `${P.name} — ${P.title?.split("·").pop().trim() || "Researcher"}`;
  $("brand").textContent = P.name;
  $("hero-name").textContent = P.name;
  $("hero-title").textContent = P.title;
  $("hero-affil").innerHTML = esc(P.affiliation) +
    (P.advisor ? `<br>Advisor: <a href="${esc(P.advisor.url)}" target="_blank">${esc(P.advisor.name)}</a>` : "");
  $("hero-tagline").textContent = P.tagline;
  $("hero-photo").src = P.photo;
  $("hero-links").innerHTML = socialLinks(true);
  $("cv-link").href = P.cv || "#";
  $("about-text").innerHTML = (P.about || []).map((p) => `<p>${p}</p>`).join("");
  $("interests").innerHTML = (P.interests || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  $("education").innerHTML = (P.education || []).map((e) =>
    `<li><b>${esc(e.degree)}</b><span>${esc(e.school)} · ${esc(e.years)}</span></li>`).join("");
  $("news").innerHTML = (window.NEWS || []).map((n) =>
    `<li><span class="date">${esc(n.date)}</span> ${n.text}</li>`).join("");
  $("scholar-inline").href = P.links?.scholar || "#";

  // ---------- research ----------
  $("research-list").innerHTML = (window.RESEARCH || []).map((r) => `
    <article class="rcard">
      ${r.image ? `<img src="${esc(r.image)}" alt="${esc(r.title)}" data-zoom>` : ""}
      <div class="body">
        <h3>${esc(r.title)}</h3>
        <p>${r.summary}</p>
        ${r.links?.length ? `<div class="links">${r.links.map((l) => `<a href="${esc(l.url)}" target="_blank">${esc(l.label)} →</a>`).join("")}</div>` : ""}
        <div class="tags">${(r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`).join("");

  // ---------- publications ----------
  const PUBS = (window.PUBLICATIONS || []).slice().sort((a, b) => (b.year || 0) - (a.year || 0));
  const TYPES = { all: "All", selected: "★ Selected", journal: "Journal & proceedings", submitted: "Under review", preprint: "Preprints", conference: "Conference abstracts" };
  const BADGE = { journal: "Published", submitted: "Under review", preprint: "Preprint", conference: "Abstract" };
  const nameRe = window.MY_NAME_PATTERN;
  let current = "all";

  function count(t) { return t === "all" ? PUBS.length : t === "selected" ? PUBS.filter((p) => p.selected).length : PUBS.filter((p) => p.type === t).length; }

  function renderFilters() {
    $("pub-filters").innerHTML = Object.entries(TYPES).filter(([t]) => count(t) > 0).map(([t, label]) =>
      `<button data-t="${t}" class="${t === current ? "active" : ""}">${label}<span class="count">${count(t)}</span></button>`).join("");
    $("pub-filters").querySelectorAll("button").forEach((b) => b.onclick = () => { current = b.dataset.t; renderFilters(); renderPubs(); });
  }

  function renderPubs() {
    const list = PUBS.filter((p) => current === "all" || (current === "selected" ? p.selected : p.type === current));
    let html = "", lastYear = null;
    list.forEach((p) => {
      if (p.year !== lastYear) { html += `<div class="year">${esc(p.year)}</div>`; lastYear = p.year; }
      let authors = esc(p.authors);
      if (nameRe) authors = authors.replace(nameRe, (m) => `<b>${m}</b>`);
      html += `
        <div class="pub ${p.image ? "" : "nothumb"}">
          ${p.image ? `<img class="thumb" src="${esc(p.image)}" alt="" data-zoom>` : ""}
          <div>
            <div class="title"><span class="badge ${p.type}">${BADGE[p.type] || p.type}</span>${esc(p.title)}${p.selected ? '<span class="star">★</span>' : ""}</div>
            <div class="authors">${authors}</div>
            ${p.venue ? `<div class="venue">${esc(p.venue)}</div>` : ""}
            ${p.links?.length ? `<div class="links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank">${esc(l.label)}</a>`).join("")}</div>` : ""}
          </div>
        </div>`;
    });
    $("pub-list").innerHTML = html || '<p class="muted">Nothing here yet.</p>';
    bindZoom();
  }
  renderFilters(); renderPubs();

  // ---------- experience / teaching / talks ----------
  $("experience-list").innerHTML = (window.EXPERIENCE || []).map((e) => `
    <div class="titem">
      <div class="head"><b>${esc(e.role)}</b><span class="dates">${esc(e.dates)}</span></div>
      <div class="org">${esc(e.org)}${e.place ? " · " + esc(e.place) : ""}</div>
      ${e.points?.length ? `<ul>${e.points.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
  $("skills").innerHTML = (P.skills || []).map((s) => `
    <div class="card"><h4>${esc(s.group)}</h4><div class="tags">${s.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div></div>`).join("");
  $("teaching-list").innerHTML = (window.TEACHING || []).map((t) =>
    `<li><b>${esc(t.course)}</b><span class="meta">${esc(t.role)} · ${esc(t.org)} · ${esc(t.dates)}</span></li>`).join("");
  $("talks-list").innerHTML = (window.TALKS || []).map((t) =>
    `<li><b>${esc(t.title)}</b><span class="meta">${esc(t.where)} · ${esc(t.date)}</span></li>`).join("");
  $("service-list").innerHTML = (window.SERVICE || []).map((s) => `<li>${esc(s)}</li>`).join("");

  // ---------- contact / footer ----------
  $("contact-text").innerHTML = `I'm happy to talk about collaborations, neuroimaging methods, or research positions. The fastest way to reach me is by <a href="mailto:${esc(P.links?.email)}" style="color:#8fd3df">email</a>.`;
  $("contact-links").innerHTML = socialLinks(true);
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + P.name;
  $("updated").textContent = new Date(document.lastModified).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // ---------- image lightbox (click any figure to enlarge) ----------
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.innerHTML = "<img alt=''>";
  lb.onclick = () => lb.classList.remove("open");
  document.body.appendChild(lb);
  function bindZoom() {
    document.querySelectorAll("[data-zoom]").forEach((img) => img.onclick = () => { lb.firstChild.src = img.src; lb.classList.add("open"); });
  }
  bindZoom();
  document.querySelectorAll(".nav nav a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
})();
