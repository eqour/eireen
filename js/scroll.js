let fadeInItems = [];

$(document).ready(function() {
    if (isMobile()) {
        $('.fade-in-item').each(function() {
            showItem($(this));
        });
    } else {
        $('.fade-in-item').each(function() {
            fadeInItems.push({
                item: $(this),
                visible: false
            })
        });
        showItemsInWindowScope();
        $(document).scroll(showItemsInWindowScope);
    }
});

function showItemsInWindowScope() {
    $(fadeInItems).each(function () {
        let scrollPosition = $(window).scrollTop() + $(window).height() / 1.25;
        let item = $(this.item);
        if (!this.visible && scrollPosition >= item.offset().top) {
            this.visible = true;
            showItem(item);
        }
    });
}

function showItem(item) {
    item.css('marginLeft', '+=50');
    item.animate({
        opacity: 1,
        marginLeft: '-=50'
    }, 700);
}

function isMobile() {
    return navigator.userAgent.match(/iPod|iPhone|iPad|Android/);
}
