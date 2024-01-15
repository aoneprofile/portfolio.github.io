'use strict'

const onButtonEvent = document.querySelector('.action');

onButtonEvent.addEventListener('click', function() {
    document.body.classList.toggle('layout a');
    document.body.classList.toggle('layout b');

    const className = document.body.className;
    if (className == 'a') {
        this.textContent = 'layout a';
    } else {
        this.textContent = 'layout b';
    }

    console.log('corrent class name' + className);

})