var myh1 = document.getElementById('but_1');
var myImage = document.querySelector('img');
myh1.onclick = function( ){
    var mySrc = myImage.getAttribute('src');
    switch (mySrc) {
        case 'images/new-1.jpg':
            console.log("Меням кубики на шарики");
            myImage.setAttribute ('src','images/new-2.jpg');
            break;
        case 'images/new-2.jpg':
            console.log("Меням шарики на кубики");
            myImage.setAttribute ('src','images/new-1.jpg');
            break;
    }
}

var myButton = document.getElementById('but_2');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }