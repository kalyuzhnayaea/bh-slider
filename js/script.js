$(document).ready(function() {

    var i;
    var imageSrc = 'src';
    var slideInfo = $(".slide-info");
    var slideShowWrap = $(".slideshow-wrap");

    var currSlideShowItem = $(".slideshow-wrap li");

    var slideshowimagesNum = $(".slideshow-paging");
    var slideShowInner = $(".slideshow-inner");
    var slideShowList = $(".slideshow-inner>ul");
    var currentList = $(".slideshow-inner>ul");
    var slideShowImage = $(".slideshow-wrap li img");


    var imagesNum = currSlideShowItem.length; /* Общее число img в слайдере */

    var isSlideShowItem = (slideShowImage).attr(imageSrc); /* Существование изображений в слайдере */

    var slideDescription = $("li .description-text").each(function(i) { /* Собирает все описания под картинкой в массив */
        $(this).html();
    });

    var imagesArray = []; /* Собирает все пути src в массив */

    $(slideShowImage).each(function() {
        imagesArray.push($(this).attr(imageSrc));
    });

    var startSlideshow = function() {


        $('#start-slideshow').on('click', function(event) {
            event.preventDefault();
            $(".wrapper").addClass('wrapper-hide');
            $(".slideshow-slider").addClass('slideshow-slider-show');

            showDescription(i);

            calculatePinPosition();

            $(window).resize(function() {
                calculatePinPosition();

            })

        });
    }

    var calculatePinPosition = function() {
        var a = [];
        var c = [];
        $(".slideshow-wrap img").each(function() {
            a.push($(this).css('width'));
            c.push($(this).css('height'));
        })

        var zoomWidth = $(".slideshow-zoom").width() * 0.8;
        var zoomheight = $(".slideshow-zoom").height();

        var wrapperLeft = (zoomWidth - parseInt(a[0])) / 2 + 5;
        var wrapperBottom = (zoomheight - parseInt(c[0])) / 2 + 5;

        $('.pin-wrapper').css('right', wrapperLeft);
        $('.pin-wrapper').css('bottom', wrapperBottom);
    }


    var showDescription = function(i) {
        var slideDescriptionArea = $('.slide-description');
        slideshowimagesNum.text('');
        slideInfo.find(slideDescriptionArea).text('');
        slideshowimagesNum.append(i + 1 + '/' + imagesNum);
        slideInfo.find(slideDescriptionArea).append(slideDescription[i]);
    }

    var controlClickRight = function() {

        var slideShowInner = $(".slideshow-inner");
        var slideShowList = $(".slideshow-inner>ul");

        i = 0;

        $(".arrow-right").on("click", function() {

            if (i <= imagesNum) {
                $(slideShowList).find('img').attr('src', imagesArray[i]);
                $(".arrow-left").show();
                showDescription(i);
                if (i == imagesNum) {
                    $(".arrow-right").hide();
                }
            }
            ++i;
            calculatePinPosition();
            return function() {

                return i;
            }

        });
    }

    var controlClickLeft = function() {

        var slideShowInner = $(".slideshow-inner");
        var slideShowList = $(".slideshow-inner>ul");


        $(".arrow-left").on("click", function() {
            
            if (i <= imagesNum) {
                $(slideShowList).find('img').attr('src', imagesArray[i]);
                $(".arrow-right").show();
                showDescription(i);
                if (i == imagesNum) {
                    //$(".arrow-left").hide();
                }
            }
            --i;
            calculatePinPosition();
            return function() {

                return i;
            }

        });

    }

    var showThumbnails = function() {

        $('.thumbnails-button').click(function(event) {

            $(".slideshow-thumbnails").addClass('slideshow-thumbnails-show');
            $(".slideshow-zoom,.slideshow-description").addClass('blur');
            $(".slideshow-footer").addClass('slideshow-footer-shadow');
            $(".thuumb-button").toggleClass('slideshow-thumbnails-show');

        });
        $('.thuumb-button').click(function(event) {

            $(".slideshow-zoom,.slideshow-description").toggleClass('blur');
            $(".slideshow-footer").toggleClass('slideshow-footer-shadow');
            $(".slideshow-thumbnails").toggleClass('slideshow-thumbnails-show');

        });
    }

    var createThumbnails = function() {

        for (var i = 0; i < imagesArray.length; i++) {
            var thisNumber = i + 1;
            $(".thumbnails-container").prepend('<li class="thumb-item"><a href="javascript:void(0);" data-number = ' + thisNumber + '><img src="' + imagesArray[i] + '"  alt=""></a></li>');
        }
        //slideShowInner.append('<a class="arrows arrow-right"><i class="icon icons-arrow-right"></i></a><a class="arrows arrow-left"><i class="icon icons-arrow-right"></i></a>');

    }

    var closeSlider = function() {
        $('.slideshow-close').on('click', function() {

            if ($('.slideshow-thumbnails').css('display') == 'block') {

                $('.slideshow-thumbnails').removeClass('slideshow-thumbnails-show');
                $(".slideshow-zoom,.slideshow-description").removeClass('blur');
                $(".slideshow-footer").removeClass('slideshow-footer-shadow');


            } else {

                $(".wrapper").removeClass('wrapper-hide');
                $(".slideshow-slider").removeClass('slideshow-slider-show');
                $(".slideshow-thumbnails").removeClass('slideshow-thumbnails-show');
            }
        });
    }


    if (isSlideShowItem) {

        closeSlider();
        startSlideshow();
        controlClickRight();
        controlClickLeft();
        createThumbnails();
        showThumbnails();

        // Zooming function

        $(".image-wrapper img").on("click", function() {
            $(".slideshow-slider").toggleClass('zoom-in');
            $(".social-pannel-bottom").removeClass('active');

            calculatePinPosition();
        })


        $(".social-button").on("click", function() {
            $(".social-pannel-bottom").toggleClass('active');
        })

        // Hovered function

        currSlideShowItem.hover(function(event) {

            $(this).addClass('hovered');
            event.stopPropagation();

            return false;

        }, function(event) {
        event.stopPropagation();
            $(this).removeClass('hovered');
            

            return false;
        });


    } else alert("Фотографии еще не загружены!");





});
