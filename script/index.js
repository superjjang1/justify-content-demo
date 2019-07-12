// js
const flexStart = document.querySelector(' [ data-flex-start ] ');
const flexStartDiv = document.querySelector('[data-flex-start-div]');
// magic time

flexStart.addEventListener('click', () =>{
    flexStartDiv.classList.toggle('hidden')
});

const flexEnd = document.querySelector('[data-flex-end]');
const flexEndDiv= document.querySelector('[data-flex-end-div]');

flexEnd.addEventListener('click', () =>{
    flexEndDiv.classList.toggle('hidden')
});

const flexCenter = document.querySelector('[data-flexcenter]');
const flexCenterBox = document.querySelector('[data-flexCenter-box]')

flexCenter.addEventListener('click', () =>{
    flexCenterBox.classList.toggle('hidden')
});

const flexSpaceAround = document.querySelector('[data-flex-space-around]');
const flexSpaceAroundBox = document.querySelector('[data-flex-space-around-box]')

flexSpaceAround.addEventListener('click', () =>{
    flexSpaceAroundBox.classList.toggle('hidden')
});

