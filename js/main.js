$(document).ready(function() {
    let listTrigger = new ScrollTrigger('.fade-in-item', function (item) {
        item.css('marginLeft', '+=50');
        item.animate({
            opacity: 1,
            marginLeft: '-=50'
        }, 700);
    }, 0.75);
    
    let sloganTrigger = new ScrollTrigger('.circle-item', function (item) {
        item.css('clip-path', 'circle(100%)');
    }, 0.6, 0.5);
});



let body = document.body;
let nav = document.querySelector(".page-header nav");
//const menu = document.querySelector(".page-header .menu");
//const lottiePlayer = document.querySelector("lottie-player");
let scrollUp = "scroll-up";
let scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        //console.log(1);
        return;
    }
    //console.log(body);
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown) && window.pageYOffset >= nav.clientHeight) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
        //console.log(nav.clientHeight); - 82px height
        //lottiePlayer.play();
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
        //lottiePlayer.stop();
    }
    lastScroll = currentScroll;
});