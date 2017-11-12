
let btnForm = document.getElementById('btn-form');
btnForm.addEventListener('click', function () {

  
  
   
  const mailError = document.getElementById('mail-error');
  const success = document.getElementById('success');
  const error = document.getElementById('error');
  let name = document.getElementById('name');
  let mail = document.getElementById('mail'); 
  let topic = document.getElementById('topic');
  let message = document.getElementById('message');
  let testForm = 0;
  let testEmail = 0;

 

  let nameValue = name.value.trim();
  if (nameValue == '') {
    name.style.border = '2px solid red';
    error.style.display = "block";
    success.style.display = "none";
  } else {
    testForm += 1;
    name.style.border = '1px solid #5dc5ef';
    if (testForm === 4) {
      error.style.display = "none";
    }
  }

  let mailValue = mail.value.trim();
  if (mailValue == '') {
    mail.style.border = '2px solid red';
    error.style.display = "block";
    success.style.display = "none";
  } else {
    testForm += 1;
    mail.style.border = '1px solid #5dc5ef';
    if (testForm === 4) {
      error.style.display = "none";
    }
  }
  if (mailValue.indexOf("@") == -1) {
    mailError.style.display = "block";
    mail.style.border = '2px solid red';
    success.style.display = "none";
  }
  else {
    testEmail += 1;
    if (testEmail === 2) {
      mailError.style.display = "none";
      mail.style.border = '1px solid #5dc5ef';
    }
  }
  if (mailValue.indexOf(".") == -1) {
    mailError.style.display = "block";
    mail.style.border = '2px solid red';
    success.style.display = "none";

  }
  else {
    testEmail += 1;
    if (testEmail === 2) {
      mailError.style.display = "none";
      mail.style.border = '1px solid #5dc5ef';
    }
  }

  let topicValue = topic.value.trim();
  if (topicValue == '') {
    topic.style.border = '2px solid red';
    error.style.display = "block";
    success.style.display = "none";
  } else {
    testForm += 1;
    topic.style.border = '1px solid #5dc5ef';
    if (testForm === 4) {
    error.style.display = "none";
    }
  }

  let messageValue = message.value.trim();
  if (messageValue == '') {
    message.style.border = '2px solid red';
    error.style.display = "block";
    success.style.display = "none";
  } else {
    testForm += 1;
    message.style.border = '1px solid #5dc5ef';
    if (testForm === 4) {
    error.style.display = "none";
    }
  }


  if (testEmail == 2 && testForm == 4) {
    success.style.display = "block";   
    
  }

});

