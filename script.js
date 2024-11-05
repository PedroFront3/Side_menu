const btn = document.querySelector('.toggle');
const side = document.querySelector('.side-menu');
const content = document.querySelector('.content');
const background = document.querySelector('.background');


btn.addEventListener('click', () => {
   side.classList.toggle('active');
   btn.classList.toggle('active');
   content.classList.toggle('active');
   background.classList.toggle('active');
   document.body.style.backgroundColor = side.classList.contains('active') ? '#34495e' : '#ecf0f1'
})

background.addEventListener('click', () => {
    side.classList.remove('active');
    btn.classList.remove('active');
    content.classList.remove('active');
    background.classList.remove('active');
    document.body.style.backgroundColor = "#ecf0f1"
})
