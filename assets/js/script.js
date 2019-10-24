new WOW().init();
$('.jarallax').jarallax({
    speed: 0.2
});
var timeout;
$('.hero--section').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);
});
$('.pg-1').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);
});
$('#cta--section--1').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);
});
$('#kontakt').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 100);
});

function callParallax(e) {
    parallaxIt(e, '.slide--1', -74);
    parallaxIt(e, '.sc--2', -30);
    parallaxIt(e, '.sc--3', -50);
    parallaxIt(e, '.sc--4', -10);
    parallaxIt(e, '.sc--5', -5);
    parallaxIt(e, '.sc--6', -20);
    parallaxIt(e, '.sc--7', 20);
    parallaxItTwo(e, '.ic--1', -70);
    parallaxItTwo(e, '.ic--2', 10);
    parallaxItTwo(e, '.ic--3', 40);
    parallaxItTwo(e, '.ic--4', -35);
    parallaxItTwo(e, '.ic--5', 32);

    parallaxItThree(e, '.ib--1', -10);
    parallaxItThree(e, '.ib--2', 10);
    parallaxItThree(e, '.ib--3', 33);
    parallaxItThree(e, '.ib--4', -40);
    parallaxItThree(e, '.ib--5', 16);
    parallaxItThree(e, '.ib--6', 40);
    parallaxItThree(e, '.ib--7', -28);
}
function parallaxItTwo(e, target, movement) {
    var $this = $('.pg-1');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
};
function parallaxIt(e, target, movement) {
    var $this = $('.hero--section');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
};
function parallaxItThree(e, target, movement) {
    var $this = $('#cta--section--1');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
};
function parallaxItThree(e, target, movement) {
    var $this = $('#kontakt');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
};

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("top--bar").style.top = "0";
        document.getElementById("header--top").style.top = "43px";
    } else {
        document.getElementById("top--bar").style.top = "-50px";
        document.getElementById("header--top").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}