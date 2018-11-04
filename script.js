// Refresh web page for DEV
// var timeout = 10000;
// setTimeout(() => {
//     document.location.reload(true);
// }, timeout);

/**
 * Toggle navigation bar
 * @author BDY
 */
var toggleNavigationBar = function () {
    const mainNav = document.getElementById('js-menu');
    const toggleButton = document.getElementById('js-nav-toggle');
    toggleButton.addEventListener('click', () => {
        mainNav.classList.toggle('active')
    });
};

toggleNavigationBar();
