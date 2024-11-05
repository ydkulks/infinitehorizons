// Login validation
var loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var flag = 0
  const password = document.getElementById('loginPassword').value

  function errMsg(id, msg) {
    let errorMessage = document.getElementById(id);
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
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

  // if (password.length < 8 && !/[^a-zA-Z0-9]/.test(password) && !password.match(/[A-Z]/)){
  //   window.location.href = "index.html"
  // }
  if (flag === 3){
    window.location.href = "index.html"
  }
})
