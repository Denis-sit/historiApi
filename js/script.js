document.addEventListener('DOMContentLoaded', function(){ 
    const btsNav = document.querySelectorAll('.button-nav'),
          blockContent = document.querySelectorAll('.wrapper-block');
    const classArray= ['button-nav__registration-selected', 'button-nav__visibility-and-access-selected', 'button-nav__beginning-of-work-selected'];
    const questionButton = document.querySelectorAll('.question-button'),
          answerToTheQuestion = document.querySelectorAll('.block-answer');
    const arrayHistori = ['=kak-vojti-v-konstruktor', '=kak-sdelat-tak-chtoby-moi-kollegi-tozhe-mogli-rabotat-s-konstruktorom' , 
                         '=mogut-li-kollegi-videt-moi-oprosy-i-oprosy-drug-druga', '=kak-predostavit-dostup-k-moemu-oprosu-kollege',
                         '=kak-nachat-rabotu-s-konstruktorom', '=kak-pobystree-osvoit-konstruktor'];
    const arrayHistori2 =['registration?answer', 'access?answer', 'start_work?answer'];
          
         
    history.pushState(null, null,  '/help');
          window.addEventListener('popstate', function(e) {s
            
        });
        window.history.back()
        btsNav.forEach((item, k) =>{
            item.addEventListener('click', function (e) {
                e.preventDefault();
                   btsNav.forEach((bts, i) =>{
                       bts.classList.remove(classArray[i]);
                       blockContent[i].classList.add('hide');
                   })    
                   item.classList.add(classArray[k]);
                   blockContent[k].classList.remove('hide');
                   closingBlocksWithInformation(answerToTheQuestion);
                   history.pushState('', '',  arrayHistori2[i]);
             });
        });
        
    
    questionButton.forEach((item, i) =>{
        item.addEventListener('click', function(e) {
            e.preventDefault();
            answerToTheQuestion[i].classList.toggle('hide');
            item.classList.toggle('open');
            history.pushState('', '',  arrayHistori[i]);
        })
    })
    
    function closingBlocksWithInformation(block){
        block.forEach((item, i) =>{
            item.classList.add('hide');
            questionButton[i].classList.remove('open');
        })
    }


 });