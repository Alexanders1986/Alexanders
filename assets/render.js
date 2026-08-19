// =========================================================
// CONTACT — replace with your real details
// =========================================================
const CONTACT = {
	linkedin: "https://www.linkedin.com/in/jose-alexander-salamanca-lozano",
	linkedinDisplay: "/in/jose-alexander-salamanca-lozano",
	github: "https://github.com/Alexanders1986",
	githubDisplay: "@Alexanders1986",
};

const RESUME = {
	en: {
		pdf: "assets/CV_Jose_Alexander_Salamanca_Lozano_EN.pdf",
		docx: "assets/CV_Jose_Alexander_Salamanca_Lozano_EN.docx",
	},
	es: {
		pdf: "assets/CV_Jose_Alexander_Salamanca_Lozano_ES.pdf",
		docx: "assets/CV_Jose_Alexander_Salamanca_Lozano_ES.docx",
	},
};

// =========================================================
// STATE
// =========================================================
let STATE = { theme: "console", lang: "en" };
try {
	const saved = JSON.parse(localStorage.getItem("site-prefs") || "{}");
	if (saved.theme) STATE.theme = saved.theme;
	if (saved.lang) STATE.lang = saved.lang;
} catch (e) {
	/* ignore */
}

function savePrefs() {
	try {
		localStorage.setItem("site-prefs", JSON.stringify(STATE));
	} catch (e) {
		/* ignore */
	}
}

// =========================================================
// TEMPLATE: CONSOLE THEME
// =========================================================
function renderConsole(t, lang) {
	const otherLang = lang === "en" ? "es" : "en";
	const gitlog = t.experience.items
		.map(
			(item) => `
      <li class="commit">
        <div class="commit-meta">
          <span class="commit-hash">${item.hash}</span>
          <span class="commit-date">${item.date}</span>
        </div>
        <h3 class="commit-title">${item.role}</h3>
        <p class="commit-org">${item.context}</p>
        <ul class="commit-body">
          ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <p class="commit-tools">${item.tools}</p>
      </li>`
		)
		.join("");

	const techChips = t.skills.technical
		.map((s) => `<li class="chip">${s}</li>`)
		.join("");
	const compChips = t.skills.complementary
		.map((s) => `<li class="chip chip-amber">${s}</li>`)
		.join("");

	const certCards = t.certifications.items
		.map(
			(c) => `
      <div class="badge-card">
        <span class="badge-pill${
					c.gold ? " badge-pill-amber" : ""
				}"><span class="badge-pill-label">salesforce</span><span class="badge-pill-value">${
				c.tag
			}</span></span>
        <p class="badge-name">${c.name}</p>
        <p class="badge-date">${c.date}</p>
      </div>`
		)
		.join("");

	return `
<header class="topbar">
  <div class="topbar-inner">
    <div class="brand">
      <span class="brand-dot" aria-hidden="true"></span>
      <span class="brand-name">jsalamanca<span class="accent-amber">.dev</span></span>
    </div>
    <nav class="tabs" id="tabs">
      <button class="tab-toggle" id="tabToggle" aria-expanded="false" aria-controls="tabList">
        <span class="hamburger"></span> menu
      </button>
      <ul class="tab-list" id="tabList">
        <li><a href="#about" class="tab" data-tab>about<span class="ext">.md</span></a></li>
        <li><a href="#skills" class="tab" data-tab>skills<span class="ext">.json</span></a></li>
        <li><a href="#experience" class="tab" data-tab>experience<span class="ext">.log</span></a></li>
        <li><a href="#certifications" class="tab" data-tab>certs<span class="ext">.badge</span></a></li>
        <li><a href="#education" class="tab" data-tab>education<span class="ext">.md</span></a></li>
        <li><a href="#contact" class="tab" data-tab>contact<span class="ext">.sh</span></a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
<section class="hero" id="top">
  <div class="hero-inner">
    <div class="terminal" role="img" aria-label="Terminal">
      <div class="terminal-chrome">
        <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
        <span class="terminal-title">jose@salesforce-console: ~</span>
      </div>
      <div class="terminal-body">
        <p class="line"><span class="prompt">$</span> <span class="cmd">${
					t.hero.terminal.whoami
				}</span></p>
        <p class="out out-name">${t.hero.name}</p>
        <p class="out out-role">&gt; ${t.hero.role}</p>
        <p class="line line-2"><span class="prompt">$</span> <span class="cmd">${
					t.hero.terminal.catCmd
				}</span></p>
        <p class="out out-comment">${t.hero.terminal.lines.join("<br>")}</p>
        <p class="line line-3"><span class="prompt">$</span> <span class="cursor" aria-hidden="true">▌</span></p>
      </div>
    </div>
    <div class="hero-actions">
      <a class="btn btn-primary" href="${
				RESUME[lang].pdf
			}" download><span class="btn-icon">↓</span> ${t.hero.ctaDownload}</a>
      <a class="btn btn-ghost" href="#contact">${t.hero.ctaContact}</a>
      <a class="btn btn-ghost" href="#experience">${t.hero.ctaExperience}</a>
    </div>
    <p class="resume-lang-note"><a href="${
			RESUME[otherLang].pdf
		}" download class="resume-lang-link">${t.hero.ctaDownloadOther}</a></p>
    <ul class="hero-stats">
      ${t.hero.stats
				.map(
					(s) =>
						`<li><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></li>`
				)
				.join("")}
    </ul>
  </div>
</section>

<section class="section" id="about">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>about<span class="ext-h">.md</span></h2>
    <div class="card prose-card">
      ${t.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
    <div class="grid-two">
      <div class="card">
        <h3 class="card-title"><span class="accent-mint">#</span> ${
					t.about.softSkillsTitle
				}</h3>
        <ul class="pill-list">${t.about.softSkills
					.map((s) => `<li class="pill pill-blue">${s}</li>`)
					.join("")}</ul>
      </div>
      <div class="card">
        <h3 class="card-title"><span class="accent-mint">#</span> ${
					t.about.languagesTitle
				}</h3>
        <ul class="lang-list">${t.about.languages
					.map(
						(l) =>
							`<li><span>${l.name}</span><span class="lang-level lang-${l.cls}">${l.level}</span></li>`
					)
					.join("")}</ul>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt" id="skills">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>skills<span class="ext-h">.json</span></h2>
    <div class="card code-card" aria-hidden="true">
      <pre class="code-json"><span class="tok-brace">{</span>
  <span class="tok-key">"platform"</span><span class="tok-punc">:</span> <span class="tok-str">"${
		t.skills.jsonPreview.platform
	}"</span><span class="tok-punc">,</span>
  <span class="tok-key">"role"</span><span class="tok-punc">:</span> <span class="tok-str">"${
		t.skills.jsonPreview.role
	}"</span><span class="tok-punc">,</span>
  <span class="tok-key">"experience_years"</span><span class="tok-punc">:</span> <span class="tok-num">${
		t.skills.jsonPreview.years
	}</span>
<span class="tok-brace">}</span></pre>
    </div>
    <h3 class="subheading">${t.skills.technicalTitle}</h3>
    <ul class="chip-grid">${techChips}</ul>
    <h3 class="subheading">${t.skills.complementaryTitle}</h3>
    <ul class="chip-grid">${compChips}</ul>
  </div>
</section>

<section class="section" id="experience">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>experience<span class="ext-h">.log</span></h2>
    <p class="section-lede"><span class="prompt">$</span> git log --stat --reverse-date <span class="text-dim">// ${
			t.experience.lede
		}</span></p>
    <ol class="gitlog">${gitlog}</ol>
  </div>
</section>

<section class="section section-alt" id="certifications">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>certifications<span class="ext-h">.badge</span></h2>
    <div class="badge-grid">${certCards}</div>
  </div>
</section>

<section class="section" id="education">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>education<span class="ext-h">.md</span></h2>
    <div class="card edu-card">
      <div class="edu-icon" aria-hidden="true">🎓</div>
      <div>
        <h3 class="card-title">${t.education.degree}</h3>
        <p class="edu-school">${t.education.school}</p>
        <p class="edu-date">${t.education.date}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt" id="contact">
  <div class="section-inner">
    <h2 class="section-title"><span class="path">~/</span>contact<span class="ext-h">.sh</span></h2>
    <div class="card contact-card">
      <p class="section-lede"><span class="prompt">$</span> ./contact.sh --to jose <span class="text-dim">// ${
				t.contact.leadConsole
			}</span></p>
      <div class="contact-methods" id="contactMethods">
        <a class="contact-item" id="contactLinkedin" href="#" target="_blank" rel="noopener">
          <span class="contact-label">${
						t.contact.linkedinLabel
					}</span><span class="contact-value">${CONTACT.linkedinDisplay}</span>
        </a>
        <a class="contact-item" id="contactGithub" href="#" target="_blank" rel="noopener">
          <span class="contact-label">${
						t.contact.githubLabel
					}</span><span class="contact-value">${CONTACT.githubDisplay}</span>
        </a>
        <span class="contact-item contact-item-static">
          <span class="contact-label">${
						t.contact.locationLabel
					}</span><span class="contact-value">${t.contact.locationValue}</span>
        </span>
      </div>
      <p class="contact-note">⚠️ ${t.contact.note}</p>
    </div>
  </div>
</section>
</main>

<footer class="footer">
  <div class="section-inner footer-inner">
    <p>© <span id="year"></span> ${t.hero.name} — ${t.footer.rights}</p>
    <a href="#top" class="back-top">${t.footer.backTop}</a>
  </div>
</footer>`;
}

function splitNameForCorporate(name) {
	const words = name.split(" ");
	const mid = Math.ceil(words.length / 2);
	return words.slice(0, mid).join(" ") + "<br>" + words.slice(mid).join(" ");
}

// =========================================================
// TEMPLATE: CORPORATE THEME
// =========================================================
function renderCorporate(t, lang) {
	const otherLang = lang === "en" ? "es" : "en";
	const nameBr = splitNameForCorporate(t.hero.name);
	const engagements = t.experience.items
		.map(
			(item) => `
      <article class="engagement">
        <div class="engagement-period"><span class="period-range">${
					item.date
				}</span></div>
        <div class="engagement-body">
          <h3 class="engagement-role">${item.role}</h3>
          <p class="engagement-context">${item.context}</p>
          <ul class="engagement-list">${item.bullets
						.map((b) => `<li>${b}</li>`)
						.join("")}</ul>
          <p class="engagement-stack">${item.tools}</p>
        </div>
      </article>`
		)
		.join("");

	const skillRows = t.skills.tableRows
		.map(
			(r) => `
      <div class="skill-row">
        <div class="skill-row-label">${r.label}</div>
        <div class="skill-row-items">${r.items}</div>
      </div>`
		)
		.join("");

	const certCards = t.certifications.items
		.map(
			(c) => `
      <div class="cert-card${c.gold ? " cert-card-gold" : ""}">
        <span class="cert-seal" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/><path d="M13 20.5l4.5 4.5L27 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <p class="cert-name">${c.name}</p>
        <p class="cert-date">${c.date}</p>
      </div>`
		)
		.join("");

	return `
<header class="topbar">
  <div class="topbar-inner">
    <a href="#top" class="brand">
      <span class="brand-mark" aria-hidden="true">JS</span>
      <span class="brand-name">${t.hero.name}</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navList">
      <span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>
    </button>
    <nav class="nav" id="navList">
      <a href="#about" class="nav-link" data-nav>${t.nav.about}</a>
      <a href="#experience" class="nav-link" data-nav>${t.nav.experience}</a>
      <a href="#skills" class="nav-link" data-nav>${t.nav.skills}</a>
      <a href="#certifications" class="nav-link" data-nav>${
				t.nav.certifications
			}</a>
      <a href="#education" class="nav-link" data-nav>${t.nav.education}</a>
      <a href="#contact" class="nav-link nav-link-cta" data-nav>${
				t.nav.contact
			}</a>
    </nav>
  </div>
</header>

<main>
<section class="hero" id="top">
  <div class="hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">${t.hero.role}</p>
      <h1 class="hero-name">${nameBr}</h1>
      <p class="hero-statement">${t.hero.statement}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${RESUME[lang].pdf}" download>${
		t.hero.ctaDownload
	}</a>
        <a class="btn btn-secondary" href="#contact">${t.hero.ctaContact}</a>
      </div>
      <p class="resume-lang-note"><a href="${
				RESUME[otherLang].pdf
			}" download class="resume-lang-link">${t.hero.ctaDownloadOther}</a></p>
    </div>
    <aside class="profile-card" aria-label="Professional profile summary">
      <div class="profile-card-header">
        <span class="profile-mark" aria-hidden="true">JS</span>
        <div>
          <p class="profile-name">${nameBr}</p>
          <p class="profile-role">${t.hero.role}</p>
        </div>
      </div>
      <dl class="profile-facts">
        ${t.hero.profileFacts
					.map(
						(f) =>
							`<div class="profile-fact"><dt>${f.label}</dt><dd>${f.value}</dd></div>`
					)
					.join("")}
      </dl>
    </aside>
  </div>
</section>

<section class="section" id="about">
  <div class="section-inner">
    <div class="section-head"><p class="eyebrow">${
			t.nav.about
		}</p><h2 class="section-title">${t.about.title}</h2></div>
    <div class="about-grid">
      <div class="about-summary">${t.about.paragraphs
				.map((p) => `<p>${p}</p>`)
				.join("")}</div>
      <div class="about-side">
        <div class="panel">
          <h3 class="panel-title">${t.about.softSkillsTitle}</h3>
          <ul class="tick-list">${t.about.softSkills
						.map((s) => `<li>${s}</li>`)
						.join("")}</ul>
        </div>
        <div class="panel">
          <h3 class="panel-title">${t.about.languagesTitle}</h3>
          <ul class="lang-list">${t.about.languages
						.map(
							(l) =>
								`<li><span>${l.name}</span><span class="lang-level lang-${l.cls}">${l.level}</span></li>`
						)
						.join("")}</ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt" id="experience">
  <div class="section-inner">
    <div class="section-head">
      <p class="eyebrow">${t.nav.experience}</p>
      <h2 class="section-title">${t.experience.title}</h2>
      <p class="section-dek">${t.experience.dek}</p>
    </div>
    <div class="ledger">${engagements}</div>
  </div>
</section>

<section class="section" id="skills">
  <div class="section-inner">
    <div class="section-head"><p class="eyebrow">${
			t.nav.skills
		}</p><h2 class="section-title">${t.skills.title}</h2></div>
    <div class="skill-table">${skillRows}</div>
  </div>
</section>

<section class="section section-alt" id="certifications">
  <div class="section-inner">
    <div class="section-head"><p class="eyebrow">${
			t.nav.certifications
		}</p><h2 class="section-title">${t.certifications.title}</h2></div>
    <div class="cert-grid">${certCards}</div>
  </div>
</section>

<section class="section" id="education">
  <div class="section-inner">
    <div class="section-head"><p class="eyebrow">${
			t.nav.education
		}</p><h2 class="section-title">${t.education.title}</h2></div>
    <div class="panel edu-panel">
      <div>
        <p class="edu-degree">${t.education.degree}</p>
        <p class="edu-school">${t.education.school}</p>
      </div>
      <p class="edu-date">${t.education.date}</p>
    </div>
  </div>
</section>

<section class="section section-alt" id="contact">
  <div class="section-inner">
    <div class="section-head">
      <p class="eyebrow">${t.nav.contact}</p>
      <h2 class="section-title">${t.contact.title}</h2>
      <p class="section-dek">${t.contact.dek}</p>
    </div>
    <div class="contact-panel">
      <div class="contact-links" id="contactMethods">
        <a class="contact-link" id="contactLinkedin" href="#" target="_blank" rel="noopener">
          <span class="contact-link-label">${
						t.contact.linkedinLabel
					}</span><span class="contact-link-value">${
		CONTACT.linkedinDisplay
	}</span>
        </a>
        <a class="contact-link" id="contactGithub" href="#" target="_blank" rel="noopener">
          <span class="contact-link-label">${
						t.contact.githubLabel
					}</span><span class="contact-link-value">${
		CONTACT.githubDisplay
	}</span>
        </a>
        <div class="contact-link contact-link-static">
          <span class="contact-link-label">${
						t.contact.locationLabel
					}</span><span class="contact-link-value">${
		t.contact.locationValue
	}</span>
        </div>
      </div>
      <p class="contact-note">${t.contact.note}</p>
    </div>
  </div>
</section>
</main>

<footer class="footer">
  <div class="section-inner footer-inner">
    <p>© <span id="year"></span> ${t.hero.name}. ${t.footer.rights}</p>
    <a href="#top" class="back-top">${t.footer.backTop}</a>
  </div>
</footer>`;
}

// =========================================================
// MAIN RENDER + WIRE-UP
// =========================================================
function render() {
	const app = document.getElementById("app");
	const t = CONTENT[STATE.lang];
	document.documentElement.lang = STATE.lang;
	document.body.setAttribute("data-theme", STATE.theme);

	app.innerHTML =
		STATE.theme === "console"
			? renderConsole(t, STATE.lang)
			: renderCorporate(t, STATE.lang);

	// contact links
	const linkedin = document.getElementById("contactLinkedin");
	const github = document.getElementById("contactGithub");
	if (linkedin) linkedin.href = CONTACT.linkedin;
	if (github) github.href = CONTACT.github;

	// footer year
	const yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// mobile menu (console)
	const tabToggle = document.getElementById("tabToggle");
	const tabList = document.getElementById("tabList");
	if (tabToggle && tabList) {
		tabToggle.addEventListener("click", () => {
			const isOpen = tabList.classList.toggle("open");
			tabToggle.setAttribute("aria-expanded", String(isOpen));
		});
		tabList.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				tabList.classList.remove("open");
				tabToggle.setAttribute("aria-expanded", "false");
			});
		});
	}

	// mobile menu (corporate)
	const navToggle = document.getElementById("navToggle");
	const navList = document.getElementById("navList");
	if (navToggle && navList) {
		navToggle.addEventListener("click", () => {
			const isOpen = navList.classList.toggle("open");
			navToggle.setAttribute("aria-expanded", String(isOpen));
		});
		navList.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				navList.classList.remove("open");
				navToggle.setAttribute("aria-expanded", "false");
			});
		});
	}

	// scroll-spy active nav/tab
	const sections = document.querySelectorAll("main .section, main .hero");
	const navEls = document.querySelectorAll("[data-tab], [data-nav]");
	if ("IntersectionObserver" in window && sections.length) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						navEls.forEach((el) =>
							el.classList.toggle(
								"active",
								el.getAttribute("href") === `#${entry.target.id}`
							)
						);
					}
				});
			},
			{ rootMargin: "-45% 0px -50% 0px", threshold: 0 }
		);
		sections.forEach((s) => {
			if (s.id) observer.observe(s);
		});
	}

	updateToggleUI();
}

function updateToggleUI() {
	document.querySelectorAll("[data-set-theme]").forEach((btn) => {
		btn.classList.toggle("prefs-active", btn.dataset.setTheme === STATE.theme);
	});
	document.querySelectorAll("[data-set-lang]").forEach((btn) => {
		btn.classList.toggle("prefs-active", btn.dataset.setLang === STATE.lang);
	});
}

// =========================================================
// TOGGLE BAR WIRE-UP (persistent, outside #app)
// =========================================================
document.querySelectorAll("[data-set-theme]").forEach((btn) => {
	btn.addEventListener("click", () => {
		STATE.theme = btn.dataset.setTheme;
		savePrefs();
		render();
	});
});
document.querySelectorAll("[data-set-lang]").forEach((btn) => {
	btn.addEventListener("click", () => {
		STATE.lang = btn.dataset.setLang;
		savePrefs();
		render();
	});
});

render();
