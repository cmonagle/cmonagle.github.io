/** Make contact block minimize on scroll **/
var ctaScroll = {
    $elem: document.querySelector('.cta'),

    init: function() {
        var that = this;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                that.$elem.classList.add('cta--fixed');
            } else {
                that.$elem.classList.remove('cta--fixed');
            }
        })
    }
}


/** Left and Right arrowkeys to navigate projects**/

var postNav = {
    config: {
        $prev: document.querySelector('.project__nav-arrow--prev'),
        $next: document.querySelector('.project__nav-arrow--next'),
    },

    init: function() {
        var that = this;
        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.keyCode == 37 && that.config.$prev != null) { /** left**/
                window.location = that.config.$prev.getAttribute('href');
            } else if (e.keyCode == 39 && that.config.$next != null) { /** right **/
                window.location = that.config.$next.getAttribute('href');
            }
        }
    }
}

/** Init **/

h.ready(function() {

    ctaScroll.init();
    postNav.init();

});
