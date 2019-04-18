let mainUl = document.querySelector('.tree');
let allLiElements = [...document.querySelectorAll('li')];

allLiElements.forEach(el => {
    let currentText = el.firstChild.textContent;
        el.firstChild.remove();
        el.insertAdjacentHTML('afterbegin', `<span>${currentText}</span>`);
})

mainUl.addEventListener('mouseover', event => {
    let target = event.target
    if(target.tagName === 'SPAN') {
        event.preventDefault();
        target.classList.add("bold-efect");
    };
});

mainUl.addEventListener('mouseout', event => {
    let target = event.target
    if(target.tagName === 'SPAN') {
        event.preventDefault();
        target.classList.remove("bold-efect");
    };
});

mainUl.addEventListener('click', event =>{
    let target = event.target;
    if (target.tagName === 'SPAN') {
        if(target.nextSibling !== null) {
            if(target.nextSibling.tagName === 'UL') {
                target.nextSibling.classList.toggle('hidden');
            };
        };
    };
}); 

function IsClass (el) {

}