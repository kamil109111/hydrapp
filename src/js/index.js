import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glassCounter = document.querySelector(".glassCounter--js");
const addGlass = document.querySelector(".addGlass--js");
const deleteGlass = document.querySelector(".deleteGlass--js");
const key = new Date().toISOString().slice(0, 10);

  let glass = localStorage.getItem(`${key}`);
  if (glass) {
    glassCounter.innerHTML = glass;
  } else {
    localStorage.setItem(`${key}`, 0);    
    glassCounter.innerHTML = 0;    
  }  

  addGlass.addEventListener('click', () => {
      glass++;     
      localStorage.setItem(`${key}`, glass); 
      glassCounter.innerHTML = glass;
  })

  deleteGlass.addEventListener('click', () => {
    if (glass > 0){
    glass--;    
    localStorage.setItem(`${key}`, glass); 
    glassCounter.innerHTML = glass;
    }   
})
  
