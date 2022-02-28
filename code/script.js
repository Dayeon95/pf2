    /* Main navigation */
    let panelsSection = document.querySelector("#panels"),
        panelsContainer = document.querySelector("#panels-container"),
        tween;
    document.querySelectorAll(".anchor").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetElem = document.querySelector(e.target.getAttribute("href")),
                y = targetElem;
            if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
                let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
                    totalMovement = (panels.length - 1) * targetElem.offsetWidth;
                y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
            }
            gsap.to(window, {
                scrollTo: {
                    y: y,
                    autoKill: true
                },
                duration: 1
            });
        });
    });
    /* Panels */
    const panels = gsap.utils.toArray("#panels-container .panel");
    tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#panels-container",
            pin: true,
            start: "top top",
            scrub: 1,
            snap: {
                snapTo: 1 / (panels.length - 1),
                inertia: false,
                duration: {
                    min: 0.1,
                    max: 0.1
                }
            },

            end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
            // responsiveWidth:900,
        }

    });



// 강사수정 : swipper 소스는 아래로
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },

});
var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 4,
    spaceBetween: 55,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

$(window).scroll(function () {
    let ht = $(window).height() + 100
    let scTop = $(window).scrollTop()
    let num = $('.full-screen').length
    let menu3Top = $('#menu3').offset().top - 450
    let menu4Top = $('#menu4').offset().top - 450
    let menu5Top = $('#menu5').offset().top - 450
    let menu6Top = $('#menu6').offset().top - 450
    // console.log(menu6Top)
    // console.log(num)
    if ($(this).scrollTop() > menu4Top) {
        $('.dep1>li>a').addClass('on')
        $('.scroll').hide()
        $('.banner_nav').hide()
        $('.logo a').addClass('on')
        $('.hd_icon>a').addClass('on')
    } else {
        $('.dep1>li>a').removeClass('on')
        $('.scroll').show()
        $('.banner_nav').show()
        $('.logo a').removeClass('on')
        $('.hd_icon>a').removeClass('on')
    }
    if ($(this).scrollTop() > menu3Top) {
        $('.index>li>a').removeClass('on')
        $('.index>li').eq(0).find('a').addClass('on')
    }
    if ($(this).scrollTop() > menu4Top) {
        $('.index>li>a').removeClass('on')
        $('.index>li').eq(1).find('a').addClass('on')
    }
    if ($(this).scrollTop() > menu5Top) {
        $('.index>li>a').removeClass('on')
        $('.index>li').eq(2).find('a').addClass('on')
    }
    if ($(this).scrollTop() > menu6Top) {
        $('.index>li>a').removeClass('on')
        $('.index>li').eq(3).find('a').addClass('on')
    }
    for (let i = 0; i < num; i++) {
        if (scTop >= ht * i && scTop < ht * (i + 1)) {
            $('.banner_nav a').removeClass('on')
            $('.banner_nav>li').eq(i).find('a').addClass('on')
        }
    }
})

$(function () {
    $(".hamburger").click(function () {
        $('.dep1').toggleClass("on");
        $('.hamburger').toggleClass("on");
    });
});


// wrap 
$(window).on('resize load', function() {
    if ($(this).width() < 1024) {
        $('body>div').addClass('wrap');
        console.log('모바일')
    } else {
        $('body>div').removeClass('wrap');
        console.log('PC')
    }
});