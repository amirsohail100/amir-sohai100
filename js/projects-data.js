/* ==========================================================================
   ALL PROJECTS LIVE HERE. Add, edit or delete objects in this list.
   Fields:
     id        unique slug used in the URL: project.html?id=<id>
     name      project name (shown on cards and used by search)
     type      "AI", "ML", "Web" ... (used by the filter chips and search)
     live      live demo URL ("" if none, the button is hidden)
     repo      source code URL ("" if none, the button is hidden)
     keywords  extra words people can search for (name is always searchable)
     top       true  -> also shown in "Top projects" on the Home page
     tag       small label above the title
     desc      short description (cards)
     features  bullet points shown on the project detail page
     tech      technology chips
     image     path to the project screenshot inside assets/ui/ (same path on every page)
               e.g. "assets/ui/quadra-credit-ledger.png". Leave "" to show a name placeholder.
     g         placeholder background gradient (shown until the image is added)
   ========================================================================== */
const PROJECTS = [
  {
    id: "quadra-credit-ledger", name: "Quadra Credit Ledger", type: "ML",
    live: "https://quadra-studio.onrender.com", repo: "https://github.com/amirsohail100/Quadra",
    keywords: ["loan", "credit", "risk", "fintech", "shap", "explainable", "underwriting", "default"],
    top: true, tag: "Fintech · Explainable AI",
    desc: "An underwriting desk for consumer loans. Takes an applicant's profile, loan request and bureau details and returns the default probability with a risk verdict and SHAP explanations.",
    features: [
      "Predicts the probability that an applicant will default",
      "Returns a clear high / low risk verdict",
      "SHAP explanations show why each verdict was given",
      "FastAPI backend and UI served from the same server, one command to run locally"
    ],
    tech: ["Python", "FastAPI", "SHAP", "ML"], image: "assets/ui/quadra-credit-ledger.png", g: "linear-gradient(135deg,#0f766e,#1d4ed8)"
  },
  {
    id: "personachat-vip-studio", name: "PersonaChat VIP Studio", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/PersonaChat-VIP-Studio",
    keywords: ["chatbot", "llm", "langchain", "mistral", "streamlit", "persona", "genai"],
    top: true, tag: "GenAI · Chat",
    desc: "A customizable Streamlit chat app powered by LangChain and Mistral AI. Chat with five VIP personas using dynamic system prompts and an optimized memory window.",
    features: [
      "Five switchable VIP personas",
      "Dynamic system prompts per persona",
      "Optimized memory window keeps conversations coherent while limiting context size",
      "Built with Streamlit, LangChain and Mistral AI"
    ],
    tech: ["Python", "Streamlit", "LangChain", "Mistral AI"], image: "assets/ui/personachat-vip-studio.png", g: "linear-gradient(135deg,#6d28d9,#db2777)"
  },
  {
    id: "tweetify-ai", name: "Tweetify AI", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/Tweetify-AI",
    keywords: ["content", "social media", "linkedin", "twitter", "instagram", "genai", "llm"],
    top: true, tag: "GenAI · Content",
    desc: "Converts long-form articles and blog posts into ready-to-publish LinkedIn, X (Twitter) and Instagram content in one click.",
    features: [
      "Turns long articles and blog posts into short social content",
      "Targets LinkedIn, X (Twitter) and Instagram",
      "Ready-to-publish output, no manual rewriting"
    ],
    tech: ["Python", "GenAI", "LLMs"], image: "assets/ui/tweetify-ai.png", g: "linear-gradient(135deg,#0369a1,#0891b2)"
  }
  /* Copy this block to add a project (keep the comma between objects):
  ,{
    id: "my-project", name: "My Project", type: "Web",
    live: "", repo: "", keywords: ["word1", "word2"],
    top: false, tag: "Category", desc: "One or two lines.", features: ["Point one"],
    tech: ["HTML", "CSS"], image: "assets/ui/personachat-vip-studio.png", g: "linear-gradient(135deg,#334155,#0f172a)"
  } */
];