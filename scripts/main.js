var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hs-logo1.jpg') {
      myImage.setAttribute ('src','images/logo2.jpg');
    } else {
      myImage.setAttribute ('src','images/hs-logo1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Приветствуем Вас на проекте Hypnotic Sessions, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветствуем Вас на проекте Hypnotic Sessions, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }