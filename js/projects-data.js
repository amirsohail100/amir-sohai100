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
    live: "https://quadra-studio.onrender.com", repo: "https://github.com/amirsohail100/Quadra-Studio",
    keywords: ["loan", "credit", "risk", "fintech", "shap", "explainable", "underwriting", "default", "quadra"],
    top: true, tag: "Fintech · Explainable AI",
    desc: "An underwriting desk for consumer loans. Takes an applicant's profile, loan request and bureau details and returns the default probability with a risk verdict and SHAP explanations.",
    features: ["Predicts the probability that an applicant will default", "Returns a clear high / low risk verdict", "SHAP explanations show why each verdict was given", "FastAPI backend and UI served from the same server, one command to run locally"],
    tech: ["Python", "FastAPI", "SHAP", "ML"],
    image: "assets/ui/quadra-credit-ledger.png", g: "linear-gradient(135deg,#0f766e,#1d4ed8)"
  },
  {
    id: "personachat-vip-studio", name: "PersonaChat VIP Studio", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/PersonaChat-VIP-Studio",
    keywords: ["chatbot", "llm", "langchain", "mistral", "streamlit", "persona", "genai"],
    top: true, tag: "GenAI · Chat",
    desc: "A customizable Streamlit chat app powered by LangChain and Mistral AI. Chat with five VIP personas using dynamic system prompts and an optimized memory window.",
    features: ["Five switchable VIP personas", "Dynamic system prompts per persona", "Optimized memory window keeps conversations coherent while limiting context size", "Built with Streamlit, LangChain and Mistral AI"],
    tech: ["Python", "Streamlit", "LangChain", "Mistral AI"],
    image: "assets/ui/personachat-vip-studio.png", g: "linear-gradient(135deg,#6d28d9,#db2777)"
  },
  {
    id: "tweetify-ai", name: "Tweetify AI", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/Tweetify-AI",
    keywords: ["content", "social media", "linkedin", "twitter", "instagram", "genai", "llm"],
    top: true, tag: "GenAI · Content",
    desc: "Converts long-form articles and blog posts into ready-to-publish LinkedIn, X (Twitter) and Instagram content in one click.",
    features: ["Turns long articles and blog posts into short social content", "Targets LinkedIn, X (Twitter) and Instagram", "Ready-to-publish output, no manual rewriting"],
    tech: ["Python", "GenAI", "LLMs"],
    image: "assets/ui/tweetify-ai.png", g: "linear-gradient(135deg,#0369a1,#0891b2)"
  },
  {
    id: "omnidesk-langgraph", name: "OmniDesk LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/OmniDesk-LangGraph",
    keywords: ["langgraph", "agent", "support", "ticket", "human in the loop", "workflow"],
    top: false, tag: "LangGraph · Support Agent",
    desc: "A LangGraph support-ticket agent combining sequential, parallel, conditional, iterative and human-in-the-loop workflows. It classifies and risk-scores tickets in parallel and can auto-resolve them.",
    features: [],
    tech: ["Python", "LangGraph"],
    image: "assets/ui/omnidesk-langgraph.png", g: "linear-gradient(135deg,#b45309,#dc2626)"
  },
  {
    id: "replydesk-langgraph", name: "ReplyDesk LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/Replydesk-Langgraph",
    keywords: ["langgraph", "support", "customer", "human in the loop", "agent"],
    top: false, tag: "LangGraph · Human-in-the-loop",
    desc: "A human-in-the-loop customer support assistant built with LangGraph. An LLM drafts replies in your chosen tone, the graph pauses for human approval or feedback, and rewrites up to 3 times.",
    features: [],
    tech: ["Python", "LangGraph", "LLMs"],
    image: "assets/ui/replydesk-langgraph.png", g: "linear-gradient(135deg,#047857,#0e7490)"
  },
  {
    id: "sentryscript-langgraph", name: "SentryScript LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/sentryscript-langgraph",
    keywords: ["langgraph", "parallel", "moderation", "toxicity", "copyright", "agent"],
    top: false, tag: "LangGraph · Parallel Pipeline",
    desc: "A parallel LangGraph pipeline that fans a script out to three independent AI checks (toxicity and hate speech, copyright and originality risk, cultural sensitivity) and then merges the results.",
    features: [],
    tech: ["Python", "LangGraph"],
    image: "assets/ui/sentryscript-langgraph.png", g: "linear-gradient(135deg,#4338ca,#7e22ce)"
  },
  {
    id: "scriptflow-langgraph", name: "ScriptFlow LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/ScriptFlow-LangGraph",
    keywords: ["langgraph", "script", "video", "hinglish", "translation", "agent"],
    top: false, tag: "LangGraph · Sequential Agent",
    desc: "A LangGraph-powered sequential AI agent that converts raw text into polished video scripts and translates the final output to Hinglish, served via FastAPI with a web UI.",
    features: [],
    tech: ["Python", "LangGraph", "FastAPI"],
    image: "assets/ui/scriptflow-langgraph.png", g: "linear-gradient(135deg,#be123c,#9333ea)"
  },
  {
    id: "postcraft-langgraph", name: "PostCraft LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/PostCraft-LangGraph",
    keywords: ["langgraph", "linkedin", "writer", "reviewer", "mistral", "groq", "tavily", "agent"],
    top: false, tag: "LangGraph · Writer-Reviewer",
    desc: "A LangGraph writer-reviewer pipeline that drafts LinkedIn posts with Mistral, optionally searches the web via Tavily for current context, then has a Groq-powered reviewer approve or reject.",
    features: [],
    tech: ["Python", "LangGraph", "Mistral AI", "Groq", "Tavily"],
    image: "assets/ui/postcraft-langgraph.png", g: "linear-gradient(135deg,#334155,#0f766e)"
  },
  {
    id: "campusflow-langgraph", name: "CampusFlow LangGraph", type: "AI",
    live: "", repo: "https://github.com/amirsohail100/CampusFlow-LangGraph",
    keywords: ["langgraph", "rag", "college", "faiss", "huggingface", "assistant", "agent"],
    top: false, tag: "LangGraph · RAG",
    desc: "A LangGraph-powered college assistant that classifies student queries and answers academics or fee questions using RAG over official college PDFs (FAISS and HuggingFace embeddings).",
    features: [],
    tech: ["Python", "LangGraph", "FAISS", "HuggingFace", "RAG"],
    image: "assets/ui/campusflow-langgraph.png", g: "linear-gradient(135deg,#0f766e,#1d4ed8)"
  },
  {
    id: "credit-risk-assessment-shap", name: "Credit Risk Assessment using SHAP", type: "ML",
    live: "", repo: "https://github.com/amirsohail100/Credit_Risk_Assesment_Using_SHAP",
    keywords: ["credit", "risk", "shap", "explainable", "notebook", "loan"],
    top: false, tag: "Machine Learning · Explainable AI",
    desc: "Credit risk assessment with SHAP explainability, built in a Jupyter Notebook.",
    features: [],
    tech: ["Python", "SHAP", "Jupyter"],
    image: "assets/ui/credit-risk-assessment-shap.png", g: "linear-gradient(135deg,#6d28d9,#db2777)"
  },
  {
    id: "gnn-gcn-cora-classification", name: "GCN Cora Citation Network Classification", type: "ML",
    live: "", repo: "https://github.com/amirsohail100/DL_GNN_GCN_Cora_Citation_Network_Classification",
    keywords: ["gnn", "gcn", "graph", "cora", "citation", "deep learning", "notebook"],
    top: false, tag: "Deep Learning · Graph Neural Network",
    desc: "Node classification on the Cora citation network using a Graph Convolutional Network (GCN), built in a Jupyter Notebook.",
    features: [],
    tech: ["Python", "GNN", "GCN", "Jupyter"],
    image: "assets/ui/gnn-gcn-cora-classification.png", g: "linear-gradient(135deg,#0369a1,#0891b2)"
  },
  {
    id: "notosan-smooth-scroll-parallax", name: "Notosan Smooth Scroll Parallax", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/Notosan-smooth-scroll-parallax",
    keywords: ["parallax", "scroll", "animation", "svg", "website"],
    top: false, tag: "Web · Parallax",
    desc: "A cinematic, scroll-driven parallax website built with vanilla HTML, CSS and JavaScript, with procedurally generated SVG scenery, layered depth effects and animated waterfalls and wildlife.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/notosan-smooth-scroll-parallax.png", g: "linear-gradient(135deg,#b45309,#dc2626)"
  },
  {
    id: "vaultkey-otp-verification-ui", name: "VaultKey OTP Verification UI", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/VaultKey-Animated-OTP-Verification-UI",
    keywords: ["otp", "verification", "animation", "ui", "input"],
    top: false, tag: "Web · UI Component",
    desc: "A lightweight, animated OTP verification interface built with pure HTML, CSS and JavaScript, with auto-advancing code inputs, paste support, a live progress ring and particle effects.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/vaultkey-otp-verification-ui.png", g: "linear-gradient(135deg,#047857,#0e7490)"
  },
  {
    id: "apiverse-free-apis-directory", name: "APIVerse Free APIs Directory", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/APIVerse---Free-APIs-Directory",
    keywords: ["api", "directory", "glassmorphism", "3d", "search", "filter"],
    top: false, tag: "Web · Directory Platform",
    desc: "A modern, interactive 3D glassmorphic directory platform for discovering free, paid and generative AI APIs, with real-time search, category filtering and direct developer portal links.",
    features: [],
    tech: ["JavaScript", "HTML", "CSS"],
    image: "assets/ui/apiverse-free-apis-directory.png", g: "linear-gradient(135deg,#4338ca,#7e22ce)"
  },
  {
    id: "currency-converter", name: "Currency Converter", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/Currency-Converter",
    keywords: ["currency", "converter", "exchange", "glassmorphism", "dark mode"],
    top: false, tag: "Web · Utility",
    desc: "A sleek, real-time currency converter with a frosted glassmorphism UI, continuous money rain animations, dynamic exchange rate updates, custom dropdown styling and a dark/light theme switch.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/currency-converter.png", g: "linear-gradient(135deg,#be123c,#9333ea)"
  },
  {
    id: "expense-management", name: "Expense Management", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/Expensive-Management",
    keywords: ["expense", "cli", "scaffold", "chart", "glassmorphism", "dashboard"],
    top: false, tag: "Web · CLI Tool",
    desc: "A premium, zero-gravity CLI tool that instantly scaffolds a visually stunning Expense Management web app, with custom glassmorphism, responsive light/dark themes and interactive Chart.js widgets.",
    features: [],
    tech: ["JavaScript", "Chart.js", "CLI"],
    image: "assets/ui/expense-management.png", g: "linear-gradient(135deg,#334155,#0f766e)"
  },
  {
    id: "html-css-js-calculator", name: "HTML CSS JS Calculator", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/MY_HTML_CSS_JS_Calculator",
    keywords: ["calculator", "utility"],
    top: false, tag: "Web · Utility",
    desc: "A calculator built with HTML, CSS and JavaScript.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/html-css-js-calculator.png", g: "linear-gradient(135deg,#0f766e,#1d4ed8)"
  },
  {
    id: "streamlit-calculator", name: "Streamlit Calculator", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/My-Streamlit-Calculator",
    keywords: ["calculator", "streamlit", "python"],
    top: false, tag: "Python · Streamlit App",
    desc: "A calculator app built with Python and Streamlit.",
    features: [],
    tech: ["Python", "Streamlit"],
    image: "assets/ui/streamlit-calculator.png", g: "linear-gradient(135deg,#6d28d9,#db2777)"
  },
  {
    id: "codeflow-live", name: "CodeFlow Live", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/CodeFlow-Live",
    keywords: ["codeflow", "live", "javascript"],
    top: false, tag: "Web · JavaScript App",
    desc: "A JavaScript web project.",
    features: [],
    tech: ["JavaScript"],
    image: "assets/ui/codeflow-live.png", g: "linear-gradient(135deg,#0369a1,#0891b2)"
  },
  {
    id: "discord-invite", name: "Discord Invite", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/Discord-invite",
    keywords: ["discord", "invite", "community", "landing page"],
    top: false, tag: "Web · Landing Page",
    desc: "A Discord invite page built with HTML and CSS.",
    features: [],
    tech: ["HTML", "CSS"],
    image: "assets/ui/discord-invite.png", g: "linear-gradient(135deg,#b45309,#dc2626)"
  },
  {
    id: "todo-list-cli-tool", name: "Todo List", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/MY_TODO_List-in-use-agy-CLI-tool",
    keywords: ["todo", "tasks", "cli", "utility"],
    top: false, tag: "Web · Utility",
    desc: "A to-do list app built with HTML and CSS and created with a CLI tool.",
    features: [],
    tech: ["HTML", "CSS", "CLI"],
    image: "assets/ui/todo-list-cli-tool.png", g: "linear-gradient(135deg,#047857,#0e7490)"
  },
  {
    id: "virtual-computer", name: "Virtual Computer", type: "Web",
    live: "", repo: "https://github.com/amirsohail100/Virtual-Computer",
    keywords: ["virtual", "computer", "desktop", "os"],
    top: false, tag: "Web · JavaScript App",
    desc: "A virtual computer project built with JavaScript.",
    features: [],
    tech: ["JavaScript"],
    image: "assets/ui/virtual-computer.png", g: "linear-gradient(135deg,#4338ca,#7e22ce)"
  },
  {
    id: "commits-bot", name: "Commits Bot", type: "Tool",
    live: "", repo: "https://github.com/amirsohail100/Commits_bot",
    keywords: ["bot", "commits", "automation", "github"],
    top: false, tag: "Python · Automation",
    desc: "A Python bot for working with commits.",
    features: [],
    tech: ["Python"],
    image: "assets/ui/commits-bot.png", g: "linear-gradient(135deg,#be123c,#9333ea)"
  },
  {
    id: "catch-the-square-hd", name: "Catch the Square HD Edition", type: "Game",
    live: "", repo: "https://github.com/amirsohail100/Catch-the-Square---HD-Edition",
    keywords: ["game", "catch", "square", "arcade"],
    top: false, tag: "Game · JavaScript",
    desc: "A catch-the-square game, HD edition, built with JavaScript.",
    features: [],
    tech: ["JavaScript", "HTML", "CSS"],
    image: "assets/ui/catch-the-square-hd.png", g: "linear-gradient(135deg,#334155,#0f766e)"
  },
  {
    id: "dots-and-boxes", name: "Dots and Boxes", type: "Game",
    live: "", repo: "https://github.com/amirsohail100/Dots-and-Boxes",
    keywords: ["game", "dots", "boxes", "grid", "scoreboard"],
    top: false, tag: "Game · Multiplayer Grid",
    desc: "An interactive Dots and Boxes grid game built with HTML, CSS and JavaScript, with a dynamic scoreboard and real-time turn tracking. Currently under active development.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/dots-and-boxes.png", g: "linear-gradient(135deg,#0f766e,#1d4ed8)"
  },
  {
    id: "memory-matrix-game", name: "Memory Matrix Game", type: "Game",
    live: "", repo: "https://github.com/amirsohail100/Memory_Matrix_Game",
    keywords: ["game", "memory", "matrix", "puzzle"],
    top: false, tag: "Game · Memory",
    desc: "A memory matrix game built with JavaScript.",
    features: [],
    tech: ["JavaScript", "HTML", "CSS"],
    image: "assets/ui/memory-matrix-game.png", g: "linear-gradient(135deg,#6d28d9,#db2777)"
  },
  {
    id: "rock-paper-scissors-3d", name: "3D Rock Paper Scissors", type: "Game",
    live: "", repo: "https://github.com/amirsohail100/Rock-Paper-Scissors-Game",
    keywords: ["game", "rock paper scissors", "3d", "confetti", "dark mode"],
    top: false, tag: "Game · 3D",
    desc: "An engaging 3D Rock Paper Scissors game built with HTML, CSS and JavaScript, with real-time scoreboards, dynamic battle arenas, victory confetti and a dark/light mode toggle.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/rock-paper-scissors-3d.png", g: "linear-gradient(135deg,#0369a1,#0891b2)"
  },
  {
    id: "tic-tac-toe-3d", name: "3D Tic-Tac-Toe", type: "Game",
    live: "", repo: "https://github.com/amirsohail100/Tic-Tac-Toe",
    keywords: ["game", "tic tac toe", "neon", "glassmorphism", "two player"],
    top: false, tag: "Game · Neon Glassmorphism",
    desc: "A classic 3D interactive Tic-Tac-Toe game built with HTML, CSS and JavaScript, with a vibrant neon glassmorphism UI, tactile buttons, floating background animations and local two-player support.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/ui/tic-tac-toe-3d.png", g: "linear-gradient(135deg,#b45309,#dc2626)"
  }
];