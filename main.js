var NavLinks = document.querySelectorAll('.nav-link');
var circuses = document.querySelectorAll('.circle');


for (var i = 0; i < NavLinks.length; i++) {
    var navLink = NavLinks[i];
    navLink.addEventListener('click', function () {      
        for (var i = 0; i < circuses.length; i++) {
           var circle = circuses[i];
           circle.style.display='none';
        }
        var theLastChild = navLink.lastChild;
        theLastChild.style.display='block';   
      
    }
    );  
  }

  
