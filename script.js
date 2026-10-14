/* ====== EDIT YOUR CONTENT HERE ====== */
const SKILLS = {
  "Languages": ["Python","C","C++","C#","JavaScript","HTML5","CSS3","PowerShell"],
  "AI / ML / Data Science": ["PyTorch","TensorFlow","Keras","scikit-learn","NumPy","Pandas","Matplotlib","Plotly","SHAP","MLflow","OpenCV","Power BI"],
  "GenAI & Agentic AI": ["LangChain","LangGraph","LLMs","AI Agents","Vector DBs","OpenAI API","Mistral AI","Streamlit"],
  "Backend & Frameworks": ["FastAPI","Flask","Node.js",".NET"],
  "Cloud, DevOps & CI/CD": ["AWS","Google Cloud","Docker","Kubernetes","GitHub Actions","GitLab CI","CI/CD"],
  "Version Control & Databases": ["Git","GitHub","GitLab","MySQL","MongoDB"],
  "Game Dev": ["Unity","Godot"]
};
const JOBS = [{
  role: "Lead Developer", org: "Quadra", when: "Present",
  points: [
    "Lead development of Credit Ledger, a loan risk assessment platform that returns an applicant's probability of default and a clear high / low risk verdict.",
    "Built explainable predictions with SHAP so every verdict can be justified.",
    "Serve the FastAPI backend and the UI from one server, and host the platform live."
  ]
}];
const PROJECTS = [
  { top:true, cat:"ML", tag:"Fintech · Explainable AI", name:"Quadra Credit Ledger",
    desc:"An underwriting desk for consumer loans. Takes an applicant's profile, loan request and bureau details and returns the default probability with a risk verdict and SHAP explanations.",
    tech:["Python","FastAPI","SHAP","ML"], live:"https://quadra-studio.onrender.com", repo:"https://github.com/amirsohail100/Quadra",
    g:"linear-gradient(135deg,#0f766e,#1d4ed8)", ui:"quadra" },
  { top:true, cat:"AI", tag:"GenAI · Chat", name:"PersonaChat VIP Studio",
    desc:"A customizable Streamlit chat app powered by LangChain and Mistral AI. Chat with five VIP personas using dynamic system prompts and an optimized memory window.",
    tech:["Python","Streamlit","LangChain","Mistral AI"], repo:"https://github.com/amirsohail100/PersonaChat-VIP-Studio",
    g:"linear-gradient(135deg,#6d28d9,#db2777)", ui:"chat" },
  { top:true, cat:"AI", tag:"GenAI · Content", name:"Tweetify AI",
    desc:"Converts long-form articles and blog posts into ready-to-publish LinkedIn, X (Twitter) and Instagram content in one click.",
    tech:["Python","GenAI","LLMs"], repo:"https://github.com/amirsohail100/Tweetify-AI",
    g:"linear-gradient(135deg,#0369a1,#0891b2)", ui:"social" }
  /* Add more:
  ,{ top:false, cat:"Web", tag:"Category", name:"Project name", desc:"One or two lines.", tech:["HTML","CSS"], live:"", repo:"", g:"linear-gradient(135deg,#334155,#0f172a)", ui:"chat" } */
];
/* ===================================== */
const $ = s => document.querySelector(s);
const bar = '<div class="bar"><i></i><i></i><i></i></div>';
const UIS = {
  quadra: `<div class="win">${bar}<div class="body"><div class="gauge"><b>LOW RISK</b></div>
    <div class="row"><span>Income</span><u style="--w:78%"></u></div><div class="row"><span>Credit history</span><u style="--w:64%"></u></div><div class="row"><span>Loan amount</span><u style="--w:40%"></u></div></div></div>`,
  chat: `<div class="win">${bar}<div class="body"><div class="av"><i></i><i></i><i></i><i></i><i></i></div>
    <div class="bub">Pick a persona to start chatting</div><div class="bub me">Give me career advice</div><div class="bub">Sure, let's begin...</div></div></div>`,
  social: `<div class="win">${bar}<div class="body"><div class="row"><span>Article</span><u style="--w:100%"></u></div><div class="row"><span></span><u style="--w:70%"></u></div>
    <div class="pl"><em>LinkedIn</em><em>X</em><em>Instagram</em></div><div class="bub">Ready-to-post content generated</div></div></div>`
};
const chips = a => a.map(t => `<span class="chip">${t}</span>`).join("");
const links = p => `<div class="links">${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}${p.repo ? `<a class="btn ghost" href="${p.repo}" target="_blank" rel="noopener">Source code</a>` : ""}</div>`;
const shot = p => `<div class="shot" style="--g:${p.g}">${UIS[p.ui] || UIS.chat}</div>`;

$("#skillGrid").innerHTML = Object.entries(SKILLS).map(([k, v]) => `<div class="sk"><h4>${k}</h4><div class="chips">${chips(v)}</div></div>`).join("");
$("#timeline").innerHTML = JOBS.map(j => `<div class="job"><h4>${j.role} · ${j.org}</h4><div class="meta">${j.when}</div><ul>${j.points.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("");
$("#featured").innerHTML = PROJECTS.filter(p => p.top).map(p => `<article class="fp">${shot(p)}<div class="info"><span class="tag">${p.tag}</span><h4>${p.name}</h4><p>${p.desc}</p><div class="chips">${chips(p.tech)}</div>${links(p)}</div></article>`).join("");
$("#projectGrid").innerHTML = PROJECTS.map(p => `<article class="card" data-cat="${p.cat}">${shot(p)}<div class="info"><span class="tag">${p.tag}</span><h4>${p.name}</h4><p>${p.desc}</p><div class="chips">${chips(p.tech)}</div>${links(p)}</div></article>`).join("");

const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) => `<button class="${i ? "" : "on"}" data-c="${c}">${c}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x === b));
  document.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", b.dataset.c !== "All" && c.dataset.cat !== b.dataset.c));
});

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
document.querySelectorAll("[data-n]").forEach(el => {
  const n = +el.dataset.n, s = el.dataset.s; let v = 0; const step = Math.max(1, Math.ceil(n / 60));
  const t = setInterval(() => { v = Math.min(n, v + step); el.textContent = v.toLocaleString() + (v === n ? s : ""); if (v === n) clearInterval(t); }, 25);
});
$("#yr").textContent = new Date().getFullYear();