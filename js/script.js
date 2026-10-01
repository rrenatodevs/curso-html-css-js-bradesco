'use strict'

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Dark Mode";
    }
    else {
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});
