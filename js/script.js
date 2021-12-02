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
    console.log(body);
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
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