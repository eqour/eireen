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
});
