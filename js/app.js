const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//console.log(secBtns);
//console.log(secBtn);
//console.log(secBtn.length);

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < secBtn.length; i++){
        
        secBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
            
            let currentSec = document.querySelectorAll('.active');
            currentSec[0].className = currentSec[0].className.replace('active', '');
            sections[i].classList.add('active');
        })
        //console.log(secBtn[i]);
    }
    
}


PageTransitions();