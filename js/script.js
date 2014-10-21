$(document).ready(function() {

    var imageSrc = 'src';
    var slideInfo = $(".slide-info");
    var slideShowWrap = $(".slideshow-wrap");

    var currSlideShowItem = $(".slideshow-wrap li");

    var imagesNum = currSlideShowItem.length;

    var slideshowimagesNum = $(".slideshow-paging");
    var slideShowInner = $(".slideshow-inner");
    var slideShowList = $(".slideshow-inner>ul");
    var currentList = $(".slideshow-inner>ul");
    var slideShowImage = $(".slideshow-wrap li img");

    var isSlideShowItem = (slideShowImage).attr(imageSrc);

    var slideShowInnerWidth = parseInt(slideShowInner.css('width'));
    var slideShowInnerLeft = parseInt(slideShowList.css('left'));
    var currMarginCoef = Math.round((slideShowInnerLeft / slideShowInnerWidth).toFixed(10));

    var slideDescription = $("li .description-text").each(function(i) {
        $(this).html();
    });

    var slideNum = Math.abs(currMarginCoef);

    var imagesArray = [];

    $(slideShowImage).each(function() {
        imagesArray.push($(this).attr(imageSrc));
    });

    var startSlideshow = function() {

        $('#start-slideshow').on('click', function(event) {
            event.preventDefault();
            $(".slideshow-slider").addClass('slideshow-slider-show');



            showDescription(1);

            $('.arrow-left').removeClass('arrow-show');
            $('.arrow-right').addClass('arrow-show');

        });
    }
    var showDescription = function(slideNum) {
        slideshowimagesNum.text('');
        slideInfo.text('');
        slideshowimagesNum.prepend(slideNum + '/' + imagesNum);
        slideInfo.prepend(slideDescription[slideNum - 1]);
    }

    var controlClick = function(arrowId) {

        var slideShowInner = $(".slideshow-inner");
        var slideShowList = $(".slideshow-inner>ul");

        var i = 1;
        $(arrowId).on("click", function() {

            $(slideShowList).find('img').attr('src', imagesArray[i]);
            showDescription(i);
            return ++i;

        });

    }

    var showThumbnails = function() {

        $('#thumbnails-button').click(function(event) {

            $(".slideshow-thumbnails").addClass('slideshow-thumbnails-show');

        });
    }

    var createThumbnails = function() {

        for (var i = 0; i < imagesArray.length; i++) {
            var thisNumber = i + 1;
            $(".thumbnails-container").append('<li class="thumb-item"><a href="javascript:void(0);" data-number = ' + thisNumber + '><img src="' + imagesArray[i] + '"  alt=""></a></li>');
        }
        slideShowWrap.append('<a class="arrows arrow-right"><i class="icon icons-arrow-right"></i></a><a class="arrows arrow-left"><i class="icon icons-arrow-right"></i></a>');

    }

    var closeSlider = function() {
        $('.slideshow-close').on('click', function() {

            if ($('.slideshow-thumbnails').css('display') == 'block') {
                $('.slideshow-thumbnails').hide();
                $('.slideshow-slider').show();
            } else {
                $('.slideshow-slider').hide();
            }
        });
    }


    if (isSlideShowItem) {

        closeSlider();
        startSlideshow();
        controlClick(".arrow-right");
        createThumbnails();
        showThumbnails();

    } else alert("Фотографии еще не загружены!");



});
