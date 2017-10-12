var questions = document.querySelectorAll('.question');
for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    question.addEventListener('click', function (event) {
                  
            
            var targetElement = event.target;

            var allAnswers = targetElement.parentNode.querySelectorAll('.answer');           
            if (allAnswers[0].style.display=="block"){
                allAnswers[0].style.display="none";
            }
            else { 
            allAnswers[0].style.display="block";
            }
            

            var allCaretsLeft = targetElement.parentNode.querySelectorAll('.icon-caret-left');
            if (allCaretsLeft[0].style.display=="none"){
                allCaretsLeft[0].style.display="block";
            }
            else { 
                allCaretsLeft[0].style.display="none";
            }
                
           

            var allCaretsDown = targetElement.parentNode.querySelectorAll('.icon-caret-down');
            if (allCaretsDown[0].style.display=="block"){
                allCaretsDown[0].style.display="none";
            }
            else { 
                allCaretsDown[0].style.display="block";
            }
    
            
        }
    
    );
}
