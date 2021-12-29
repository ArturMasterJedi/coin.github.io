document.addEventListener('DOMContentLoaded', () => {


    const element = document.querySelectorAll('.castom-select');
    element.forEach(function (item) {
        const choices = new Choices(item);
    });


    /////////////////////////////////////////////////////////////////////////////////////////

    const menu = document.querySelector('.nav');

    document.querySelectorAll('.nav__link').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.remove('active');

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////

    function burger(button, menuBlock, overley) {

        let burger = document.querySelector(button);
        let menu = document.querySelector(menuBlock);
        let overleyBlock = document.querySelector(overley);



        if (typeof (burger) != 'undefined' && burger != null) {
            burger.addEventListener('click', function () {
                this.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.classList.toggle('hide');
                overleyBlock.classList.toggle('active');

            });
        }
    }

    burger('.header__burger', '.nav',);
    burger('.prof-top__burger', '.prof-menu', '.white');

    /////////////////////////////////////////////////////////////////////////////////////////

    let check = document.querySelectorAll('.check');

    check.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            item.nextElementSibling.classList.toggle('active');
        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////

    let inputNamber = document.querySelectorAll('.number');

    inputNamber.forEach(function (item) {

        item.addEventListener('input', function (e) {
            this.value = this.value.replace(/[^\d.]/g, '');
        });

    });

    /////////////////////////////////////////////////////////////////////////////////////////

    let windowInnerWidth = window.innerWidth;

    function resizeElem() {

        let windowInnerWidth = window.innerWidth;

        function appendFunc(wrapper, block) {

            let blockItem = document.querySelector(block),
                wrapperTest = document.querySelector(wrapper);

            if (typeof (blockItem) != 'undefined' && blockItem != null) {
                wrapperTest.append(blockItem);
            }
        }

        if (windowInnerWidth <= 1120) {
            appendFunc('.nav', '.come-in');
            appendFunc('.nav', '.social');
        } else {
            appendFunc('.header__wrapper', '.social');
            appendFunc('.header__wrapper', '.come-in');
        }
    }

    resizeElem();

    window.addEventListener('resize', () => {
        resizeElem();
        roadMapSlider();
        removeAnim();
    });

    /////////////////////////////////////////////////////////////////////////////////////////

    $('.toggle__item_title').on('click', function () {
        $('.toggle__item .toggle__item_descr').not($(this).next()).slideUp(300);
        $(this).next().slideToggle(300);
        $(this).toggleClass('toggle__item_title-active');
        $(this).parents('.toggle__item').siblings().find('div').removeClass('toggle__item_title-active');
    });

    /////////////////////////////////////////////////////////////////////////////////////////

    var swiper = new Swiper(".packages-slider", {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".packages .swiper-button-next",
            prevEl: ".packages .swiper-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1050: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
    });

    function roadMapSlider() {
        if (windowInnerWidth <= 1120) {
            var swiper2 = new Swiper(".road-map-slider", {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                speed: 1000,
                navigation: {
                    nextEl: ".road-map .swiper-button-next",
                    prevEl: ".road-map .swiper-button-prev",
                },
                breakpoints: {
                    950: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    300: {
                        slidesPerView: 1,
                    },
                },
            });
        }
    }

    roadMapSlider();

    /////////////////////////////////////////////////////////////////////////////////////////

    const animItems = document.querySelectorAll('.anim');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 40;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('anim-start');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('anim-start');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll();
        }, 900);
    }

    /////////////////////////////////////////////////////////////////////////////////////////

    $("#makeMeScrollable").smoothDivScroll({
        autoScrollingMode: "always",
        autoScrollingDirection: "endlessLoopRight",
        autoScrollingStep: 1,
        autoScrollingInterval: 20
    });
    $("#makeMeScrollable2").smoothDivScroll({
        autoScrollingMode: "always",
        autoScrollingDirection: "endlessLoopLeft",
        autoScrollingStep: 1,
        autoScrollingInterval: 20
    });

    $('.anim').addClass('_anim-no-hide');

    /////////////////////////////////////////////////////////////////////////////////////////

    function removeAnim() {
        let headerWrapper = document.querySelector('.header__wrapper');
        if (windowInnerWidth <= 1120) {
            headerWrapper.classList.remove('anim');
        } else {
            headerWrapper.classList.add('anim');
        }
    }

    removeAnim();

    /////////////////////////////////////////////////////////////////////////////////////////


});

