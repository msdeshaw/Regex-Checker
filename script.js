function regexChecker() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const testFirstLastLenth = /^[A-Z][a-z]+$/;
  
  if (firstName.match (testFirstLastLenth) && lastName.match (testFirstLastLenth) ) {
    alert("Yay! Your inputs were all correct!");
  } else {
    alert("Oh no! That's an invalid format!");
  }
}
