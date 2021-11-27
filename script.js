const btnNavEl = document.querySelector('.mobile-nav');
const navEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
     navEl.classList.toggle('nav-open');
});

