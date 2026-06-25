// CONTENT SYNC — June 2026
// Updated to match latest resume ground truth:
// - 6 projects (added Jot, Ambar Aerobics; updated existing)
// - 2 experience entries (added Ambar Aerobics Fitness)
// - Updated skills across all categories for both modes
// - Updated certifications
// - Updated summaries and about text
// - Updated contact email to personal
// - Updated stats for 6 projects

export const resumeContent = {
  shared: {
    name: "Harsh Bhatt",
    monogram: "HB",
    phone: "+91 8169151287",
    email: "harsh31bhatt@gmail.com",
    linkedin: "linkedin.com/in/harshbhattt",
    linkedinUrl: "https://linkedin.com/in/harshbhattt",
    github: "github.com/LordBhattt",
    githubUrl: "https://github.com/LordBhattt",
    subtitle: "HARSH BHATT · COMPUTER ENGINEERING · SPIT MUMBAI · 2027",
    degree: "B.Tech Computer Engineering",
    minor: "Financial & Strategic Management",
    status: "National hackathon finalist",
    education: [
      {
        institution: "Sardar Patel Institute of Technology (SPIT)",
        location: "Mumbai, India",
        degree: "B.Tech in Computer Engineering; Minor in Financial & Strategic Management",
        year: "Expected 2027"
      },
      {
        institution: "Prakash College of Commerce & Science",
        location: "Mumbai, India",
        degree: "Higher Secondary Certificate (HSC)",
        year: "2023"
      }
    ],
    experience: [
      {
        company: "Ambar Aerobics Fitness",
        website: "ambaraerobicsfitness.com",
        location: "Mumbai, India",
        role: "Freelance Web Developer",
        period: "Jan 2026 – Feb 2026",
        dates: "JAN 2026 — FEB 2026",
        summary: "Freelance web developer for a 16-branch Mumbai fitness institute; built a 5-page responsive website from scratch.",
        bullets: [
          "Built a 5-page responsive website using HTML, CSS, and JavaScript for a 16-branch Mumbai fitness institute; achieved sub-2s load times and a 96/100 PageSpeed score.",
          "Integrated WhatsApp Business API for lead capture; client reported 40% increase in inbound leads within 60 days; JustDial listing advice drove a further 25% uplift in monthly enquiries."
        ],
        certificate: {
          label: "[Certificate] ↗",
          href: "https://drive.google.com/drive/folders/1N4tkYgLFdcq0XD55vxiMN402S8WKSC72?usp=drive_link"
        }
      },
      {
        company: "Seed Global Education",
        location: "Mumbai, India",
        role: "Marketing Intern",
        period: "Dec 2024 – Mar 2025",
        dates: "DEC 2024 — MAR 2025",
        summary: "Sole marketing intern overseeing HubSpot CRM pipeline across 500+ leads and campaign funnels.",
        bullets: [
          "Sole marketing intern managing HubSpot CRM pipeline across 500+ leads; built automated lead-tracking workflows and campaign funnel dashboards that reduced manual reporting time by 40%.",
          "Analysed campaign funnel data to identify drop-off stages; recommended targeting adjustments that improved qualified lead throughput by 30%; delivered monthly data-backed analytics reports to stakeholders."
        ],
        certificate: {
          label: "[Certificate] ↗",
          href: "https://drive.google.com/drive/folders/1hV1FtZca9FrfDHPl73_QYFLtMvuBYf-r?usp=drive_link"
        }
      }
    ],
    competitions: [
      {
        rank: "01",
        title: "National Finalist",
        org: "Meta × PyTorch × HuggingFace × Scaler OpenEnv Hackathon, Bangalore",
        year: "2026"
      },
      {
        rank: "02",
        title: "National Finalist",
        org: "Finigma, IIM Bangalore, Banking Simulation",
        year: "2025"
      },
      {
        rank: "03",
        title: "Winner",
        org: "Stratos, SPCG × E-Cell SPIT Case Study Competition",
        year: "2025"
      }
    ],
    leadership: [
      {
        key: "finance-head",
        header: "AUG 2025 — PRESENT",
        role: "Finance Head",
        title: "Finance Head",
        org: "Sardar Patel Consulting Group (SPCG)",
        period: "Aug 2025 – Present",
        descriptor: "Finance & Strategy",
        bullet: "Built automated budget-tracking dashboards in Excel and SQL; optimised fund allocation across 5+ concurrent consulting engagements.",
        variants: {
          tech: {
            body: "Built automated budget-tracking dashboards in Excel and SQL.",
            bullets: [
              "Built automated budget-tracking dashboards in Excel and SQL; optimised fund allocation across 5+ concurrent consulting engagements."
            ]
          },
          nonTech: {
            body: "Built automated budget-tracking dashboards in Excel and SQL.",
            bullets: [
              "Built automated budget-tracking dashboards in Excel and SQL; optimised fund allocation across 5+ concurrent consulting engagements."
            ]
          }
        }
      },
      {
        key: "treasurer",
        header: "AUG 2024 — JUL 2025",
        role: "Treasurer",
        title: "Treasurer",
        org: "Rotaract Club of SPIT",
        period: "Aug 2024 – Jul 2025",
        descriptor: "Club Operations & Finance",
        bullet: "Managed finances across 15+ events; maintained audit-ready reconciliation records and coordinated vendor payments.",
        variants: {
          tech: {
            body: "Managed finances across 15+ events.",
            bullets: [
              "Managed finances across 15+ events; maintained audit-ready reconciliation records and coordinated vendor payments."
            ]
          },
          nonTech: {
            body: "Managed finances across 15+ events.",
            bullets: [
              "Managed finances across 15+ events; maintained audit-ready reconciliation records and coordinated vendor payments."
            ]
          }
        }
      },
      {
        key: "branch-leader",
        header: "2025",
        role: "Branch Leader",
        title: "Branch Leader",
        org: "General Championship, SPIT",
        period: "2025",
        descriptor: "Leadership & Competition",
        badge: "\uD83C\uDFC6 WON GENERAL CHAMPIONSHIP, SPIT 2025",
        bullet: null,
        variants: {
          tech: {
            body: "Led the Computer Engineering branch across sports, technical, and cultural events \u2014 the branch won the General Championship trophy that year.",
            bullets: []
          },
          nonTech: {
            body: "Led the Computer Engineering branch across sports, technical, and cultural events \u2014 the branch won the General Championship trophy that year.",
            bullets: []
          }
        }
      }
    ],
    leadershipOrder: {
      tech: ["branch-leader", "finance-head", "treasurer"],
      nonTech: ["finance-head", "treasurer", "branch-leader"]
    },
    stats: [
      { value: 72000, suffix: "+", label: "Competed Against" },
      { value: 6, suffix: "", label: "Independent Projects" },
      { value: 8, suffix: "", label: "Microservices Architected" },
      { value: 8, suffix: "", label: "Live Data Sources" },
      { value: 1000, suffix: "", label: "Simulation Paths" },
      { value: 10, suffix: "", label: "RL Action Types" },
      { value: 8, suffix: "", label: "Ride States Engineered" },
      { value: 10, suffix: "", label: "Macro Scenarios Stress-Tested" },
      { value: 500, suffix: "+", label: "CRM Leads Managed" },
      { value: 40, suffix: "%", label: "Reporting Time Reduced" }
    ],
    about: {
      profile: {
        rows: [
          { label: "Name", value: "Harsh Bhatt" },
          { label: "Degree", value: "B.Tech CE, SPIT — Expected 2027" },
          { label: "Minor", value: "Financial & Strategic Management" },
          { label: "Location", value: "Mumbai, India" },
          { label: "Contact", value: "harsh31bhatt@gmail.com", href: "mailto:harsh31bhatt@gmail.com" },
          { label: "GitHub", value: "GitHub", href: "https://github.com/LordBhattt" },
          { label: "LinkedIn", value: "LinkedIn", href: "https://linkedin.com/in/harshbhattt" }
        ]
      }
    },
    profile: {
      cards: {
        education: { label: "Education", value: "SPIT B.Tech CE + Minor, Expected 2027" },
        schooling: { label: "Schooling", value: "Prakash College HSC, 2023" },
        highlight: { label: "Highlight", value: "National hackathon finalist, 72,000+ participants" },
        roles: { label: "Roles", value: "Finance Head SPCG · Treasurer Rotaract · Branch Leader GC" },
        wins: { label: "Wins", value: "Hackathon Finalist (2026) · Finigma Finalist (2025) · Stratos Winner (2025)" }
      }
    },
    nav: [
      { label: "ABOUT", href: "#about" },
      { label: "EXPERIENCE", href: "#experience" },
      { label: "PROJECTS", href: "#projects" },
      { label: "SKILLS", href: "#arsenal" },
      { label: "COMPETITIONS", href: "#competitions" },
      { label: "LEADERSHIP", href: "#leadership" },
      { label: "CONTACT", href: "#contact" }
    ]
  },

  tech: {
    headline: "Builder across quant finance, RL, and full-stack systems.",
    heroHeadline: "WHERE CODE MEETS SYSTEMS",
    summary: "B.Tech Computer Engineering student at SPIT (Expected 2027) with a minor in Financial and Strategic Management. National hackathon finalist (72,000+ participants), full-stack ML engineer, and Finance Head at SPCG. Proficient in Python, FastAPI, React, PyTorch, and distributed systems — with a parallel track in quantitative finance and data analytics.",
    summaryLine: "Full-stack ML builder in Python, FastAPI, React, PyTorch, and distributed systems.",
    skills: [
      { label: "Concepts & Languages", items: ["Data Structures and Algorithms", "Python", "SQL", "HTML", "Power BI", "Tableau"] },
      { label: "Frameworks & Libraries", items: ["FastAPI", "React", "PyTorch", "scikit-learn", "CVXPY", "Pandas", "NumPy", "Tailwind CSS", "Recharts"] },
      { label: "Databases & Infra", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "TimescaleDB", "Apache Kafka", "Apache Spark"] },
      { label: "DevOps & Tools", items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "HuggingFace TRL", "Prometheus", "Grafana", "JWT", "WebSockets", "Vercel"] }
    ],
    profileStack: "Python · FastAPI · React · PyTorch · Distributed Systems",
    certifications: null,
    projects: [
      {
        key: "cascadeguard",
        title: "CascadeGuard",
        badge: "National Finalist — Meta × PyTorch × HuggingFace × Scaler Hackathon 2026",
        stackTags: ["Python", "FastAPI", "React", "PyTorch", "HuggingFace TRL", "GRPO", "OpenEnv", "Docker"],
        teaser: "Cross-Sector Infrastructure Cascade Failure RL Environment. National Finalist — 72,000+ participants.",
        github: "https://github.com/LordBhattt/CascadeGuard",
        liveLinks: [
          { label: "HF Environment", href: "https://huggingface.co/spaces/samarthdave0305/cascade-failure-env" },
          { label: "Frontend UI", href: "https://huggingface.co/spaces/LordBhatt/CascadeGuardUI" }
        ],
        diagram: {
          flow: ["OpenEnv Gym", "RL Agent\nDeepSeek-R1 32B · GRPO", "5-Sector Graph", "WebSocket", "React Dashboard"]
        },
        bullets: [
          "National finalist (top teams from 72,000+ participants) at the Meta × PyTorch × HuggingFace × Scaler OpenEnv Hackathon as sole architect of the end-to-end RL solution.",
          "Built a 5-sector infrastructure cascade simulation (power, water, hospitals, telecom, finance) grounded in NERC 2003 and FERC 2021 data.",
          "Fine-tuned DeepSeek-R1 32B via GRPO on the environment; outperformed random and greedy baselines across all reward curves.",
          "FastAPI backend, React + Vite dashboard, WebSocket event layer with live agent interaction and state visualization."
        ]
      },
      {
        key: "quantportfolio",
        title: "QuantPortfolio",
        status: "In Progress",
        stackTags: ["FastAPI", "React", "PostgreSQL", "Redis", "PyTorch", "CVXPY", "scikit-learn", "Vercel"],
        teaser: "Full-stack portfolio intelligence platform for stocks, crypto, ETFs, and mutual funds with quant engine, ML forecasting, and live market data.",
        github: "https://github.com/LordBhattt/QuantPortfolio",
        diagram: {
          flow: [
            "Yahoo Finance / CoinGecko / AMFI",
            "Redis",
            "FastAPI",
            ["Black-Litterman", "HMM", "LSTM", "Monte Carlo"],
            "PostgreSQL",
            "React + Recharts"
          ]
        },
        bullets: [
          "Full-stack portfolio intelligence platform for stocks, crypto, ETFs, and mutual funds. Ingests live data from Yahoo Finance, CoinGecko, and AMFI with hourly refreshes and Redis caching with in-memory fallback.",
          "Implements Black-Litterman return blending, constrained mean-variance optimisation (CVXPY), efficient frontier generation, and HMM-based regime detection (bull/sideways/bear) retrained weekly on SPY.",
          "Delivers LSTM forecasts, Monte Carlo simulation (1,000 paths), VaR/CVaR, Sharpe/Sortino/Calmar ratios, and Fama-French 5-factor OLS attribution on a React + Recharts dashboard."
        ]
      },
      {
        key: "groundwork",
        title: "Groundwork",
        stackTags: ["Python", "FastAPI", "Kafka", "Neo4j", "TimescaleDB", "Redis", "Spark", "FinBERT", "Docker", "Kubernetes"],
        teaser: "Macro Intelligence Terminal — real-time macro intelligence platform across 8 microservices ingesting FRED, SEC EDGAR, NewsAPI, and more.",
        github: "https://github.com/LordBhattt/Groundwork",
        diagram: {
          flow: ["8 Sources", "Kafka", ["Neo4j", "Spark", "FinBERT", "K-Means"], "TimescaleDB", "WebSocket", "React"],
          infra: ["Docker", "K8s", "Prometheus/Grafana"]
        },
        bullets: [
          "Real-time macro intelligence platform across 8 Python microservices ingesting FRED, SEC EDGAR, NewsAPI, BLS, Treasury, GDELT, FMP, and Reddit with sub-second propagation via Kafka.",
          "Neo4j knowledge graph maps macro shocks to affected sectors; Apache Spark runs parallelised historical precedent analysis over multi-decade time series in TimescaleDB.",
          "Enables live DCF revaluation with dynamic WACC, K-Means regime classification on 15 FRED indicators, and FinBERT sentiment scoring on SEC EDGAR filings, surfaced on a WebSocket React frontend.",
          "Containerised with Docker Compose (dev) and Kubernetes (prod), monitored via Prometheus and Grafana."
        ]
      },
      {
        key: "jot",
        title: "Jot",
        stackTags: ["HTML", "Vanilla JS", "Python", "Web Workers", "Vercel Edge Middleware", "Upstash Redis"],
        teaser: "English-like Programming Language & Browser Playground — no brackets, no semicolons, no quoted strings.",
        github: "https://github.com/LordBhattt/Jot",
        live: "https://jotcode.vercel.app",
        diagram: {
          flow: ["Jot Source", "JS Interpreter\n(Browser)", "Python CLI\n(Downloadable)", "Web Worker Sandbox", "Vercel Edge"]
        },
        bullets: [
          "A custom programming language designed to read like spoken English — no brackets, no semicolons, no quoted strings.",
          "Ships as a single 253 KB HTML file containing two independent interpreters (JS browser runtime + downloadable Python CLI), a full stdlib across 20 modules (math, graph, DP, matrix, trie, HTTP simulation, and more).",
          "Web Worker sandbox for safe execution with hard kill/timeout, a multi-tab editor, and a 9-lesson interactive tutorial.",
          "Vercel Edge Middleware rate limiting via Upstash Redis. 93-check CI suite covering syntax validation, XSS/CSP security, ARIA compliance, and live lesson execution."
        ]
      },
      {
        key: "trace",
        title: "TRACE",
        stackTags: ["Flutter", "Node.js", "Express", "MongoDB", "Razorpay", "OSRM", "Firebase FCM"],
        teaser: "Full-stack mobile ride-booking app built solo end-to-end with payments, real-time routing, push notifications, and admin dashboard.",
        github: "https://github.com/LordBhattt/Trace",
        diagram: {
          flow: ["Flutter", "JWT", "Node/Express", ["MongoDB", "OSRM", "Razorpay", "Firebase FCM"], "Render"],
          stateMachine: ["Request", "Match", "Pickup", "In-Ride", "Complete", "Payment", "Settled"]
        },
        bullets: [
          "Full-stack mobile ride-booking app built solo end-to-end. Flutter frontend + Node.js/Express backend + MongoDB.",
          "Razorpay payment integration with HMAC-verified order flow, OSRM routing, JWT auth, 8-state ride state machine, Firebase FCM push notifications, and admin dashboard deployed on Render."
        ]
      },
      {
        key: "ambar-aerobics",
        title: "Ambar Aerobics Fitness",
        badge: "Freelance · Jan 2026 – Feb 2026",
        stackTags: ["HTML", "CSS", "JavaScript", "WhatsApp Business API"],
        teaser: "Client Website — 5-page responsive site for a 16-branch Mumbai fitness institute with WhatsApp lead capture.",
        github: "https://github.com/LordBhattt/Ambar-Aerobics-Website",
        live: "https://ambaraerobicsfitness.com",
        diagram: {
          flow: ["HTML/CSS/JS", "WhatsApp Business API", "JustDial Listing", "Client Dashboard"]
        },
        bullets: [
          "Designed and developed a 5-page responsive website (Home, About, Courses, Gallery, Contact) from scratch for a Mumbai fitness institute with 16 branches.",
          "Achieved sub-2s load times and a 96/100 PageSpeed score.",
          "Integrated WhatsApp Business API for lead capture across trial class bookings and course enquiries — client reported a 40% increase in inbound leads within 60 days of launch.",
          "JustDial listing advice contributed to a further 25% uplift in monthly enquiries."
        ]
      }
    ]
  },

  nonTech: {
    headline: "Builder across quant finance, data systems, and financial strategy.",
    heroHeadline: "WHERE DATA MEETS DECISIONS",
    summary: "B.Tech Computer Engineering student at SPIT (Expected 2027) with a minor in Financial & Strategic Management. National hackathon finalist (72,000+ participants), Finance Head at SPCG, and full-stack ML engineer. Proficient in Python, SQL, Excel, Power BI, and quantitative finance methods including Black-Litterman, Monte Carlo, and DCF modelling.",
    summaryLine: "Quant and data builder — Black-Litterman, Monte Carlo, DCF, Excel, Power BI.",
    skills: [
      { label: "Analytics & Data", items: ["Python (Pandas, NumPy, scikit-learn, statsmodels)", "SQL", "Excel", "Power BI", "Tableau"] },
      { label: "Quant & Finance", items: ["Black-Litterman", "MVO", "Monte Carlo", "VaR/CVaR", "Fama-French", "DCF Modelling", "WACC"] },
      { label: "ML & NLP", items: ["PyTorch", "HuggingFace (FinBERT)", "GRPO", "LSTM", "HMM", "K-Means Clustering", "CVXPY", "Monte Carlo"] },
      { label: "Infra & Tools", items: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Spark", "Docker", "Git", "REST APIs"] }
    ],
    profileStack: "Python · SQL · Excel · Power BI · Black-Litterman · Monte Carlo · DCF",
    certifications: [
      "The Complete Investment Banking Course — Udemy (In Progress)",
      "Corporate Finance Fundamentals — CFI / Coursera Specialisation (2024)",
      "Accounting Fundamentals for Corporate Finance — CFI / Coursera Specialisation (2024)",
      "Reading Financial Statements — CFI / Coursera Specialisation (2024)"
    ],
    projects: [
      {
        key: "cascadeguard",
        title: "CascadeGuard",
        badge: "National Finalist — Meta × PyTorch × HuggingFace × Scaler Hackathon 2026",
        stackTags: ["Python", "FastAPI", "React", "PyTorch", "HuggingFace TRL", "GRPO", "OpenEnv", "Docker"],
        teaser: "Cross-Sector Infrastructure Cascade Failure RL Environment. National Finalist — 72,000+ participants.",
        github: "https://github.com/LordBhattt/CascadeGuard",
        liveLinks: [
          { label: "HF Environment", href: "https://huggingface.co/spaces/samarthdave0305/cascade-failure-env" },
          { label: "Frontend UI", href: "https://huggingface.co/spaces/LordBhatt/CascadeGuardUI" }
        ],
        diagram: {
          flow: ["OpenEnv Gym", "RL Agent\nDeepSeek-R1 32B · GRPO", "5-Sector Graph", "WebSocket", "React Dashboard"]
        },
        bullets: [
          "National finalist (top teams from 72,000+ participants) at the Meta × PyTorch × HuggingFace × Scaler OpenEnv Hackathon as sole architect of the end-to-end RL solution.",
          "Built a 5-sector infrastructure cascade simulation (power, water, hospitals, telecom, finance) grounded in NERC 2003 and FERC 2021 data.",
          "Fine-tuned DeepSeek-R1 32B via GRPO on the environment; outperformed random and greedy baselines across all reward curves.",
          "FastAPI backend, React + Vite dashboard, WebSocket event layer with live agent interaction and state visualization."
        ]
      },
      {
        key: "quantportfolio",
        title: "QuantPortfolio",
        status: "In Progress",
        stackTags: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "PyTorch", "CVXPY", "scikit-learn"],
        teaser: "Full-stack portfolio intelligence platform for stocks, crypto, ETFs, and mutual funds with quant engine, ML forecasting, and live market data.",
        github: "https://github.com/LordBhattt/QuantPortfolio",
        diagram: {
          flow: [
            "Yahoo Finance / CoinGecko / AMFI",
            "Redis",
            "FastAPI",
            ["Black-Litterman", "HMM", "LSTM", "Monte Carlo"],
            "PostgreSQL",
            "React + Recharts"
          ]
        },
        bullets: [
          "Full-stack portfolio intelligence platform for stocks, crypto, ETFs, and mutual funds. Ingests live data from Yahoo Finance, CoinGecko, and AMFI with hourly refreshes and Redis caching with in-memory fallback.",
          "Implements Black-Litterman return blending, constrained mean-variance optimisation (CVXPY), efficient frontier generation, and HMM-based regime detection (bull/sideways/bear) retrained weekly on SPY.",
          "Delivers LSTM forecasts, Monte Carlo simulation (1,000 paths), VaR/CVaR, Sharpe/Sortino/Calmar ratios, and Fama-French 5-factor OLS attribution on a React + Recharts dashboard."
        ]
      },
      {
        key: "groundwork",
        title: "Groundwork — Macro Intelligence Terminal",
        stackTags: ["Python", "FastAPI", "Kafka", "Neo4j", "TimescaleDB", "Redis", "Spark", "FinBERT", "Docker", "Kubernetes"],
        teaser: "Real-time macro intelligence platform across 8 microservices — maps global shocks to sector impact, runs live DCF revaluation, and stress-tests portfolios.",
        github: "https://github.com/LordBhattt/Groundwork",
        diagram: {
          flow: ["8 Sources", "Kafka", ["Neo4j", "Spark", "FinBERT", "K-Means"], "TimescaleDB", "WebSocket", "React"],
          infra: ["Docker", "K8s", "Prometheus/Grafana"]
        },
        bullets: [
          "Real-time macro intelligence platform across 8 Python microservices ingesting FRED, SEC EDGAR, NewsAPI, BLS, Treasury, GDELT, FMP, and Reddit with sub-second propagation via Kafka.",
          "Neo4j knowledge graph maps macro shocks to affected sectors; Apache Spark runs parallelised historical precedent analysis over multi-decade time series in TimescaleDB.",
          "Enables live DCF revaluation with dynamic WACC, K-Means regime classification on 15 FRED indicators, and FinBERT sentiment scoring on SEC EDGAR filings, surfaced on a WebSocket React frontend.",
          "Containerised with Docker Compose (dev) and Kubernetes (prod), monitored via Prometheus and Grafana."
        ]
      },
      {
        key: "jot",
        title: "Jot",
        stackTags: ["HTML", "Vanilla JS", "Python", "Web Workers", "Vercel Edge Middleware", "Upstash Redis"],
        teaser: "English-like Programming Language & Browser Playground — no brackets, no semicolons, no quoted strings.",
        github: "https://github.com/LordBhattt/Jot",
        live: "https://jotcode.vercel.app",
        diagram: {
          flow: ["Jot Source", "JS Interpreter\n(Browser)", "Python CLI\n(Downloadable)", "Web Worker Sandbox", "Vercel Edge"]
        },
        bullets: [
          "A custom programming language designed to read like spoken English — no brackets, no semicolons, no quoted strings.",
          "Ships as a single 253 KB HTML file containing two independent interpreters (JS browser runtime + downloadable Python CLI), a full stdlib across 20 modules (math, graph, DP, matrix, trie, HTTP simulation, and more).",
          "Web Worker sandbox for safe execution with hard kill/timeout, a multi-tab editor, and a 9-lesson interactive tutorial.",
          "Vercel Edge Middleware rate limiting via Upstash Redis. 93-check CI suite covering syntax validation, XSS/CSP security, ARIA compliance, and live lesson execution."
        ]
      },
      {
        key: "trace",
        title: "TRACE",
        stackTags: ["Flutter", "Node.js", "Express", "MongoDB", "Razorpay", "OSRM", "Firebase FCM"],
        teaser: "Full-stack mobile ride-booking app built solo end-to-end with payments, real-time routing, push notifications, and admin dashboard.",
        github: "https://github.com/LordBhattt/Trace",
        diagram: {
          flow: ["Flutter", "JWT", "Node/Express", ["MongoDB", "OSRM", "Razorpay", "Firebase FCM"], "Render"],
          stateMachine: ["Request", "Match", "Pickup", "In-Ride", "Complete", "Payment", "Settled"]
        },
        bullets: [
          "Full-stack mobile ride-booking app built solo end-to-end. Flutter frontend + Node.js/Express backend + MongoDB.",
          "Razorpay payment integration with HMAC-verified order flow, OSRM routing, JWT auth, 8-state ride state machine, Firebase FCM push notifications, and admin dashboard deployed on Render."
        ]
      },
      {
        key: "ambar-aerobics",
        title: "Ambar Aerobics Fitness",
        badge: "Freelance · Jan 2026 – Feb 2026",
        stackTags: ["HTML", "CSS", "JavaScript", "WhatsApp Business API"],
        teaser: "Client Website — 5-page responsive site for a 16-branch Mumbai fitness institute with WhatsApp lead capture.",
        github: "https://github.com/LordBhattt/Ambar-Aerobics-Website",
        live: "https://ambaraerobicsfitness.com",
        diagram: {
          flow: ["HTML/CSS/JS", "WhatsApp Business API", "JustDial Listing", "Client Dashboard"]
        },
        bullets: [
          "Designed and developed a 5-page responsive website (Home, About, Courses, Gallery, Contact) from scratch for a Mumbai fitness institute with 16 branches.",
          "Achieved sub-2s load times and a 96/100 PageSpeed score.",
          "Integrated WhatsApp Business API for lead capture across trial class bookings and course enquiries — client reported a 40% increase in inbound leads within 60 days of launch.",
          "JustDial listing advice contributed to a further 25% uplift in monthly enquiries."
        ]
      }
    ]
  },

  // UI strings — shared across modes (not content, just labels/copy)
  ui: {
    sections: {
      about: "ABOUT",
      summary: "SUMMARY",
      facts: "PROFILE",
      profile: "PROFILE",
      stats: "AT A GLANCE",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      skills: "SKILLS",
      certifications: "CERTIFICATIONS",
      leadership: "LEADERSHIP",
      competitions: "COMPETITIONS",
      contact: "CONTACT"
    },
    buttons: {
      tech: "Tech",
      nonTech: "Non-Tech",
      github: "GitHub",
      close: "Close",
      closeMark: "X",
      viewProject: "View project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleMode: "Toggle resume mode"
    },
    hero: {
      techCommand: "TECH",
      nonTechCommand: "NON-TECH",
      identityAria: "Dual identity statement",
      cornerLabels: {
        degree: "DEGREE",
        minor: "MINOR",
        status: "STATUS"
      }
    },
    projectsModal: {
      stack: "Stack",
      highlights: "Highlights",
      architecture: "ARCHITECTURE",
      infra: "INFRA LAYER",
      stateMachine: "RIDE STATE MACHINE",
      arrow: "→"
    },
    ticker: {
      separator: "·"
    },
    navAria: "Primary navigation",
    loader: {
      lines: [
        "INITIALIZING PROFILE: HARSH BHATT",
        "LOCATION: MUMBAI, IN | CLASS OF 2027",
        "MODE: LOADING...",
        "MODE: SELECT"
      ]
    },
    experience: {
      certificate: "Certificate"
    },
    contactCopy: "Let's work on something that counts.",
    contactLabels: {
      email: "EMAIL",
      phone: "PHONE",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      time: "TIME"
    },
    contactFooter: {
      left: "HARSH BHATT · MUMBAI · © 2026",
      right: "BUILT WITH INTENT"
    },
    errorBoundary: {
      title: "RUNTIME GUARD",
      message: "A section failed to render in the current resume mode. The rest of the page is still available.",
      actionHint: "Switch modes or reload to recover."
    }
  }
};

export const content = resumeContent;

export default resumeContent;
