import appearOnScreen from "./animations.js";
import Project from "./classes/Project.js";

var projects = [
  new Project({
    name: "BatataBit", 
    description: "First layout of a landing page using HTML5 and CSS Flexbox.",
    site: "https://levarick.github.io/BatataBit/",
    code: "https://github.com/Levarick/BatataBit",
    img: "./res/batatabit.png" }
  ),
  new Project({
    name: "Modern Interior Landing Page", 
    description: "Responsive landing page using HTML, CSS and JavaScript.",
    site: "https://levarick.github.io/interior-consultant/",
    code: "https://github.com/Levarick/interior-consultant",
    img: "./res/Interior.png" }
  ),
  new Project({
    name: "JS Basic Course", 
    description: "Result of the Basic JavaScript Course, calculation of perimeters and volumes, percentages and measures of central tendency.",
    site: "https://levarick.github.io/curso-practico-js/",
    code: "https://github.com/Levarick/curso-practico-js/",
    img: "./res/practicojs.png" }
  )
]

const projectsContainer = document.querySelector(".projects");

projects.map((projects) => {
  const view = `  
  <div class="project__card fadeUp-animation">
    <img src="${projects.img}" alt="">
    <div class="overflow">
    <div class="card__info">
      <h3>${projects.name}</h3>
      <p>${projects.description}</p>
    </div>
    <div class="buttons__container">
      <a href="${projects.site}" target="blank_" class="button--block">See project</a>
      <a href="${projects.code}" target="blank_" class="button--inline">See code</a>
    </div>
    </div>`
    projectsContainer.insertAdjacentHTML('beforeend', view)
  console.log(view);
  return view;
});

//ANIMATION
const fadeIn = document.querySelectorAll('.fadeUp-animation');

fadeIn.forEach(fader => {
  appearOnScreen.observe(fader);
});