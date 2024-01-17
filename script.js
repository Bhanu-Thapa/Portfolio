let leaf = document.querySelector('.leaf');
let hill1 = document.querySelector('.hill1');
let hill4 = document.querySelector('.hill4');
let hill5 = document.querySelector('.hill5');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  console.log(value);
  leaf.style.left = `${value * 1.5}px`;
  leaf.style.top = `-${value * 1.5}px`;
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
