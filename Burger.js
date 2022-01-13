
function sliderBurger(icon, list) {
   let burgerIcon = document.querySelector(icon);
   burgerIcon.addEventListener('click', ()=>{
      let menu = document.querySelector(list);
      if (menu.classList.contains('hide')) {
         menu.classList.remove('hide');
      } else {
         menu.classList.add('hide');
      }
   });
}



function iconImg (bu_ico){
   let buttonColor = document.querySelector(bu_ico);
   buttonColor.addEventListener('mousemove', (event)=>{
      buttonColor.innerHTML = `${event.clientX} <br> ${event.clientY}`;
      if (event.clientX <= 15) {
         buttonColor.style.cssText = `background-color: red; transition: 0.5s ease-out;`;
      } else if (event.clientX <= 30) {
         buttonColor.style.cssText = `background-color: green; transition: 0.5s ease-out;`;
      } else if (event.clientX <= 45) {
         buttonColor.style.cssText = `background-color: blue; transition: 0.5s ease-out;`;
      } else {
         buttonColor.style.cssText = `background-color: yellow; transition: 0.5s ease-out;`;
      }
   });
}


function btnLights (nav1, nav2){
   let btn1 = document.querySelector(nav1);
   btn1.addEventListener('mousemove', (event)=>{
      btn1.innerHTML = `<a class="headerLink" href="#main">${event.clientX}</a>`;
      if (event.clientX <=1410) {
         btn1.style.cssText = `background-color: green; transition: 0.5s ease-out;`;
      } else if (event.clientX <=1430) {
         btn1.style.cssText = `background-color: red; transition: 0.5s ease-out;`;
      } else {
         btn1.style.cssText = `background-color: gold; transition: 0.5s ease-out;`;
      }
   });
   let btn2 = document.querySelector(nav2);
   btn2.addEventListener('mousemove', (event)=>{
      btn2.innerHTML = `<a class="headerLink" href="#footer">${event.clientX}</a>`;
      if (event.clientX <=1350) {
         btn2.style.cssText = `background-color: red; transition: 0.5s ease-out;`;
      } else if (event.clientX <=1375) {
         btn2.style.cssText = `background-color: green; transition: 0.5s ease-out;`;
      } else {
         btn2.style.cssText = `background-color: gold; transition: 0.5s ease-out;`;
      }
   });}






iconImg('.burgerIcon');
sliderBurger('.burgerIcon', '.burger-list');
btnLights('.nav1', '.nav2');



