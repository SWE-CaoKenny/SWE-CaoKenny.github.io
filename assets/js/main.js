// ==========================================================================
// Portfolio site logic — referenced by index.html (<script src="assets/js/main.js">)
// Edit the SKILLS, EXPERIENCE, LEADERSHIP, and PROJECTS arrays below to
// update content — sourced from resumeKC.pdf.
// ==========================================================================

// ---------- Content data (EDIT THIS) ----------

const SKILLS = [
  {
    category: "Languages",
    tags: ["Python", "Java", "JavaScript", "Go", "HTML", "XML", "Lua", "SQL"],
  },
  {
    category: "Web / Frontend",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "CSS", "Figma"],
  },
  {
    category: "Backend / Tools",
    tags: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS (S3, ECS)",
      "Terraform",
      "gRPC",
      "PyTorch",
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Linux",
    ],
  },
  {
    category: "Coursework",
    tags: ["Data Structures & Algorithms", "Databases", "Operating Systems"],
  },
];

const PROJECTS = [
  {
    title: "Distributed Real-Time Trading Engine",
    description:
      "High-frequency trading simulation engine processing 10,000+ mock transactions per second at sub-millisecond latency, deployed as containerized microservices on AWS ECS with Redis Pub/Sub for low-latency inter-service communication.",
    tags: ["Python", "Redis", "Docker", "AWS"],
    repo: "#", // PLACEHOLDER: link this project's GitHub repo
    demo: "",
  },
  {
    title: "Omni-Auth: Secure Microservices Gateway",
    description:
      "Distributed authentication gateway centralizing identity management and session validation across a heterogeneous microservices stack — JWT-based stateless auth over gRPC interceptors with write-through caching, cutting cross-service auth latency by 25% across 15+ API endpoints.",
    tags: ["Go", "gRPC", "JWT", "PostgreSQL"],
    repo: "#", // PLACEHOLDER
    demo: "",
  },
  {
    title: "Scale-Share: Cloud-Native Image Host",
    description:
      "Scalable image hosting service for global content delivery, provisioned as infrastructure-as-code with Terraform to manage AWS S3 and CloudFront — sustaining 99.9% uptime for global asset delivery.",
    tags: ["Go", "AWS S3", "CloudFront", "Terraform"],
    repo: "#", // PLACEHOLDER
    demo: "",
  },
  {
    title: "Dynamic Desktop Utility Suite",
    description:
      "Front-end utility applications published on the Steam platform with custom UI frameworks — focused on user-interactive tooling, responsive UI/UX, and telemetry-driven engagement tracking.",
    tags: ["JavaScript", "Figma", "GitHub"],
    repo: "#", // PLACEHOLDER
    demo: "",
  },
];

const EXPERIENCE = [
  {
    org: "Stealth Startup",
    role: "Software Engineering Intern",
    period: "July 2025 – Present",
    location: "",
    bullets: [
      "Engineered an agentic full-stack sales automation platform that leverages autonomous LLM agents to qualify leads and orchestrate B2B outreach workflows.",
      "Built a high-concurrency backend using FastAPI and LangChain, optimizing agent tool-calling efficiency by implementing a Redis-based state management system.",
      "Improved lead conversion rates by 35% and reduced manual data entry overhead for sales teams by 50+ hours per week through automated CRM synchronization.",
    ],
  },
  {
    org: "University of California, San Diego",
    role: "Software Research Assistant",
    period: "Sept. 2025 – Present",
    location: "La Jolla, CA",
    bullets: [
      "Developed an LLM-powered narrative engine designed to generate state-aware, dynamic quest lines and NPC interactions in interactive adventure games.",
      "Optimized context window utilization by building a custom vector-retrieval system (RAG) in Python to inject relevant world-building data into model prompts.",
      "Achieved a 20% increase in response formatting accuracy and reduced token consumption by 15% through refined few-shot prompt engineering.",
    ],
  },
  {
    org: "Freelance / Independent Client Work",
    role: "Software Development Intern — Backend & Systems",
    period: "Summer 2026",
    location: "",
    bullets: [
      "Created an invoicing system for subscription services that managed and printed monthly customer invoices, increasing conversion rate by 15%.",
      "Collaborated with graphic design and QA teams to develop and launch a new application 6 months ahead of schedule.",
      "Wrote reusable unit test documents to ensure quality control, increasing bug-detection efficiency by over 35%.",
      "Analyzed client requirements to determine, recommend, and plan the redesign of a new API; presented findings to the CTO.",
      "Analyzed user needs and software requirements to assess design feasibility, completing the project 3 weeks ahead of the target date.",
      "Released and updated 15+ custom .NET applications for clients in the health industry.",
    ],
  },
  {
    org: "Freelance / Independent Client Work",
    role: "Software Development Intern — Web & APIs",
    period: "Summer 2026",
    location: "",
    bullets: [
      "Wrote Python and JavaScript libraries to display real-time pricing via Skyscanner's flight pricing API, increasing customer satisfaction.",
      "Implemented a new responsive website approach, increasing mobile traffic by 22%.",
      "Partnered with back-end developers to build dynamic web pages using JavaScript, increasing website leads by 15%.",
      "Collaborated on APIs and managed software workflow using Scrum methodology, increasing task success rate by 25%.",
    ],
  },
];

const LEADERSHIP = [
  {
    org: "Association for Computing Machinery",
    role: "Software Engineering Lead",
    period: "August 2025 – Present",
    location: "La Jolla, CA",
    bullets: [
      "Taught fifty students full-stack development and industry-standard practices through weekly technical workshops.",
      "Organized campus-wide hackathons resulting in a thirty percent increase in student participation.",
    ],
  },
];

// ---------- Rendering ----------

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map(
    (group) => `
      <div class="skill-card">
        <h3>${group.category}</h3>
        <div class="skill-tags">
          ${group.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join("")}
        </div>
      </div>
    `
  ).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  if (PROJECTS.length === 0) {
    grid.innerHTML = `
      <div class="project-card placeholder">
        <p>Projects coming soon — add entries to the PROJECTS array in assets/js/main.js.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = PROJECTS.map(
    (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>` : ""}
        </div>
      </div>
    `
  ).join("");
}

function renderExperience() {
  const workList = document.getElementById("experienceList");
  const leadershipList = document.getElementById("leadershipList");

  const card = (entry) => `
    <div class="experience-card">
      <div class="experience-header">
        <div>
          <h3>${entry.role}</h3>
          <p class="experience-org">${entry.org}${entry.location ? ` &middot; ${entry.location}` : ""}</p>
        </div>
        <span class="experience-period">${entry.period}</span>
      </div>
      <ul class="experience-bullets">
        ${entry.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `;

  if (workList) workList.innerHTML = EXPERIENCE.map(card).join("");
  if (leadershipList) leadershipList.innerHTML = LEADERSHIP.map(card).join("");
}

// ---------- Nav toggle (mobile) ----------

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Theme toggle (dark mode) ----------

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️";
    }
  });
}

// ---------- Footer year ----------

function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderExperience();
  initNavToggle();
  initThemeToggle();
  setFooterYear();
});
