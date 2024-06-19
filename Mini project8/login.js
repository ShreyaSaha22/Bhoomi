const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose= document.querySelector('.icon-close');

 registerLink.addEventListener('click', ()=>{
     wrapper.classList.add('active');
 });

 loginLink.addEventListener('click', ()=>{
     wrapper.classList.remove('active');
 });

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.style.display = "none";
});

/*const  btn = document.querySelector('#btn');
const  box = document.querySelector('#box');

const  btn1 = document.querySelector('#btn1');
const  box1 = document.querySelector('#box1');

const  icn = document.querySelector('#icn');
const  icn1 = document.querySelector('#icn1');

btn.addEventListener("click", ()=> {
    box.style.display = "inline-block";
    box1.style.display = "none";
})

icn.addEventListener("click", ()=> {
    box.style.display = "none";
})

icn1.addEventListener("click", ()=> {
    box1.style.display = "none";
})  

btn1.addEventListener("click", ()=> {
    box1.style.display = "inline-block";
    box.style.display = "none";
})*/