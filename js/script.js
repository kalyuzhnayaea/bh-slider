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


    var imagesNum = currSlideShowItem.length;  /* Общее число img в слайдере */

    var isSlideShowItem = (slideShowImage).attr(imageSrc);  /* Существование изображений в слайдере */

    var slideDescription = $("li .description-text").each(function(i) { /* Собирает все описания под картинкой в массив */
        $(this).html();
    });

    var imagesArray = [];   /* Собирает все пути src в массив */

    $(slideShowImage).each(function() {
        imagesArray.push($(this).attr(imageSrc));
    });



    var startSlideshow = function() {

        $('#start-slideshow').on('click', function(event) {
            event.preventDefault();
            $(".wrapper").addClass('wrapper-hide');
            $(".slideshow-slider").addClass('slideshow-slider-show');

            showDescription(1);

        });
    }
    var showDescription = function(slideNum) {
        slideshowimagesNum.text('');
        slideInfo.text('');
        slideshowimagesNum.prepend(1 + '/' + imagesNum);
        slideInfo.prepend(slideDescription[slideNum - 1]);
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
            return function(){
                
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
               $(".arrow-left").show();
                showDescription(i); 
                if (i == imagesNum) {
                   $(".arrow-right").hide(); 
                }
            } 
            return function(){
                
                return i;
            }

        });

    }

    var showThumbnails = function() {

        $('#thumbnails-button').click(function(event) {

            $(".slideshow-thumbnails").addClass('slideshow-thumbnails-show');
            $(".slideshow-zoom,.slideshow-description").addClass('blur');
            $(".slideshow-footer").addClass('slideshow-footer-shadow');

        });
    }

    var createThumbnails = function() {

        for (var i = 0; i < imagesArray.length; i++) {
            var thisNumber = i + 1;
            $(".thumbnails-container").append('<li class="thumb-item"><a href="javascript:void(0);" data-number = ' + thisNumber + '><img src="' + imagesArray[i] + '"  alt=""></a></li>');
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

        //$("zoom-label").addClass('zoom-in');


        var pinLeft = ($(".slideshow-zoom").width())/2 + (slideShowImage.width())/4;

        
        $(".pin-wrapper").css('left',pinLeft);

        $(window).resize(function() {
            var pinLeft = ($(".slideshow-wrap").width())/2 +(slideShowImage.width())/2 - 56 ;
            $(".pin-wrapper").css('left',pinLeft);
        })

    } else alert("Фотографии еще не загружены!");



});
