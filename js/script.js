/* Shared logic for all pages. Project data lives in projects-data.js */
const SKILLS = {
  "Languages": ["Python","C","C++","C#","JavaScript","HTML5","CSS3","PowerShell"],
  "AI / ML / Data Science": ["PyTorch","TensorFlow","Keras","scikit-learn","NumPy","Pandas","Matplotlib","Plotly","SHAP","MLflow","OpenCV","Power BI"],
  "GenAI & Agentic AI": ["LangChain","LangGraph","LLMs","AI Agents","Vector DBs","OpenAI API","Mistral AI","Streamlit"],
  "Backend & Frameworks": ["FastAPI","Flask","Node.js",".NET"],
  "Cloud, DevOps & CI/CD": ["AWS","Google Cloud","Docker","Kubernetes","GitHub Actions","GitLab CI","CI/CD"],
  "Version Control & Databases": ["Git","GitHub","GitLab","MySQL","MongoDB"],
  "Game Dev": ["Unity","Godot"]
};
const JOBS = [{ role: "Lead Developer", org: "Quadra", when: "Present", points: [
  "Lead development of Credit Ledger, a loan risk assessment platform that returns an applicant's probability of default and a clear high / low risk verdict.",
  "Built explainable predictions with SHAP so every verdict can be justified.",
  "Serve the FastAPI backend and the UI from one server, and host the platform live."] }];
const ROLES = ["Full-Stack AI Engineer", "GenAI & Agentic AI Builder", "ML / DL Developer", "Lead Developer @ Quadra"];
const ROOT = document.body.dataset.root || "";
/* Logos from the Simple Icons CDN: [hex colour, slug, optional fallback slug]. No entry = text only. */
const ICONS = {
  "Python":["4B8BBE","python"],"C":["A8B9CC","c"],"C++":["659AD2","cplusplus"],"C#":["A179DC","csharp"],"JavaScript":["F7DF1E","javascript"],"HTML5":["E34F26","html5"],"CSS3":["2965F1","css3","css"],"PowerShell":["5391FE","powershell"],
  "PyTorch":["EE4C2C","pytorch"],"TensorFlow":["FF6F00","tensorflow"],"Keras":["FF4B4B","keras"],"scikit-learn":["F7931E","scikitlearn"],"NumPy":["4DABCF","numpy"],"Pandas":["8F7BE8","pandas"],"Matplotlib":["3A8DC9","matplotlib"],"Plotly":["7A8CC2","plotly"],"MLflow":["0194E2","mlflow"],"OpenCV":["8C7BFF","opencv"],"Power BI":["F2C811","powerbi"],
  "LangChain":["1C9C8C","langchain"],"LangGraph":["1C9C8C","langgraph","langchain"],"OpenAI API":["FFFFFF","openai"],"Mistral AI":["FA520F","mistralai"],"Streamlit":["FF4B4B","streamlit"],
  "FastAPI":["009688","fastapi"],"Flask":["FFFFFF","flask"],"Node.js":["5FA04E","nodedotjs"],".NET":["8A6CFF","dotnet"],
  "AWS":["FF9900","amazonaws","amazonwebservices"],"Google Cloud":["4285F4","googlecloud"],"Docker":["2496ED","docker"],"Kubernetes":["326CE5","kubernetes"],"GitHub Actions":["2088FF","githubactions"],"GitLab CI":["FC6D26","gitlab"],"CI/CD":["2088FF","githubactions"],
  "Git":["F05032","git"],"GitHub":["FFFFFF","github"],"GitLab":["FC6D26","gitlab"],"MySQL":["5C9BD1","mysql"],"MongoDB":["47A248","mongodb"],"Unity":["FFFFFF","unity"],"Godot":["478CBF","godotengine"]
};
const logo = n => { const i = ICONS[n]; return i ? `<img class="lg" alt="" loading="lazy" src="https://cdn.simpleicons.org/${i[1]}/${i[0]}" data-n="${n}" data-i="1">` : ""; };
const skillChips = a => a.map(t => `<span class="chip">${logo(t)}${t}</span>`).join("");
const EMAIL = "amirsohail10@gmail.com";

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));
const chips = a => (a || []).map(t => `<span class="chip">${t}</span>`).join("");
const detail = p => `${ROOT}pages/project.html?id=${encodeURIComponent(p.id)}`;
const links = p => `<div class="links"><a class="btn ghost" href="${detail(p)}">Details</a>${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}${p.repo ? `<a class="btn ghost" href="${p.repo}" target="_blank" rel="noopener">Source code</a>` : ""}</div>`;
const ph = n => `<div class="ph">${n}</div>`;
const shotInner = p => `<div class="win"><div class="bar"><i></i><i></i><i></i></div>${p.image ? `<img src="${ROOT}${p.image}" alt="${p.name} screenshot" loading="lazy">` : ph(p.name)}</div>`;
const shot = p => `<a class="shot" href="${detail(p)}" style="--g:${p.g}" aria-label="${p.name}">${shotInner(p)}</a>`;
/* if a project image or logo fails to load: placeholder for images, text-only (or fallback slug) for logos */
document.addEventListener("error", e => {
  const t = e.target; if (!t.matches) return;
  if (t.matches(".shot img")) { const d = document.createElement("div"); d.className = "ph"; d.textContent = t.alt.replace(" screenshot", ""); t.replaceWith(d); }
  else if (t.matches(".lg")) { const l = ICONS[t.dataset.n], k = +t.dataset.i + 1; if (l && l[k]) { t.dataset.i = k; t.src = `https://cdn.simpleicons.org/${l[k]}/${l[0]}`; } else t.remove(); }
}, true);
const card = p => `<article class="card" data-id="${p.id}">${shot(p)}<div class="info"><span class="tag">${p.tag || p.type}</span><h4><a href="${detail(p)}">${p.name}</a></h4><p>${p.desc}</p><div class="chips">${chips(p.tech)}</div>${links(p)}</div></article>`;
const feat = (p, i) => `<article class="fp">${shot(p)}<div class="meta2"><div><span class="num">0${i + 1}</span><h4>${p.name}</h4><span class="tag">${p.tag || p.type}</span></div><div><p>${p.desc}</p><div class="chips">${chips(p.tech)}</div>${links(p)}</div></div></article>`;

/* ---- shared layout: nav + footer ---- */
const PAGES = [["index.html", "Home"], ["pages/about.html", "About"], ["pages/projects.html", "Projects"], ["pages/contact.html", "Contact"]];
const cur = location.pathname.split("/").pop() || "index.html";
const on = f => { const n = f.split("/").pop(); return n === cur || (cur === "project.html" && n === "projects.html") ? ' class="on"' : ""; };
$("#nav").outerHTML = `<header class="nav"><a class="logo" href="${ROOT}index.html">AS<span>.</span></a><nav>${PAGES.map(([f, n]) => `<a href="${ROOT}${f}"${on(f)}>${n}</a>`).join("")}<a href="${ROOT}pages/contact.html" class="btn sm">Hire me</a></nav></header>`;
$("#foot").outerHTML = `<footer>&copy; ${new Date().getFullYear()} Amir Sohail &middot; ${EMAIL}<br><a href="https://github.com/amirsohail100" target="_blank" rel="noopener">GitHub</a> &middot; <a href="https://linkedin.com/in/amir-sohail-ai" target="_blank" rel="noopener">LinkedIn</a> &middot; <a href="https://x.com/amirsohail2b" target="_blank" rel="noopener">X</a></footer>`;

/* ---- Home ---- */
if ($("#featured")) $("#featured").innerHTML = PROJECTS.filter(p => p.top).map(feat).join("");
if ($("#typed")) (function typer() {
  const el = $("#typed"); let r = 0, c = 0, del = false;
  (function tick() {
    const w = ROLES[r]; el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; }
    c += del ? -1 : 1; setTimeout(tick, del ? 35 : 70);
  })();
})();
if ($("#marquee")) { const m = Object.values(SKILLS).flat().map(t => `<span>${logo(t)}${t}</span>`).join(""); $("#marquee").innerHTML = m + m; }
$$("[data-n]").forEach(el => {
  const n = +el.dataset.n === 3 ? PROJECTS.filter(p => p.top).length : +el.dataset.n, s = el.dataset.s; let v = 0; const step = Math.max(1, Math.ceil(n / 60));
  const t = setInterval(() => { v = Math.min(n, v + step); el.textContent = v.toLocaleString() + (v === n ? s : ""); if (v === n) clearInterval(t); }, 25);
});

/* ---- About ---- */
if ($("#skillGrid")) $("#skillGrid").innerHTML = Object.entries(SKILLS).map(([k, v]) => `<div class="sk"><h4>${k}</h4><div class="chips">${skillChips(v)}</div></div>`).join("");
if ($("#timeline")) $("#timeline").innerHTML = JOBS.map(j => `<div class="job"><h4>${j.role} · ${j.org}</h4><div class="meta">${j.when}</div><ul>${j.points.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("");

/* ---- All projects: search + filter ---- */
if ($("#projectGrid")) {
  $("#projectGrid").innerHTML = PROJECTS.map(card).join("");
  const types = ["All", ...new Set(PROJECTS.map(p => p.type))], st = { type: "All" }, q = $("#q");
  $("#filters").innerHTML = types.map((c, i) => `<button class="${i ? "" : "on"}" data-c="${c}">${c}</button>`).join("");
  const apply = () => {
    const words = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean); let n = 0;
    $$(".card").forEach(c => {
      const p = byId[c.dataset.id];
      const hay = [p.name, p.type, p.tag, p.desc, ...(p.tech || []), ...(p.keywords || [])].join(" ").toLowerCase();
      const ok = (st.type === "All" || p.type === st.type) && words.every(w => hay.includes(w));
      c.classList.toggle("hide", !ok); n += ok;
    });
    $("#count").textContent = `${n} of ${PROJECTS.length} projects`;
    $("#empty").hidden = n > 0;
  };
  $("#filters").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; st.type = b.dataset.c; $$("#filters button").forEach(x => x.classList.toggle("on", x === b)); apply(); });
  q.addEventListener("input", apply);
  q.value = new URLSearchParams(location.search).get("q") || ""; apply();
}

/* ---- Project detail ---- */
if ($("#detail")) {
  const p = byId[new URLSearchParams(location.search).get("id")];
  if (!p) $("#detail").innerHTML = `<div class="wrap"><h1>Project not found</h1><p class="lead">That project doesn't exist. <a class="u" href="projects.html">See all projects</a></p></div>`;
  else {
    document.title = `${p.name} | Amir Sohail`;
    const more = PROJECTS.filter(x => x.id !== p.id).slice(0, 3);
    $("#detail").innerHTML = `<div class="wrap dwrap"><a class="back" href="projects.html">&larr; All projects</a>
      <div class="shot big" style="--g:${p.g}">${shotInner(p)}</div>
      <div class="meta2"><div><span class="tag">${p.tag || p.type}</span><h1>${p.name}</h1><div class="chips">${chips(p.tech)}</div></div>
      <div><p class="lead">${p.desc}</p>${(p.features || []).length ? `<h4 class="mini">Highlights</h4><ul class="feat">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>` : ""}
      <div class="links">${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}${p.repo ? `<a class="btn ghost" href="${p.repo}" target="_blank" rel="noopener">Source code</a>` : ""}</div></div></div>
      ${more.length ? `<h3 class="sec">More projects</h3><div class="grid">${more.map(card).join("")}</div>` : ""}</div>`;
  }
}

/* ---- Contact form (opens the visitor's email app) ---- */
if ($("#cform")) $("#cform").addEventListener("submit", e => {
  e.preventDefault(); const f = e.target;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry from " + f.name.value)}&body=${encodeURIComponent(f.msg.value + "\n\n" + f.name.value + " (" + f.email.value + ")")}`;
});

/* ---- Effects ---- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
$$(".reveal").forEach(el => io.observe(el));
addEventListener("scroll", () => { const h = document.documentElement; $("#progress").style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%"; }, { passive: true });
if (matchMedia("(pointer:fine)").matches) {
  const sp = document.createElement("div"); sp.className = "spot"; document.body.appendChild(sp);
  addEventListener("mousemove", e => { sp.style.left = e.clientX + "px"; sp.style.top = e.clientY + "px"; });
  $$(".fp,.card").forEach(c => {
    c.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`; });
    c.addEventListener("mouseleave", () => c.style.transform = "");
  });
}