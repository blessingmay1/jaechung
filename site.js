
(function () {
  const d = window.SITE_DATA;
  if (!d) return;

  function text(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  text("profile-name", d.profile.name);
  text("profile-title", d.profile.title);
  text("profile-affiliation", d.profile.affiliation);
  text("profile-award", d.profile.award);
  text("profile-hero", d.profile.hero);

  document.querySelectorAll("[data-rice-link]").forEach(a => a.href = d.profile.links.riceBusiness);
  document.querySelectorAll("[data-scholar-link]").forEach(a => a.href = d.profile.links.googleScholar);
  document.querySelectorAll("[data-linkedin-link]").forEach(a => a.href = d.profile.links.linkedin);
  document.querySelectorAll("[data-researchgate-link]").forEach(a => a.href = d.profile.links.researchGate);
  document.querySelectorAll("[data-email-display]").forEach(el => el.textContent = d.profile.emailDisplay);

  const footer = document.querySelector(".footer-inner");
  if (footer && !footer.querySelector(".professional-links")) {
    const links = document.createElement("span");
    links.className = "professional-links";
    links.innerHTML =
      '<a data-rice-link target="_blank" rel="noopener">Rice Business</a>' +
      '<span> · </span>' +
      '<a data-scholar-link target="_blank" rel="noopener">Google Scholar</a>' +
      '<span> · </span>' +
      '<a data-linkedin-link target="_blank" rel="noopener">LinkedIn</a>' +
      '<span> · </span>' +
      '<a data-researchgate-link target="_blank" rel="noopener">ResearchGate</a>';
    footer.appendChild(links);
    links.querySelector("[data-rice-link]").href = d.profile.links.riceBusiness;
    links.querySelector("[data-scholar-link]").href = d.profile.links.googleScholar;
    links.querySelector("[data-linkedin-link]").href = d.profile.links.linkedin;
    links.querySelector("[data-researchgate-link]").href = d.profile.links.researchGate;
  }
})();
