$(document).ready(function() {
    showItemsInWindowScope();
    $(document).scroll(showItemsInWindowScope);
});

function showItemsInWindowScope() {
    $('.fade-in-item').each(function () {
        let scrollPosition = $(window).scrollTop() + $(window).height() / 1.25;
        let element = $(this);
        if (element.css('opacity') == 0 && scrollPosition >= element.offset().top) {
            element.css('marginLeft', '+=50');
            element.animate({
                opacity: 1,
                marginLeft: '-=50'
            }, 700);
        }
    });
}
