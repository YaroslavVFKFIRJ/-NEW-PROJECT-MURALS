'use strict';
let section=document.querySelector('.section');
let wind=document.querySelector('.wind');
let BrushWindow=document.querySelector(".wind_author");
let background=document.querySelector('.background');
let buts=document.querySelectorAll('.but');
let Brushes=document.querySelectorAll(".brush");
let BrushP=document.querySelector(".brush_p");
section.onclick=()=>{
    wind.classList.add('viswind');
    background.classList.add('visback');
}
buts.forEach(el=>{
    el.onclick=()=>{
    wind.classList.remove('viswind');
    BrushWindow.classList.remove("viswind")
    background.classList.remove('visback');
}})
Brushes.forEach(el=>{
el.onclick=()=>{
    let authors= el.getAttribute("data-autor");
    BrushP.innerHTML=authors.substring(1);
    console.log(authors);
    BrushWindow.classList.add('viswind');
    background.classList.add('visback');
}
}
)
