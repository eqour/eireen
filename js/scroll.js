////let fadeInItems = [];

////$(document).ready(function() {
////    if (isMobile()) {
////        $('.fade-in-item').each(function() {
////            showItem2($(this));
////        });
////    } else {
////        $('.fade-in-item').each(function() {
////            fadeInItems.push({
////                item: $(this),
////                visible: false
////            })
////        });
////        showItemsInWindowScope();
////        $(document).scroll(showItemsInWindowScope);
////    }
////});

////function showItemsInWindowScope() {
////    $(fadeInItems).each(function () {
////        let scrollPosition = $(window).scrollTop() + $(window).height() / 1.25;
////        let item = $(this.item);
////        if (!this.visible && scrollPosition >= item.offset().top) {
////            this.visible = true;
////            showItem2(item);
////        }
////    });
////}

////function showItem2(item) {
////    item.css('marginLeft', '+=50');
////    item.animate({
////        opacity: 1,
////        marginLeft: '-=50'
////    }, 700);
////}

class ItemInteractor {

    constructor(selector, callback, proportions = 0.25) {
        this.items = [];
        this.activateProportions = proportions;
        this.selector = selector;
        this.activateItem = callback;
        this.init();
    }

    init() {
        if (isMobile()) {
            $(this.selector).each(function () {
                this.activateItem($(this));
            });
        } else {
            let items = this.items;
            $(this.selector).each(function () {
                items.push({
                    item: $(this),
                    active: false
                })
            });
            this.activateItemsInWindowScope();
            $(document).scroll(() => { this.activateItemsInWindowScope(); });
        }
    }

    activateItemsInWindowScope() {
        let proportions = this.activateProportions;
        let activateItem = this.activateItem;
        $(this.items).each(function () {
            let scrollPosition = $(window).scrollTop() + $(window).height() - $(window).height() * proportions;
            let item = $(this.item);
            if (!this.active && scrollPosition >= item.offset().top + item.height() / 2) {
                this.active = true;
                activateItem(item);
            }
        });
    }
}

function isMobile() {
    return navigator.userAgent.match(/iPod|iPhone|iPad|Android/);
}

let fadeInteractor = new ItemInteractor('.fade-in-item', function (item) {
    item.css('marginLeft', '+=50');
    item.animate({
        opacity: 1,
        marginLeft: '-=50'
    }, 700);
});

let circleInteractor = new ItemInteractor('.circle-item', function (item) {
    item.css('clip-path', 'circle(100%)');
}, 0.5);
