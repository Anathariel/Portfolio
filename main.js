// ---------------------- TEMPLATE BIO ---------------------- \\

const bios = document.querySelector("#bios").content.cloneNode(true);
const bioEl = document.querySelector(".bio");
const options = document.querySelector(".bio-length-options");
const defaultBio = bios.querySelector('[data-length="long"]');
bioEl.innerHTML = defaultBio.innerHTML;

options.addEventListener("change", (e) => {
  const selectedBio = bios.querySelector(`[data-length=${e.target.value}]`);
  bioEl.innerHTML = selectedBio.innerHTML;
});

// ---------------------- TEMPLATE SKILLS ---------------------- \\

const skills = document.querySelector("#skills");
const skillDetails = skills.querySelector("#skillsdetails");
const skillRecap = skills.querySelector(".skillsRecap");
const option = skills.querySelectorAll(".skill-input");

const skillsR = document.querySelector("#skillsR").content.cloneNode(true);
const defaultSkill = skillsR.querySelector(`[data-name="front"]`);
const detailsParagraph = document.querySelector("#softSkillsBio");

skillRecap.innerHTML = defaultSkill.innerHTML;

option.forEach((option) => {
  option.addEventListener("change", (e) => {
    const selectedSkill = skillsR.querySelector(`[data-name="${e.target.value}"]`);
    skillRecap.innerHTML = selectedSkill.innerHTML;
  });
});


// ---------------------- TEMPLATE PROJECTS ---------------------- \\

const projectItems = document.querySelector("#project-items").content.cloneNode(true);
const projectEl = document.querySelector("#projectsChecked");
const proOptions = document.querySelector(".project-list-elements");
const defaultProject = projectItems.querySelector('[data-project-name="inkfection"]');
projectEl.appendChild(defaultProject.cloneNode(true));

proOptions.addEventListener("change", (e) => {
  const selectedProject = projectItems.querySelector(`[data-project-name="${e.target.value}"]`);
  projectEl.innerHTML = "";
  projectEl.appendChild(selectedProject.cloneNode(true));
});





// ---------------------- LANGUAGE SWITCHER ---------------------- \\

var languageSwitcherButton = document.getElementById('language-switcher');

languageSwitcherButton.addEventListener('click', function () {
  // Get the current URL of the page
  var currentURL = window.location.href;

  // Check if already in French
  if (currentURL.indexOf('indexfr.html') > -1) {
    window.location.href = 'index.html';
  } else {
    window.location.href = 'indexfr.html';
  }
});