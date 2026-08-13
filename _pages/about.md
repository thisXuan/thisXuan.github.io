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

<section class="intro-panel">
<p class="intro-panel__eyebrow">Minxuan Jin · M.S. candidate at Georgia Tech</p>
<h1 class="intro-panel__title">Systems-minded engineer,<br>applied AI builder.</h1>
<p class="intro-panel__lead">I build dependable infrastructure and intelligent tools that make complex systems easier to use.</p>
</section>

I am a Master's student in **Computational Science and Engineering** at the [Georgia Institute of Technology](https://www.gatech.edu/). My interests lie at the intersection of **backend systems**, **distributed computing**, and **applied machine learning** — building production-level systems that connect ML models with real-world applications.

Prior to Georgia Tech, I earned dual degrees in Software Engineering and Business Administration from [South China University of Technology](https://www.scut.edu.cn/en/), graduating as an Outstanding Graduate.

I have industry experience as a Software Engineer Intern at **Amazon Web Services**, **Meituan**, **Momenta**, and the **National University of Singapore Research Institute**, and I am currently seeking 2027 New Grad Software Engineering opportunities.

# Research Interests

<div class="skill-tags">
<span>Backend Systems</span>
<span>Applied Machine Learning</span>
<span>Retrieval-Augmented Generation</span>
<span>Distributed Systems</span>
<span>High-Performance Computing</span>
<span>Microservice Architecture</span>
</div>

# Technical Skills

**Languages:** Python, Java, JavaScript/TypeScript, C/C++, SQL, Rust, Dart, Ruby

**Frameworks & Tools:** LangChain, PyTorch, Scikit-learn, Spring Boot, Spring Cloud, React, Vue.js, CMake, MySQL, PostgreSQL, MongoDB, Redis, Docker, AWS, RocketMQ, Spark, Hadoop

<span class='anchor' id='education'></span>
# Education

<div class="edu-item">
<div class="edu-school">Georgia Institute of Technology</div>
<div class="edu-degree">M.S. in Computational Science and Engineering <span>GPA 3.87 / 4.00</span></div>
<div class="edu-meta">Atlanta, GA &nbsp;·&nbsp; Aug 2025 – May 2027</div>
</div>

<div class="edu-item">
<div class="edu-school">South China University of Technology</div>
<div class="edu-degree">B.E. in Software Engineering <span>GPA 3.72 / 4.00</span></div>
<div class="edu-meta">Guangzhou, China &nbsp;·&nbsp; Sep 2021 – Jul 2025</div>
</div>

<span class='anchor' id='experience'></span>
# Experience

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">aws</div><img src='images/aws.png' alt="AWS" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Software Engineer Intern** · Palo Alto, CA · May 2026 – Aug 2026

- Delivered the Python extended client for the Data Plane Proxy Service end-to-end, covering authentication, credential provisioning, exception classification, and CloudWatch metrics; added a Hydra integration-test suite to the pre-production and production pipeline.
- Built an onboarding agent that generates validated CDK code, tests, and a code review from a single ticket, with status tracking and self-diagnosis. Onboarded **10+ control-plane teams**, reducing onboarding from days to hours.
- Expanded load-test infrastructure with a Production Mock Test tier for production scenarios including slow downstream responses, thread starvation, high query-argument counts, and large response bodies.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Meituan</div><img src='images/meituan.png' alt="Meituan" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Software Engineer Intern** · Beijing, China · Apr 2025 – Jun 2025

- Integrated LangChain with a RAG pipeline using hybrid FAISS+BM25 for an AI Agent development platform, supporting autonomous driving data analysis for product operations teams.
- Implemented the agent search interface with a full-stack architecture (Vue.js + Python Flask + Supabase), and deployed it as an MCP tool for easy integration.
- Optimized Webviz proto decoding by implementing Rust-based WebAssembly modules in Web Workers, achieving up to **9× performance improvement** over the previous JavaScript solution.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Momenta</div><img src='images/momenta.png' alt="Momenta" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Software Engineer Intern** · Beijing, China · Jan 2025 – Mar 2025

- Built a high-performance C SDK with multi-threaded file download (1 GB/s, 1.7 GB memory for 10 GB files) and raw-bag + refresh-topic merging, eliminating redundant full-bag generation.
- Enabled JavaScript-C cross-compilation and packaged C code as an npm module, ensuring compatibility across Linux, macOS, and Docker, serving 500+ colleagues.
- Resolved topic version mismatches in ROS .bag files by developing an algorithm to accurately identify versions, enabling automated classification of **2 million** internal data entries.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NUSRI</div><img src='images/nus.png' alt="NUS Research Institute" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Software Engineer Intern** · Chongqing, China · Sep 2024 – Dec 2024

- Built scalable microservice architecture using Spring Cloud for a shopping management system, developing 20+ RESTful APIs with Elasticsearch-powered fuzzy search.
- Optimized system performance by **65%** through strategic Redis caching for high-frequency operations and distributed ID generation.
- Built a monitoring dashboard for multidimensional KPI tracking, reducing query latency from 1800 ms to 20 ms (**90× faster**) through SQL aggregation optimization and indexing.
</div>
</div>

<span class='anchor' id='projects'></span>
# Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LoRA</div><img src='images/pockermind.png' alt="PokerMind" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[PokerMind: LoRA-Tuned LLM for Texas Hold'em Poker](https://github.com/thisXuan/PokerMind-LoRA-Tuned-LLM-for-Texas-Hold-em-Poker)**

- Applied LoRA fine-tuning to adapt a transformer model to a 110K poker-hand dataset, achieving efficient domain transfer with significantly reduced training cost.
- Fine-tuned Llama-3-8B for poker decision modeling, achieving 89% loss reduction and improving action accuracy from 40.03% to **90.10%**.
- Developed an interactive Texas Hold'em platform (React + Vite) powered by LoRA-tuned LLM agents with position-aware prompts and dynamic game-state tracking.
</div>
</div>

<span class='anchor' id='honors'></span>
# Honors & Awards

<ul class="honors-list">
<li><strong>2025.06</strong> — Outstanding Graduate, South China University of Technology</li>
<li><strong>2024.10</strong> — Second-Class University Scholarship, SCUT</li>
<li><strong>2023.12</strong> — Second Prize (Guangdong Province), National Mathematical Modeling Contest</li>
<li><strong>2023.10</strong> — Second-Class University Scholarship, SCUT</li>
<li><strong>2023.04</strong> — First Prize, Software Design Competition, SCUT</li>
<li><strong>2022.10</strong> — Second-Class University Scholarship, SCUT</li>
</ul>
