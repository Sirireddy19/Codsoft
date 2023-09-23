let nav=document.querySelector('nav');

//nav scroll...............
window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll',window.scrollY>0)
})