document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.change');
    const themeStylesheet = document.querySelector('#theme-stylesheet');

    themeToggle.addEventListener('click', function () {
        if (themeStylesheet.getAttribute('href') === './dark-theme.css') {
            themeStylesheet.setAttribute('href', ''); 
        } else {
            themeStylesheet.setAttribute('href', './dark-theme.css'); 
        }
    });
});