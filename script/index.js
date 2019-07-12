// js
const flexStart = document.querySelector(' [ data-flex-start ] ');
const flexStartDiv = document.querySelector('[data-flex-start-div]');
// magic time

flexStart.addEventListener('click', () =>{
    flexStartDiv.classList.toggle('hidden')
});