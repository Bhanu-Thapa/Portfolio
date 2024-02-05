let leaf = document.querySelector('.leaf');
let hill1 = document.querySelector('.hill1');
let hill4 = document.querySelector('.hill4');
let hill5 = document.querySelector('.hill5');

// text parallax

let text = document.querySelector('.text');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  leaf.style.left = `${value * 1.5}px`;
  leaf.style.top = `-${value * 1.5}px`;
  text.style.top = `${value * 1 + 82}px`;
  hill1.style.top = `${value * 1.5}px`;
  hill4.style.left = `${-value * 1.5}px`;
  hill5.style.left = `${value * 1.5}px`;
});

// project slider

let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');

let projectImg = document.querySelector('.project-img');
let projectList = document.querySelector('.project-list');
let projectCart = document.querySelectorAll('.project-cart');

let projectThumnail = document.querySelector('.project-thumnail');
let proThumCard = projectThumnail.querySelectorAll('.pro-thum-card');

count = 0;
rightArrow.addEventListener('click', () => {
  if (count < projectCart.length - 1) {
    console.log(proThumCard);
    console.log(proThumCard[count]);
    projectThumnail.appendChild(proThumCard[count]);
    count++;
    console.log(projectCart[count]);
    projectList.appendChild(projectCart[count]);
    projectCart[count].style.zIndex = '1';
    projectImg.classList.add('next');
  } else {
    projectThumnail.appendChild(proThumCard[count]);
    count = 0;
    projectList.appendChild(projectCart[count]);
    projectCart[count].style.zIndex = '1';
    projectImg.classList.add('next');
  }
});

// TEXT EFFECT

let texteffect = document.querySelector('.texteffect');

function textAnimation() {
  setTimeout(() => {
    texteffect.textContent = 'SOFTWARE DEVELOPER';
  }, 0);

  setTimeout(() => {
    texteffect.textContent = 'CONTENT CREATOR';
  }, 5000);
}
textAnimation();

setInterval(textAnimation, 10000);

// ALERT team and blog

let team = document.querySelector('.team');
let blog = document.querySelector('.blog');

team.addEventListener('click', progress);
blog.addEventListener('click', progress);

function progress() {
  alert('Site is under Progress 🛠');
}

function lk() {
  alert(
    "My Account is closed by linkedin, Verification going on, i'll get back soon🙌"
  );
}

// SCROLL BAR

let progressbar = document.querySelector('.probar');

let dochigh = document.documentElement.scrollHeight;
let viewport = document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
  scroy = scrollY;
  let per = (scroy / (dochigh - viewport)) * 100;
  progressbar.style.width = `${per}%`;
  progressbar.style.backgroundColor = '#00daae';
});

// MEDIA QUERY JS

let mediaQuery = window.matchMedia('(max-width:780px)');

if (mediaQuery.matches) {
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    leaf.style.left = `${value * 1.5 - 360}px`;
    leaf.style.top = `-${value * 1.5}px`;
    text.style.top = `${value * 1 + 224}px`;
    hill1.style.top = `${value * 1.5 + 260}px`;
    hill4.style.left = `${-value * 1.5}px`;
    hill5.style.left = `${value * 1.5 - 110}px`;
  });
}

// function checkMediaQuery() {

// }
// CONTACT EFFECT

// let namefield = document.querySelector('.namefield');
// let emailfield = document.querySelector('.emailfield');
// let namef = namefield.querySelector('.namef');
// let emailf = emailfield.querySelector('.emailf');

// namefield.addEventListener('click', fieldeEffect);
// emailfield.addEventListener('click', efieldeEffect);

// function fieldeEffect() {
//   namef.style.top = '-24%';
//   namef.style.fontSize = '18px';
//   namef.style.color = 'rgb(196, 196, 196)';
//   namef.style.borderLeft = '1px solid white';
//   namef.style.borderRight = '1px solid white';
//   namef.style.paddingRight = '4px';
//   namef.style.paddingLeft = '4px';
// }

// function efieldeEffect() {
//   emailf.style.top = '-24%';
//   emailf.style.fontSize = '18px';
//   emailf.style.color = 'rgb(196, 196, 196)';
//   emailf.style.borderLeft = '1px solid white';
//   emailf.style.borderRight = '1px solid white';
//   emailf.style.paddingRight = '4px';
//   emailf.style.paddingLeft = '4px';
// }

// let idname = document.querySelector('#idname');
// let idemail = document.querySelector('#email');

// window.addEventListener('click', () => {
//   if (idname.value != '') {
//     namef.style.fontSize = '18px';
//   } else {
//     namef.style.top = '22%';
//     namef.style.fontSize = '23px';
//   }
// });
