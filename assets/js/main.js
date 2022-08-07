(function ($) {
    "use strict";
    $(window).on("load", function () {
        $("#preloader").addClass("loaded");
    });

    // preloader close
    $(".cencel-preloader").on("click", function (e) {
        e.preventDefault();
        if (!$("#preloader").hasClass("loaded")) {
            $("#preloader").addClass("loaded");
        }
    });


    /*==========================================================
       navigation
       ======================================================================*/
    if ($("#navigation1").length > 0) {
        $("#navigation1").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });

        // menu scrolling

        if ($(".scrolls").length > 0) {
            $(".scrolls").on("click", function () {
                $("html, body").animate(
                    { scrollTop: $(this.hash).offset().top - 100 },
                    1000
                );
                return false;
            });
        }
    }

    if ($(".offset-side-bar").length > 0) {
        $(".offset-side-bar").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".cart-group").addClass("isActive");
        });
    }
    if ($(".close-side-widget").length > 0) {
        $(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            $(".cart-group").removeClass("isActive");
        });
    }
    if ($(".navSidebar-button").length > 0) {
        $(".navSidebar-button").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".info-group").addClass("isActive");
        });
    }
    if ($(".close-side-widget").length > 0) {
        $(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            $(".info-group").removeClass("isActive");
        });
    }
    $("body").on("click", function (e) {
        $(".info-group").removeClass("isActive");
        $(".cart-group").removeClass("isActive");
    });
    $(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 4000) {
            $(".BackTo").fadeIn("slow");
        } else {
            $(".BackTo").fadeOut("slow");
        }
    });

    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    if ($(window).width() > 767) {
        $(".BackTo").css("display", "none");
    }


    /*=============================================================
              wow animation init
      =========================================================================*/
    $(function () {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
            scrollContainer: null,
        });
        wow.init();
    });

    /*=============================================================
              fixed header
      =========================================================================*/
    $(window).on("scroll", function () {
        /**Fixed header**/

        if ($(window).scrollTop() > 70) {
            $(".header").addClass("fixed-header animated fadeInDown");
        } else {
            $(".header").removeClass("fixed-header animated fadeInDown");
        }

        if ($(window).width() < 992) {
            $(".header").removeClass("fixed-header animated fadeInDown");
        }
    });
})(jQuery);

$(document).ready(function () {
    $(".h5-ct").click(function () {
        $(".concept-slt-a").addClass('active');
        $(".concept-slm-a").removeClass('active');
        $('.concept-slt').slick('slickNext');
    });

    $(".h5-cm").click(function () {        
        $(".concept-slm-a").addClass('active');
        $(".concept-slt-a").removeClass('active');
        $('.concept-slm').slick('slickNext');
    });

    $(".box-nft .btn-coming").click(function () {
        $(".box-nft").addClass('active');
    });

    $('.concept-slt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false
              }
            },
        ]
    });

    $('.concept-slm').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false
              }
            },
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
      });
})
String.prototype.interpolate = function (o) {
    return this.replace(/{([^{}]*)}/g, function (a, b) {
      var c = b.trim();
      var r = o[c];
      return typeof r === "string" || typeof r === "number" ? r : a;
    });
  
  };

   $(document).ready(function(){

        toastr.options = {
          "closeButton": false,
          "progressBar": true,
          "positionClass": "toast-top-center",
          "preventDuplicates": false,
          "timeOut": "5000",
        }


         $('#savemail').click(function(e){

            e.preventDefault();
            var email_input = $('#email').val();
            email_input = email_input.replace(/\s/g, '');
            if(email_input == ''){
                toastr.error("Please enter email address.");
                return false;
            }
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validateEmail = re.test(String(email_input).toLowerCase());
            if(!validateEmail){
                 toastr.error("Sorry. Invalid email !");
                 return false;
            }
                $.ajax({
                    url: "https://api.metastrike.io/api/subscribe",
                    type: 'POST',
                    data:{
                        "email": email_input
                    } 
                });
                toastr.success("Congratulations, you are on the list.");
               $('#email').val('');
             })
          });