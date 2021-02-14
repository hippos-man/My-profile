window.addEventListener('DOMContentLoaded', (event) => {
    setSeeMoreButton();
    setCardOverray();
    resetCardOverray();
});

function setSeeMoreButton() {
    const seeMoreButton = document.querySelector('section#home button');
    const aboutSection = document.getElementById('about');
    seeMoreButton.addEventListener('click', (e) => {
        scrollToElement(aboutSection);
    });
}

function scrollToElement(element) {
    element.scrollIntoView();
}

function setCardOverray() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((element)=>{
        element.addEventListener('click' , (event) => {
            let target = event.srcElement.offsetParent.children[0];
            if (target.className == "overray"){
                turnOnCardOverray(target);
            }
        });
    });
}

function resetCardOverray() {
    window.onclick = function(event) {
        if (!event.srcElement.offsetParent.matches('.card')) {
            const overrays = document.querySelectorAll('.overray');
            overrays.forEach((e) => {
                e.style.display = "none";
            });
        }
    }
}

function turnOnCardOverray(target) {
    target.style.display = "flex";
}

function turnOffCardOveray(target) {
    target.style.display = "none";
}