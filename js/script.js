$(document).ready(function() {


    var startSlideshow = function() {

        $('#start-slideshow').on('click',function(event) {
            event.preventDefault();
            $(".slideshow-slider").addClass('slideshow-slider-show');

            var slideShowWrap = $(".slideshow-wrap");
            
            // showDescription(1);
            // currentItem.css('left', 0);

             $('.arrow-right').hide();
             $('.arrow-left').show();
        });

    
}

startSlideshow();

});





 // $(document).ready(function() {

 //     var imageSrc = 'src';
 //     var slideShowWrap = $(".slideshow-wrap");
 //     var currSlideShowItem = $(".slideshow-wrap li");
 //     var slideShowImage = $(".slideshow-wrap li img");
 //     var isSlideShowItem = (slideShowImage).attr(imageSrc);

 //     var imagesNum = currSlideShowItem.length;
 //     var slideShowTotalWidth = imagesNum * 100;
 //     var slideShowTotalWidthProc = imagesNum * 100 + "%";

 //     var currentList = $(".slideshow-inner>ul");
 //     //var currentItem = $(".slideshow-inner>ul").css('width', slideShowTotalWidthProc);
 //     var imagesArray = [];

 //     var choosenThumb;

 //     $(slideShowImage).each(function() {
 //         imagesArray.push($(this).attr(imageSrc));
 //     });


 //     var slideshowimagesNum = $(".slideshow-paging");
 //     var slideshowItemStart = parseInt($(".slideshow-paging").text());
 //     var slideDescription = $("li .description-text").each(function(i) {
 //         $(this).html();
 //     });
 //     var slideInfo = $(".slide-info");
 //     var maxDisplacement = slideShowTotalWidth - 100;


 //     var currThumbNumber = $(this).attr('data-number') - 1;
 //     var currThumbLeft = -currThumbNumber * 100 + "%";
 //     var maxDisplacement = slideShowTotalWidth - 100;
 //     var thumbnailsWrap = $(".thumb-item a");


 //    var showModal = function(modalClass) {

 //        $(modalClass)
 //            .css('display', 'block')
 //            .animate({
 //                opacity: 1
 //            }, 200, function() {
 //                $('.slideshow-ad-pannel').show();
 //            });
 //    }

 //    var hideModal = function(modalClass) {
 //        $(modalClass)
 //            .css('display', 'none')
 //            .animate({
 //                opacity: 0
 //            }, 200);
 //    }

 //    var responseSilde = function() {
 //        var modalHeight = $('.slideshow-slider').height() - 80 -40 ;

 //        var windowWidth = $(window).width();

 //        if(windowWidth < modalHeight)
 //     {
 //         slideShowWrap.css('width', windowWidth);
 //         slideShowWrap.css('height',windowWidth);
 //         currSlideShowItem.css('width', windowWidth);



 //         $('.slideshow-modal').css('height',modalHeight);
 //         $('.slideshow-thumbnails').css('height',modalHeight);
         
 //         //$('.slideshow-zoom').css('height',modalHeight);
 //     }
 //     else if(windowWidth > modalHeight)
 //     {
 //        slideShowWrap.css('width',modalHeight);
 //        currSlideShowItem.css('width',modalHeight);
 //        $('.slideshow-modal').css('height',modalHeight);
 //        $('.slideshow-thumbnails').css('height',modalHeight);


 //        console.log(slideShowImage.offset().left);
 //        //$('.pin-wrapper').css('right',position.left);
 //     }
 //    }

 //    var startSlideshow = function() {

 //        $('#start-slideshow').click(function(event) {
 //            event.preventDefault();
 //            $('#overlay').fadeIn(400, showModal('.slideshow-slider'), showModal('.slideshow-modal'));
 //            showDescription(1);
 //            currentItem.css('left', 0);
 //            $('.arrow-right').hide();
 //            $('.arrow-left').show();
 //            $("#zoom").removeAttr("checked");


 //        });

 //    }

 //    var showThumbnails = function() {

 //        $('#thumbnails-button').click(function(event) {

 //            event.preventDefault();
 //            //hideModal('.slideshow-modal');
 //            showModal('.slideshow-thumbnails');
 //            currentList = $(".slideshow-inner>ul");
 //            var slideShowInner = $(".slideshow-inner");
 //            var slideShowInnerWidth = parseInt(slideShowInner.css('width'));

 //            var choosenThumb = (Math.abs(parseInt(currentList.css('left')) / slideShowInnerWidth)) + 1;

 //            var choosenThumbItem = '.thumb-item a[data-number=' + choosenThumb + ']';


 //            $(choosenThumbItem).addClass('active');

 //        });
 //    }

 //    var closeSlider = function() {
 //        $('.slideshow-close').click(function() {
 //            if ($('.slideshow-thumbnails').css('display') == 'block') {
 //                hideModal('.slideshow-thumbnails');
 //                showModal('.slideshow-slider');
 //            } else {
 //                hideModal('.slideshow-slider');
 //            }
 //        });
 //    }

 //    var createThumbnails = function() {

 //        for (var i = 0; i < imagesArray.length; i++) {
 //            var thisNumber = i + 1;
 //            $(".thumbnails-container").append('<li class="thumb-item"><a href="javascript:void(0);" data-number = ' + thisNumber + '><img src="' + imagesArray[i] + '"  alt=""></a></li>');
 //        }
 //        slideShowWrap.append('<a class="arrows arrow-right"><i class="icon icons-arrow-right"></i></a><a class="arrows arrow-left"><i class="icon icons-arrow-right"></i></a>');

 //    }

 //    var chooseThumbnails = function() {

 //        $(".thumb-item a").on("click", function() {

 //            var currThumbNumber = $(this).attr('data-number') - 1;
 //            var currThumbLeft = -currThumbNumber * 100 + "%";
 //            var maxDisplacement = slideShowTotalWidth - 100;
 //            var thumbnailsWrap = $(".thumb-item a");
 //            var slideShowList = $(".slideshow-inner>ul");
            

 //            currentItem.css('left', currThumbLeft);
 //            thumbnailsWrap.removeClass('active');
 //            //currentItem.addClass('no-trans');


 //            $('.arrows').show();

 //            if (parseInt(currThumbLeft) == -maxDisplacement) {
 //                $('.arrow-left').hide();
 //            }
 //            if (parseInt(currThumbLeft) == 0) {
 //                $('.arrow-right').hide();
 //            }

 //            hideModal('.slideshow-thumbnails');
 //            showModal('.slideshow-modal');

 //            showDescription($(this).attr('data-number'));
 //            //slideShowList.removeClass('no-trans');

 //        })
 //    }

 //    var controlClick = function(arrowId, arrowOppositId, left, boundWidth, correction, correctionSlide) {

 //        var slideShowInner = $(".slideshow-inner");
 //        var slideShowList = $(".slideshow-inner>ul");


 //        $(arrowId).on("click", function() {

 //            slideShowInnerWidth = parseInt(slideShowInner.css('width'));
 //            slideShowInnerLeft = parseInt(slideShowList.css('left'));
 //            currMarginCoef = Math.round((slideShowInnerLeft / slideShowInnerWidth).toFixed(10));
 //            var slideNum = Math.abs(currMarginCoef);

 //            slideNum = slideNum + correctionSlide;
 //            var currentItemMargin = currMarginCoef * 100 + left + '%';

 //            if ((parseInt(currentItemMargin) >= -slideShowTotalWidth) && (parseInt(currentItemMargin) <= 0)) {
 //                currentItem.css('left', currentItemMargin);
 //                $(arrowOppositId).show();
 //                if (parseInt(currentItemMargin) == boundWidth) {
 //                    $(this).hide();
 //                }

 //            }

 //            showDescription(slideNum);

 //        });

 //    }

 //    var showDescription = function(slideNum) {
 //        slideshowimagesNum.text('');
 //        slideInfo.text('');
 //        slideshowimagesNum.prepend(slideNum + '/' + imagesNum);
 //        slideInfo.prepend(slideDescription[slideNum - 1]);
 //    }

 //    var zoomIn = function () {
 //         slideShowImage.on("click",function() {
 //           $('.slideshow-zoom').css('height',"100%");
 //        })
 //    }

 //    if (isSlideShowItem) {

 //        //responseSilde();

 //        //createThumbnails();
 //        startSlideshow();
 //        //closeSlider();
 //        //showThumbnails();
 //        //chooseThumbnails();
 //        //zoomIn();

 //        controlClick(".arrow-left", ".arrow-right", -100, -maxDisplacement, -maxDisplacement, 2);
 //        controlClick(".arrow-right", ".arrow-left", 100, 0, maxDisplacement, 0);

 //    } else alert("Фотографии еще не загружены!");

 //     $(window).resize(function(event) {
        
 //        responseSilde();

 //     });

 // });
