class ScrollTrigger {
    constructor(selector, callback, windowFactor = 0, itemFactor = 0) {
        this.items = [];
        this.selector = selector;
        this.activateItem = callback;
        this.windowFactor = windowFactor;
        this.itemFactor = itemFactor;
        this.init();
    }

    init() {
        let self = this;
        $(this.selector).each(function () {
            self.items.push({
                item: $(this),
                active: false
            })
        });
        this.activateItemsInWindowScope();
        $(document).scroll(() => { this.activateItemsInWindowScope(); });
    }

    activateItemsInWindowScope() {
        let self = this;
        $(this.items).each(function () {
            let item = $(this.item);
            let scrollOffset = $(window).scrollTop() + $(window).height() * self.windowFactor;
            let itemOffset = item.offset().top + item.height() * self.itemFactor;
            if (!this.active && scrollOffset >= itemOffset) {
                this.active = true;
                self.activateItem(item);
            }
        });
    }
}
