document.addEventListener('DOMContentLoaded', function(){ 
    const btsNav = document.querySelectorAll('.button-nav'),
          blockContent = document.querySelectorAll('.wrapper-block');
    const classArray= ['button-nav__registration-selected', 'button-nav__visibility-and-access-selected', 'button-nav__beginning-of-work-selected'];
    const questionButton = document.querySelectorAll('.question-button'),
          answerToTheQuestion = document.querySelectorAll('.block-answer');
    
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
         });
    });
    
    questionButton.forEach((item, i) =>{
        item.addEventListener('click', function(e) {
            e.preventDefault();
            answerToTheQuestion[i].classList.toggle('hide');
            item.classList.toggle('open');
        })
    })
    
    function closingBlocksWithInformation(block){
        block.forEach((item, i) =>{
            item.classList.add('hide');
            questionButton[i].classList.remove('open');
        })
    }


 });