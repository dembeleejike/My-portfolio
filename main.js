







console.log("Hello World!");

document.addEventListener("DOMContentLoaded", () => {

  /* DARK/LIGHT TOGGLE */
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  if(toggle){
    toggle.onclick = () => {
      if(body.classList.contains("light")){
        body.classList.replace("light","dark");
        toggle.textContent="☀";
      } else {
        body.classList.replace("dark","light");
        toggle.textContent="🌙";
      }
    };
  }

  
  const heroText = ["Web Developer","Computer Scientist","Software Engineer"];
  let heroIndex = 0, heroLetter = 0;
  const typingSpeed = 120, erasingSpeed = 80, pauseTime = 1500;
  const heroElement = document.getElementById("typing");

  function typeHero(){
    if(!heroElement) return;
    const current = heroText[heroIndex];
    if(heroLetter < current.length){
      heroElement.textContent += current.charAt(heroLetter);
      heroLetter++;
      setTimeout(typeHero, typingSpeed);
    } else {
      setTimeout(eraseHero, pauseTime);
    }
  }

  function eraseHero(){
    if(!heroElement) return;
    const current = heroText[heroIndex];
    if(heroLetter > 0){
      heroElement.textContent = current.substring(0, heroLetter - 1);
      heroLetter--;
      setTimeout(eraseHero, erasingSpeed);
    } else {
      heroIndex = (heroIndex + 1) % heroText.length;
      setTimeout(typeHero, 500);
    }
  }

  if(heroElement) setTimeout(typeHero, 500);

  
  const ctaText = [
    "Get me through feedback 😜",
    "Reach out via email",
    "Let's build something amazing"
  ];
  const ctaElement = document.getElementById("cta-typing");
  let ctaPhraseIndex = 0, ctaLetterIndex = 0;
  const typingSpeedCTA = 80, pauseBetweenPhrases = 500;

  function typeCTA(){
    if(!ctaElement) return;
    if(ctaPhraseIndex >= ctaText.length) return; // stop after last phrase

    const current = ctaText[ctaPhraseIndex];

    if(ctaLetterIndex < current.length){
      ctaElement.textContent += current.charAt(ctaLetterIndex);
      ctaLetterIndex++;
      setTimeout(typeCTA, typingSpeedCTA);
    } else {
      // only add a new line if not last phrase
      if(ctaPhraseIndex < ctaText.length - 1) ctaElement.textContent += "\n";
      ctaPhraseIndex++;
      ctaLetterIndex = 0;
      setTimeout(typeCTA, pauseBetweenPhrases);
    }
  }

  if(ctaElement) setTimeout(typeCTA, 1000);

  /* SKILLS ANIMATION */
  function animateSkills(){
    document.querySelectorAll(".progress").forEach(skill => {
      const width = skill.getAttribute("data-progress") || "80%";
      skill.style.width = width;
    });
  }

  /* SCROLL REVEAL */
  function reveal(){
    document.querySelectorAll(".reveal").forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
      if(elementTop < windowHeight - revealPoint){
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", () => {
    reveal();
    animateSkills();
  });

  window.addEventListener("load", () => {
    reveal();
    animateSkills();
  });

  /* PARTICLES */
  if(typeof particlesJS !== "undefined"){
    particlesJS("particles-js",{
      particles:{
        number:{value:80},
        size:{value:3},
        move:{speed:2},
        line_linked:{enable:true}
      }
    });
  }

  /* HAMBURGER */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if(hamburger){
    hamburger.onclick = () => navLinks.classList.toggle("active");
  }

});
