
var btnForm = document.getElementById('btn-form');
btnForm.addEventListener('click', function (){
//     console.log('e');
    
//     var text= document.querySelectorAll('.form textarea');
//     for (var i = 0; i < text.length; i++){
       
//         var t=text[i];

//         var valueText='';
//         valueText += t.value;

//         if (data.text != null && data.text.value.length < 3)
//         {
//         alert('Заполните поле "Сообщение"');
//         return false;}

// }
var form = document.getElementById('form');
var elems = form.elements;
var error=document.getElementById('error');
console.log(elems);

  for (var i=0; i < elems.length; i++){
      var textarea=elems[i];
     var t=textarea.value.trim();
      console.log(textarea);
      if (t==''){
          console.log('fserf');
        textarea.style.border = '2px solid red';
        error.style.display = "block";
      } 
  }
}
);

