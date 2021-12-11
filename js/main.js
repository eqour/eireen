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
