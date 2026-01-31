---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I’m Minxuan 👋. You can also call me Michelle ~ 😃 

I am a Master’s student in Computational Science and Engineering at Georgia Institute of Technology, with a strong focus on backend systems and AI engineering. I enjoy building production-level systems that connect machine learning models with real-world applications.

I have hands-on industry experience as a Software Engineer Intern at Meituan, Momenta, and the National University of Singapore research institute, where I worked on RAG-based AI agents, high-performance C SDKs, distributed systems, and microservice architectures. My work has supported hundreds of internal users, processed millions of data entries, and delivered measurable performance gains—from 9× speedups with Rust WebAssembly to 90× query latency reductions through system optimization.

Technically, I’m comfortable across the stack, with experience in Python, Java, JavaScript, C/C++, and modern frameworks such as LangChain, PyTorch, Spring Cloud, React, and Vue. I’m particularly interested in combining backend engineering with applied AI—turning models into reliable products.

I’m currently seeking software engineering internship opportunities based in US.  

# 💪 Skills
```javascript
const minxuan = {
  technologies: {
        frontEnd: {
            js: ["Vue.js","React.js"],
        },
        backEnd: {
            java: ["Spring Boot", "Spring Cloud"],
            python: ["Flask","FastApi"],
            js: ["Node"],
        },
        mobileApp: {
            crossPlatform: ["Flutter"],
        },
        devOps: ["Docker🐳", "CI/CD", "Nginx", "GitHub Actions"],
        cloudServices: {
            aws: ["EC2", "S3", "RDS"],
        },
        databases: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Redis"],
        generativeAI: ["LangChain","RAG"],
    },
  description:['I have over one year professional experience and my focus is on full-stack(backend) software development and AI Application.']
}
```

# 🔥 News
- *2025.08*: I started my new journey in the United States. 
- *2025.07*: &nbsp;🎉🎉 I earned dual degrees in Software Engineering and Business Administration from South China University of Technology and graduated as an Outstanding Graduate. 
- *2025.03*: Started my Software Engineer Internship at Meituan, working on RAG-based AI agents and backend systems.
- *2025.01*: Joined Momenta as a Software Engineer Intern, working on high-performance C SDKs, cross-platform deployment, and large-scale data processing.

# 📖 Educations
- *2025.08 - 2027.05 (Expected)*, Georgia Institute of Technology, Master of Science in Computational Science and Engineering. 
- *2021.09 - 2025.06*, South China University of Technology, Bachelor of Engineering in Software Engineering.

# 💻 Internships
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Meituan</div><img src='images/meituan.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Software Engineer Intern

- Integrated LangChain with a RAG pipeline using hybrid FAISS+BM25 for an AI Agent development, supporting automatic driving platform and offering daily data analysis for product operations team.
- Implemented the agent search interface with a full-stack architecture (Vue.js+Python Flask+Supabase), and deployed this interface as a MCP tool to make this agent interface easy to deploy and use.
- Optimized Webviz proto decoding by implementing Rust-based WebAssembly modules executed in Web Workers, achieving up to 9× performance improvement over previous JavaScript solution.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Momenta</div><img src='images/momenta.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Software Engineer Intern

- Built a high-performance C SDK with multi-threaded file download (1 GB/s, 1.7 GB memory for 10 GB files) and raw-bag + refresh-topic merging, cutting storage overhead by eliminating redundant full-bag generation.
- Enabled JavaScript-C cross-compilation and packaged C code as an npm module used in Node.js, ensuring compatibility across Linux, macOS, and user Docker images, serving 500+ colleagues.
- Resolved topic version mismatches in ROS(Robot Operating System) .bag files by developing an algorithm to accurately identify versions, enabling automated classification of 2 million internal data entries.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NUSRI</div><img src='images/nus.png' alt="sym" width="200%"></div></div>
<div class='paper-box-text' markdown="1">

Software Engineer Intern

- Built scalable Microservice architecture using Spring Cloud for a shopping management system, and developed 20+ RESTful APIs. Implemented fuzzy search on store names using Elasticsearch.
- Optimized system performance by 65% through strategic Redis caching implementation for high-frequency operations. Implemented distributed ID generation using Redis INCR operations to ensure scalability.
- Built a monitoring dashboard for multidimensional KPI tracking, reducing query latency from 1800 ms to 20 ms(90× faster) through SQL aggregation optimization and indexing.
</div>
</div>

# 📝 Projects 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LoRA</div><img src='images/pockermind.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PokerMind: LoRA-Tuned LLM for Texas Hold'em Poker](https://github.com/thisXuan/PokerMind-LoRA-Tuned-LLM-for-Texas-Hold-em-Poker)


- Applied LoRA fine-tuning to adapt a transformer model to a 110K poker-hand dataset, achieving efficient domain transfer with significantly reduced training cost.
- Fine-tuned Llama-3-8B for poker decision modeling, achieving 89% loss reduction and improving overall action accuracy from 40.03% to 90.10% and exact match from 26.02% to 75.90%.
- Developed an interactive Texas Hold’em platform(React+Vite) powered by LoRA-Tuned LLM agents, featuring position-aware prompts and dynamic game-state tracking for human-AI gameplay.
</div>
</div>

# 🎖 Honors and Awards
- **2025.06**: Outstanding Graduate from South China University of Technology.
- **2024.10**: The Second-Class University Scholarship at South China University of Technology.
- **2023.12**: Awarded Second Prize (Guangdong Province) in the National Mathematical Modeling Contest.
- **2023.10**: The Second-Class University Scholarship at South China University of Technology.
- **2023.04**: First Prize in the Software Design Competition at South China University of Technology.
- **2022.10**: The Second-Class University Scholarship at South China University of Technology.
