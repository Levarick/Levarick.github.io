const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuList.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuList.classList.remove('open');
      menuOpen = false;
    }
  }
);