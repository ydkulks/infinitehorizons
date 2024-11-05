// Registration validation
var regForm = document.getElementById('registrationForm')
regForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let flag = 0

  let current = new Date();
  const contact = document.getElementById('rfContact').value
  const dobElement = document.getElementById('rfDob')
  let dob = new Date(dobElement.value);
  const password = document.getElementById('rfPassword').value

  function errMsg(id, msg) {
    let errorMessage = document.getElementById(id);
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
  }

  if (contact.length <= 10 || contact.length > 15) {
    errMsg('contactError', 'Enter valid phone number.')
  } else {
    let contactError = document.getElementById('contactError');
    contactError.style.display = 'none';
    flag = flag + 1
  }

  if (dob < current) {
    let dobError = document.getElementById('dobError');
    dobError.style.display = 'none';
    flag = flag + 1
  } else {
    errMsg('dobError', 'Enter valid date-of-birth.')
  }

  // Password validation
  if (password.length > 8) {
    let pwdError1 = document.getElementById('pwdError1');
    pwdError1.style.display = 'none';
    flag = flag + 1
  } else {
    errMsg('pwdError1', 'Password length should be greater than 8.')
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    let pwdError2 = document.getElementById('pwdError2');
    pwdError2.style.display = 'none';
    flag = flag + 1
  } else {
    errMsg('pwdError2', 'Password should contain special characters.');
  }
  if (password.match(/[A-Z]/)) {
    let pwdError3 = document.getElementById('pwdError3');
    pwdError3.style.display = 'none';
    flag = flag + 1
  } else {
    errMsg('pwdError3', 'Password should contain atleast one capital letter.')
  }

  if (flag === 5){
    window.location.href = "login.html"
  }
})
