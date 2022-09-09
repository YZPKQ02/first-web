// 点击切换图片
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/acm-icon.jpeg') {
        myImage.setAttribute('src', 'images/beng1.jpeg');
    } else {
        myImage.setAttribute('src', 'images/acm-icon.jpeg');
    }
}

// 切换用户按钮
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please input your name');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'hello, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome back, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}