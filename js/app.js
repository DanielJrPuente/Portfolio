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
            //select the current button
            let currentBtn = document.querySelectorAll('.active-btn');
            //remove active-btn class from the current button
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            //Add active-btn class from new button
            this.className += 'active-btn';
            
            //select the current section
            let currentSec = document.querySelectorAll('.active');
            //remove active class from the current section
            currentSec[0].className = currentSec[0].className.replace('active', '');
            //Add active class from new section
            sections[i].classList.add('active'); 
        })
        //console.log(secBtn[i]);
    }
    
}


PageTransitions();