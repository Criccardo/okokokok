import React from 'react';

import './stileMenu.css';



export const Menu = () =>{

    const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});

     return(   
        <menu>
            <button class="action"></button>
            <button class="action"></button>
            <button class="action"></button>
            <button class="action"></button>
            <button class="trigger"></button>
        </menu>
     )
}