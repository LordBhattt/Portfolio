// PROOFREAD FIXES:
// - Removed duplicate "Minor in" from shared.minor value (was "Minor in Financial & Strategic Management", now "Financial & Strategic Management") — fixes MINOR MINOR display in hero corners
// - Updated competition org format: added em dashes for consistency with resume
// - Verified all bullet points end with full stops
// - Verified "4 independent projects" in both tech and nonTech summaries
// - Verified summaryLine text matches user spec for both modes
// - Verified hero subtitle is correct
// - Verified no placeholder text exists
// - Removed double spaces from loader string
// - Verified SPCG first-mention format in leadership cards
// - Certificate URL confirmed correct with noopener noreferrer

export const resumeContent = {
  shared: {
    name: "Harsh Bhatt",
    monogram: "HB",
    phone: "+91 8169151287",
    email: "harsh.bhatt23@spit.ac.in",
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
        company: "Seed Global Education",
        location: "Mumbai, India",
        role: "Marketing Intern",
        period: "Dec 2024 – Mar 2025",
        dates: "DEC 2024 — MAR 2025",
        summary: "Sole marketing intern overseeing HubSpot CRM pipeline across 500+ leads and campaign funnels.",
        bullets: [
          "Sole marketing intern overseeing HubSpot CRM pipeline across 500+ leads; engineered automated lead-tracking workflows and campaign funnel dashboards that reduced manual reporting time by 40%.",
          "Analysed campaign funnel data to identify drop-off stages; recommended targeting adjustments that improved qualified lead throughput by 30% and delivered monthly data-backed analytics reports to stakeholders."
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
        bullet: "Built automated budget-tracking dashboards in Excel and SQL; analysed project cost data, tracked expenditure variance against forecasts, and optimized fund allocation across 5+ concurrent consulting engagements.",
        variants: {
          tech: {
            body: "Built automated budget-tracking dashboards in Excel and SQL.",
            bullets: [
              "Built automated budget-tracking dashboards in Excel and SQL; analysed project cost data, tracked expenditure variance against forecasts, and optimized fund allocation across 5+ concurrent consulting engagements."
            ]
          },
          nonTech: {
            body: "Built automated budget-tracking dashboards in Excel and SQL.",
            bullets: [
              "Built automated budget-tracking dashboards in Excel and SQL; analysed project cost data, tracked expenditure variance against forecasts, and optimized fund allocation across 5+ concurrent consulting engagements."
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
        bullet: "Managed financial operations across 15+ events; built dynamic spreadsheet models, tracked budgets against actuals, coordinated vendor payments, and maintained audit-ready reconciliation records.",
        variants: {
          tech: {
            body: "Managed financial operations across 15+ events.",
            bullets: [
              "Managed financial operations across 15+ events; built dynamic spreadsheet models, tracked budgets against actuals, coordinated vendor payments, and maintained audit-ready reconciliation records."
            ]
          },
          nonTech: {
            body: "Managed financial operations across 15+ events.",
            bullets: [
              "Managed financial operations across 15+ events; built dynamic spreadsheet models, tracked budgets against actuals, coordinated vendor payments, and maintained audit-ready reconciliation records."
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
      { value: 4, suffix: "", label: "Independent Projects" },
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
          { label: "Contact", value: "harsh.bhatt23@spit.ac.in", href: "mailto:harsh.bhatt23@spit.ac.in" },
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
    summary: "B.Tech Computer Engineering student at SPIT (Expected 2027) with a minor in Financial and Strategic Management. National hackathon finalist (72,000+ participants), full-stack ML engineer across 4 independent projects, and Finance Head at SPCG. Proficient in Python, FastAPI, React, PyTorch, and distributed systems.",
    summaryLine: "Full-stack ML builder in Python, FastAPI, React, PyTorch, and distributed systems.",
    skills: [
      { label: "Concepts & Languages", items: ["DSA", "Python", "TypeScript", "SQL", "HTML"] },
      { label: "Frameworks & Libraries", items: ["FastAPI", "React", "PyTorch", "scikit-learn", "CVXPY", "Pandas", "NumPy", "Tailwind CSS"] },
      { label: "Databases & Infra", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "TimescaleDB", "Apache Kafka", "Apache Spark"] },
      { label: "DevOps & Tools", items: ["Docker", "Kubernetes", "Git", "HuggingFace TRL", "Prometheus", "Grafana", "JWT", "WebSockets"] }
    ],
    profileStack: "Python · FastAPI · React · PyTorch · Distributed Systems",
    certifications: null,
    projects: [
      {
        key: "cascadeguard",
        title: "CascadeGuard",
        stackTags: ["Python", "FastAPI", "React", "PyTorch", "HuggingFace TRL", "GRPO", "OpenEnv", "Docker"],
        teaser: "RL agent trained to prevent cascade failures across 5 critical infrastructure sectors. National Finalist — 72,000+ participants.",
        github: "https://github.com/LordBhattt/CascadeGuard",
        diagram: {
          flow: ["OpenEnv Gym", "RL Agent\nDeepSeek-R1 32B · GRPO", "5-Sector Graph", "WebSocket", "React Dashboard"]
        },
        bullets: [
          "Sole architect of an end-to-end RL solution; national finalist at Meta × PyTorch × HuggingFace × Scaler OpenEnv Hackathon, Bangalore 2026 (top teams from 72,000+ participants).",
          "Fine-tuned DeepSeek-R1 32B via GRPO on a 5-sector cascade-failure simulation; achieved consistent policy improvement over random and greedy baseline agents on all reward curves.",
          "Modeled a cross-sector interdependency graph (power, water, hospitals, telecom, finance) grounded in NERC 2003 and FERC 2021 data; 10 action types, partial observability, adversarial events.",
          "Engineered FastAPI backend, React + Vite dashboard, and WebSocket event layer on an OpenEnv gym-style RL environment enabling live agent interaction and state visualization."
        ]
      },
      {
        key: "quantportfolio",
        title: "QuantPortfolio",
        stackTags: ["FastAPI", "React", "PostgreSQL", "Redis", "PyTorch", "CVXPY", "scikit-learn", "APScheduler"],
        teaser: "Full-stack portfolio intelligence platform with quant engine, ML forecasting, and live market data across stocks, crypto, ETFs, and mutual funds.",
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
          "Full-stack portfolio platform; ingested live market data from Yahoo Finance, CoinGecko, and AMFI with hourly refresh, Redis caching, and in-memory fallback on cache miss.",
          "Black-Litterman return blending, constrained MVO via CVXPY, efficient frontier generation, HMM regime detection (bull/sideways/bear) retrained weekly on SPY.",
          "LSTM return forecasting (PyTorch), Monte Carlo simulation (1,000 paths), VaR/CVaR, Sharpe/Sortino/Calmar ratios, Fama-French 5-factor OLS attribution on a React + Recharts dashboard.",
          "Async FastAPI + PostgreSQL + JWT auth + APScheduler for ingestion and regime recalibration; Docker Compose with role-scoped access controls."
        ]
      },
      {
        key: "groundwork",
        title: "Groundwork",
        stackTags: ["FastAPI", "Kafka", "Neo4j", "TimescaleDB", "Redis", "Apache Spark", "FinBERT", "Docker", "Kubernetes"],
        teaser: "Real-time macro intelligence platform across 8 microservices — maps global shocks to sector impact, runs live DCF revaluation, and stress-tests portfolios.",
        github: "https://github.com/LordBhattt/Groundwork",
        diagram: {
          flow: ["8 Sources", "Kafka", ["Neo4j", "Spark", "FinBERT", "K-Means"], "TimescaleDB", "WebSocket", "React"],
          infra: ["Docker", "K8s", "Prometheus/Grafana"]
        },
        bullets: [
          "8 Python microservices ingesting FRED, SEC EDGAR, NewsAPI, BLS, Treasury, GDELT, FMP, and Reddit; sub-second propagation via Kafka across 8 topics.",
          "Neo4j knowledge graph maps macro shocks to affected sectors in real time; Apache Spark runs parallelised historical precedent analysis over multi-decade time series in TimescaleDB.",
          "K-Means regime classifier on 15 FRED macro indicators; FinBERT sentiment scoring on SEC EDGAR filings; live WebSocket React frontend.",
          "Containerised with Docker Compose and Kubernetes with horizontal pod autoscaling; monitored via Prometheus + Grafana."
        ]
      },
      {
        key: "trace",
        title: "TRACE",
        stackTags: ["Flutter", "Node.js", "Express", "MongoDB", "Razorpay", "OSRM", "Firebase FCM", "JWT"],
        teaser: "End-to-end mobile ride-booking app built solo — payments, real-time routing, push notifications, and an admin dashboard, all deployed in production.",
        github: "https://github.com/LordBhattt/trace-payment-server",
        diagram: {
          flow: ["Flutter", "JWT", "Node/Express", ["MongoDB", "OSRM", "Razorpay", "Firebase FCM"], "Render"],
          stateMachine: ["Request", "Match", "Pickup", "In-Ride", "Complete", "Payment", "Settled"]
        },
        bullets: [
          "Solo end-to-end full-stack mobile ride-booking app: Flutter frontend + Node.js/Express backend + MongoDB.",
          "Razorpay payment integration with HMAC-verified order flow; OSRM for live routing and ETA calculation.",
          "JWT auth, ride state machine with 8 statuses (Request → Match → Pickup → In-Ride → Complete → Payment → Settled → Cancelled), Firebase FCM push notifications for driver and rider.",
          "Admin dashboard for ride management and oversight; entire app deployed on Render."
        ]
      }
    ]
  },

  nonTech: {
    headline: "Builder across quant finance, data systems, and financial strategy.",
    heroHeadline: "WHERE DATA MEETS DECISIONS",
    summary: "B.Tech Computer Engineering student at SPIT (Expected 2027) with a minor in Financial & Strategic Management. National hackathon finalist (72,000+ participants), Finance Head at SPCG, and builder of 4 independent quant and data projects. Proficient in Python, SQL, Excel, Power BI, and quantitative finance methods including Black-Litterman, Monte Carlo, and DCF modelling.",
    summaryLine: "Quant and data builder — Black-Litterman, Monte Carlo, DCF, Excel, Power BI.",
    skills: [
      { label: "Analytics & Data", items: ["Python (Pandas, NumPy, scikit-learn, statsmodels)", "SQL", "Excel", "Power BI"] },
      { label: "Quant & Finance", items: ["Black-Litterman", "MVO", "Monte Carlo", "VaR/CVaR", "Fama-French", "DCF Modelling", "WACC"] },
      { label: "ML & NLP", items: ["PyTorch", "HuggingFace (FinBERT)", "K-Means Clustering", "HMM", "LSTM", "CVXPY"] },
      { label: "Infra & Tools", items: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Spark", "Docker", "Git", "REST APIs"] }
    ],
    profileStack: "Python · SQL · Excel · Power BI · Black-Litterman · Monte Carlo · DCF",
    certifications: [
      "The Complete Investment Banking Course — Udemy (2024)",
      "Corporate Finance Fundamentals | Accounting Fundamentals for Corporate Finance | Reading Financial Statements — CFI / Coursera Specialization (2024)",
      "Google Project Management Professional Certificate — Google / Coursera (2024)"
    ],
    projects: [
      {
        key: "cascadeguard",
        title: "CascadeGuard",
        stackTags: ["Python", "FastAPI", "React", "PyTorch", "HuggingFace TRL", "GRPO", "OpenEnv", "Docker"],
        teaser: "RL agent trained to prevent cascade failures across 5 critical infrastructure sectors. National Finalist — 72,000+ participants.",
        github: "https://github.com/LordBhattt/CascadeGuard",
        diagram: {
          flow: ["OpenEnv Gym", "RL Agent\nDeepSeek-R1 32B · GRPO", "5-Sector Graph", "WebSocket", "React Dashboard"]
        },
        bullets: [
          "National Finalist at one of India's largest AI hackathons (72,000+ participants); sole architect of the submitted solution.",
          "Built a simulation of how failures cascade across power, water, hospitals, telecom, and finance sectors — and trained an AI agent to intervene and prevent collapse.",
          "Grounded the model in real regulatory data (NERC 2003, FERC 2021); the agent learned to outperform both random and rule-based decision strategies.",
          "Delivered a live React dashboard showing the agent's decisions in real time across all 5 sectors."
        ]
      },
      {
        key: "quantportfolio",
        title: "QuantPortfolio",
        stackTags: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "PyTorch", "CVXPY", "scikit-learn"],
        teaser: "Full-stack portfolio intelligence platform with quant engine, ML forecasting, and live market data across stocks, crypto, ETFs, and mutual funds.",
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
          "Built an end-to-end portfolio analytics platform covering stocks, crypto, ETFs, and mutual funds with live data from Yahoo Finance, CoinGecko, and AMFI refreshed hourly.",
          "Implemented Black-Litterman return blending and constrained mean-variance optimisation to generate efficient frontiers and optimal allocations.",
          "Ran 1,000-path Monte Carlo simulations; computed VaR/CVaR, Sharpe/Sortino/Calmar ratios, and Fama-French 5-factor attribution — all displayed on an interactive dashboard.",
          "HMM-based market regime detection (bull/sideways/bear) recalibrated weekly; LSTM model optionally feeds return views into the optimiser."
        ]
      },
      {
        key: "groundwork",
        title: "Groundwork — Macro Intelligence Terminal",
        stackTags: ["Python", "Kafka", "Neo4j", "Spark", "FinBERT", "FastAPI"],
        teaser: "Real-time macro intelligence platform — maps global shocks to sector impact, runs live DCF revaluation, and stress-tests portfolios across 10 scenarios.",
        github: "https://github.com/LordBhattt/Groundwork",
        diagram: {
          flow: ["8 Sources", "Kafka", ["Neo4j", "Spark", "FinBERT", "K-Means"], "TimescaleDB", "WebSocket", "React"],
          infra: ["Docker", "K8s", "Prometheus/Grafana"]
        },
        bullets: [
          "Built a real-time macro intelligence terminal ingesting data from 8 sources — including FRED, SEC EDGAR, Treasury, and Reddit — to monitor the global economy as it moves.",
          "Neo4j knowledge graph automatically maps macro shocks (rate hikes, CPI prints, geopolitical events) to the sectors they affect in real time.",
          "Live DCF revaluation with dynamic WACC inputs; K-Means regime classification across 15 macro indicators; FinBERT NLP scoring of SEC earnings filings.",
          "Stress-tests portfolios across 10 macro scenarios in parallel; full monitoring via Prometheus + Grafana."
        ]
      },
      {
        key: "trace",
        title: "TRACE",
        stackTags: ["Flutter", "Node.js", "Express", "MongoDB", "Razorpay", "OSRM"],
        teaser: "End-to-end mobile ride-booking app built solo — payments, real-time routing, push notifications, and an admin dashboard, all deployed in production.",
        github: "https://github.com/LordBhattt/trace-payment-server",
        diagram: {
          flow: ["Flutter", "JWT", "Node/Express", ["MongoDB", "OSRM", "Razorpay", "Firebase FCM"], "Render"],
          stateMachine: ["Request", "Match", "Pickup", "In-Ride", "Complete", "Payment", "Settled"]
        },
        bullets: [
          "Built a fully functional ride-booking app from scratch, solo — the equivalent of building a stripped-down Uber end-to-end.",
          "Integrated Razorpay for real payments with secure verification; used OSRM (open-source routing) for live navigation and ETAs.",
          "Designed the full ride lifecycle as an 8-state machine: Request → Match → Pickup → In-Ride → Complete → Payment → Settled → Cancelled — with real-time push notifications at every step via Firebase.",
          "Shipped a working admin dashboard for monitoring all active rides; app live and deployed on Render."
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
