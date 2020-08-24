var head = document.getElementById('head');

window.onscroll = function () {

    if (window.pageYOffset > 100) {

        head.style.position = "fixed";
        head.style.top = 0;

    } else {

        head.style.position = 'relative';
        head.style.top = 100;
    }
}