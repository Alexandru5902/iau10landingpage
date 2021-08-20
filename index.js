/* Navigare */
const navclick = document.querySelector('.nav-click');
const navitems = document.querySelector('.nav-list');
const navlinks = document.querySelectorAll('.nav-item');
const links = document.querySelectorAll('.nav-link');

navclick.addEventListener('click',function(){
   navitems.classList.toggle('active');
   navlinks.forEach((nav) => {
       nav.classList.toggle('active');
   })
   links.forEach((link) => {
       link.classList.toggle('active');
   })
});

/* Faq Section ( Aici in JS nu am mai scris in romana , dar codu e scris de mine xD ) */
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    const buton = question.querySelector('.faq-btn');
    buton.addEventListener('click',function(e){
        e.preventDefault();
        var answer = question.nextElementSibling;
        answer.classList.toggle('active');
    })
})