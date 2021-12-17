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

    let partnersTrigger = new ScrollTrigger('.partner-logo', function (item) {
        item.css('marginTop', '+=50');
        item.animate({
            opacity: 1,
            marginTop: '-=50'
        }, 700);
    }, 0.75);

    let achievementsTrigger = new ScrollTrigger('#achievements', function () {
        $('.increase-number').each(function () {
            animateIncrease(this, Number.parseInt(this.getAttribute('data-max')));
        });
    }, 1, 0);

    if (window.pageYOffset >= nav.clientHeight) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
        //console.log(document.activeElement);
        
    }
    
});

function animateIncrease(item, number) {
    let counter = 0;
    let step = Math.ceil(number / 100);
    let handler = setInterval(() => {
        item.innerText = numberWithSpaces(counter);
        if (counter >= number) {
            clearInterval(handler);
        } else {
            counter += step;
        }
    }, (number > 100 ? 10 : 1000 / number));
}

function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let body = document.body;
let nav = document.querySelector(".page-header nav");
//const menu = document.querySelector(".page-header .menu");
//const lottiePlayer = document.querySelector("lottie-player");
let scrollUp = "scroll-up";
let scrollDown = "scroll-down";
let lastScroll = 0;
let timer = null;
let clck = false;

//document.getElementsByTagName("a").addEventListener("click", () => {
//    clck = true;
//})

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
    if (timer != null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        if (window.pageYOffset == 0)
            clck = false;
        if (clck) {
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
            clck = false;
        }
    }, 150)
    lastScroll = currentScroll;
});

function callback(e) {
    var e = window.e || e;

    if (e.target.tagName !== 'A')
        return;

    // Do something
    clck = true;
}

if (document.addEventListener)
    document.addEventListener('click', callback, false);
else
    document.attachEvent('onclick', callback);