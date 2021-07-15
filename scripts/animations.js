const fadeIn = document.querySelectorAll('.fadeUp-animation');

const appearOptions = {
}

const appearOnScreen = new IntersectionObserver(
  function(entries, appearOnScreen){
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fadeUp");
        appearOnScreen.unobserve(entry.target);
      }
    });
  }, appearOptions);

  fadeIn.forEach(fader => {
    appearOnScreen.observe(fader);
  }
  )