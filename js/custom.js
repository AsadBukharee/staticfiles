/*
Copyright (c) 2016 Speed-Up Multipurpose Responsive HTML Template
------------------------------------------------------------------
[Master Javascript]

Project:	Speed-Up Multipurpose Responsive HTML Template

-------------------------------------------------------------------*/

(function($) {
    "use strict";
    var speedUp = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- speedUp Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.wowanimation();
            this.TestimonialSlider();
            this.Gallery();
            this.Fancybox();
            this.ConutTo();
            this.ClientSlider();
            this.GoToTop();
            this.MainMenuOpen();
            this.SidebarSlider();
            this.IndexSlider();
            this.Index2Slider();
            this.ResponsiveMenu();
            this.ContactFormSubmit();
            this.SearchBox();
            this.AboutSlider();

        },

        /*-------------- speedUp Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            // On Right-to-left(RTL) add class 
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        //Wow Animation
        wowanimation: function() {
            if ($('.wow').length > 0) {
                new WOW().init();
            }
        },
        //testimonial slider on home page
        TestimonialSlider: function() {
            if ($('.sup_testimonial_slider .owl-carousel').length > 0) {

                $('.sup_testimonial_slider .owl-carousel').owlCarousel({
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 1,
                    margin: 30,
                    nav: false,
                    dots: true,
                    stagePadding: 30,
                    smartSpeed: 450
                });
            }

        },
        // Portfolio Sorting
        Gallery: function() {
            if ($('.sup_sorting a').length > 0) {
                $(".sup_sorting a").on("click", function(e) {
                    e.preventDefault();
                });
                $('#portfolio').mixItUp();

            }
        },
        //Fancybox for portfolio images
        Fancybox: function() {
            if ($('.fancybox').length > 0) {

                $(".fancybox").fancybox({
                    openEffect: 'none',
                    closeEffect: 'none'
                });

            }
        },
        //counter on home page
        ConutTo: function() {
            if ($('.timer').length > 0) {
                $('.timer').appear(function() {
                    $(this).countTo();
                });
            }
        },
        //client slider on home page
        ClientSlider: function() {
            if ($('.sup_client_slider .owl-carousel').length > 0) {
                $('.sup_client_slider .owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    dots: false,
                    nav: true,
                    navText: ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="7px" viewBox="0 0 18 7" enable-background="new 0 0 18 7" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#211F20" d="M0,3.5L5,0v3h13v1H5v3L0,3.5z"/></svg>', '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="7px" viewBox="0 0 18 7" enable-background="new 0 0 18 7" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#211F20" d="M18,3.5L13,7V4H0V3h13V0L18,3.5z"/></svg>'],
                    responsive: {
                        0: {
                            items: 1,
                            navText: ['<img src="images/left_arrow_responsive.png">', '<img src="images/right_arrow_responsive.png">']
                        },
                        600: {
                            items: 3,
                            navText: ['<img src="images/left_arrow_responsive.png">', '<img src="images/right_arrow_responsive.png">']
                        },
                        768: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        }
                    }
                });
            }
        },
        //go to top
        GoToTop: function() {
            if ($('.sup_gototop').length > 0) {
                $(".sup_gototop").on("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            }
        },
        // index2 main menu open
        MainMenuOpen: function() {
            if ($('.sup_menubtn').length > 0) {
                $(".sup_menubtn").on("click", function() {
                    if ($(".sup_mainmenu").hasClass("sup_menu_open")) {
                        $(".sup_mainmenu").removeClass("sup_menu_open");
                    } else {
                        $(".sup_mainmenu").addClass("sup_menu_open");
                    }
                });

            }
        },
        //sidebar image slider
        SidebarSlider: function() {
            if ($('.widget-image-post .owl-carousel').length > 0) {
                $('.widget-image-post .owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    dots: false,
                    nav: true,
                    navText: ['<img src="images/sidebar/image_widge_left.png">', '<img src="images/sidebar/image_widge_right.png">'],
                    items: 1
                });
            }
        },
        //Index Page Slider
        IndexSlider: function() {
            if ($('#rev_slider_4_1').length > 0) {
                var tpj = jQuery;
                var revapi4;
                if (tpj("#rev_slider_4_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_4_1");
                } else {
                    revapi4 = tpj("#rev_slider_4_1").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "../../revolution/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            },
                            arrows: {
                                style: "zeus",
                                enable: false,
                                hide_onmobile: true,
                                hide_under: 600,
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0
                                }
                            },
                            bullets: {
                                enable: true,
                                hide_onmobile: true,
                                hide_under: 600,
                                style: "metis",
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                direction: "horizontal",
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 30,
                                space: 5,
                                //tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                            }
                        },
                        viewPort: {
                            enable: true,
                            outof: "pause",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [600, 600, 500, 400],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "slidercenter",
                            speed: 2000,
                            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                        },
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }

            }

        },
        // Index2 Page Slider
        Index2Slider: function() {
            if ($('.sup_slider_second .owl-carousel').length > 0) {
                var owl_home = $('.sup_slider_second .owl-carousel');
                $('.sup_slider_second .owl-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    mouseDrag: false,
                    margin: 0,
                    nav: true,
                    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                    dots: false,
                    stagePadding: 0,
                    slideSpeed: 3000,
                    animateIn: 'fadein',
                    animateOut: 'fadeout',
                    autoplay: false
                });

                owl_home.on('changed.owl.carousel', function(property) {
                    $(this).find('.sup_banner_content').addClass('loaded');
                    setTimeout(function() {
                        $('.sup_banner_content').removeClass('loaded');
                    }, 300);
                });
            }
        },
        // Responsive Menu Index Page
        ResponsiveMenu: function() {
            if ($(window).width() < 767) {
                if ($('.sup_menumain_div ul li a.first_sb, .sup_menudiv .sup_mainmenu ul li a.first_sb').length > 0) {
                    $('.sup_menumain_div ul li a.first_sb, .sup_menudiv .sup_mainmenu ul li a.first_sb').on('click', function() {
                        $('.sup_menumain_div ul li a.first_sb, .sup_menudiv .sup_mainmenu ul li a.first_sb').not($(this)).parent('li').find('ul.sub-menu:first').slideUp(10);
                        $('.sup_menumain_div ul li a.first_sb, .sup_menudiv .sup_mainmenu ul li a.first_sb').not($(this)).find('i').attr('class', 'fa fa-angle-right');
                        $(this).parent('li').find('ul.sub-menu:first').slideToggle(10);
                        var arrow = $(this).find('i');
                        if (arrow.hasClass('fa-angle-down')) {
                            arrow.attr('class', 'fa fa-angle-right');
                        } else {
                            arrow.attr('class', 'fa fa-angle-down');
                        }
                    });
                }
                if ($(window).width() < 767) {
                    $('.sup_menumain_div ul li ul.sub-menu li a.second_sb, .sup_menudiv .sup_mainmenu ul li ul.sub-menu li a.second_sb').on('click', function() {
                        $('.sup_menumain_div ul li ul.sub-menu li a, .sup_menudiv .sup_mainmenu ul li ul.sub-menu li a').not($(this)).parent('li').find('ul.sub-menu').slideUp(10);
                        $('.sup_menumain_div ul li ul.sub-menu li a, .sup_menudiv .sup_mainmenu ul li ul.sub-menu li a').not($(this)).find('i').attr('class', 'fa fa-angle-right');
                        $(this).parent('li').find('ul.sub-menu').slideToggle(10);
                        var arrow = $(this).find('i');
                        if (arrow.hasClass('fa-angle-down')) {
                            arrow.attr('class', 'fa fa-angle-right');
                        } else {
                            arrow.attr('class', 'fa fa-angle-down');
                        }
                    });
                }
            }
        },
        //contact form submition
        ContactFormSubmit: function() {
            if ($('#send_btn').length > 0) {
                $("#send_btn").on("click", function() {
                    var e = $("#ur_name").val();
                    var t = $("#ur_mail").val();
                    var ph = $("#ur_phone").val();
                    var s = $("#sub").val();
                    var r = $("#msg").val();
                    $.ajax({
                        type: "POST",
                        url: "ajaxmail.php",
                        data: {
                            username: e,
                            useremail: t,
                            userphone: ph,
                            usersub: s,
                            mesg: r
                        },
                        success: function(n) {
                            var i = n.split("#");
                            if (i[0] == "1") {
                                $("#ur_name").val("");
                                $("#ur_mail").val("");
                                $("#ur_phone").val("");
                                $("#sub").val("");
                                $("#msg").val("");
                                $("#err").html(i[1]);
                            } else {
                                $("#ur_name").val(e);
                                $("#ur_mail").val(t);
                                $("#ur_phone").val(ph);
                                $("#sub").val(s);
                                $("#msg").val(r);
                                $("#err").html(i[1]);
                            }
                        }
                    });
                });
            }
        },
        //Search Box on header
        SearchBox: function() {
            if ($('#top-search > a > i').length > 0) {
                (function() {
                    $('body').on('click', '#top-search > a > i', function(e) {
                        e.preventDefault();

                        $('.sup_menudiv, .sup_header').addClass('search-toggled');
                    });

                    $('body').on('click', '#top-search-close', function(e) {
                        e.preventDefault();

                        $('.sup_menudiv, .sup_header').removeClass('search-toggled');
                    });
                })();

                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $(".sup_menudiv, .sup_header").removeClass("search-toggled");
                    }
                });
            }
        },
        //about Page Slider
        AboutSlider: function() {
            if ($('.carousel').length > 0) {
                $('.carousel').carousel({
                    interval: 0
                });
            }
        }

    };

    speedUp.init();

    // Load Event
    // Loader js
    $(window).on('load', function() {
        jQuery("#sup_preloader_box").fadeOut();
        jQuery("#sup_preloader_wrapper").delay(350).fadeOut("slow");
    });

    // Scroll Event
    //index2 fixed menu
    $(window).on('scroll', function() {
        if ($(window).width() > 767) {
            if ($(this).scrollTop() > 100) {
                $(".sup_index2_header").addClass("sup_fixed_box");
                $(".sup_mainmenu").removeClass("sup_menu_open");
            } else {
                $(".sup_index2_header").removeClass("sup_fixed_box");
            }
            if ($(window).width() > 767) {

            }
        } else {
            if ($(this).scrollTop() > 100) {
                $(".sup_index2_header").addClass("sup_fixed_box");

            } else {
                $(".sup_index2_header").removeClass("sup_fixed_box");
            }
            $(".sup_index2_header").addClass("mob_menu");
        }
    });


    jQuery(document).ready(function() {
        // google map 
        var myCenter = new google.maps.LatLng(-35.288035, 149.126730);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 1,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,

                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,

                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            };

            var map = new google.maps.Map(document.getElementById("mapdiv"), mapProp);
            var icon = {
                url: 'images/Map.png'
            };
            var marker = new google.maps.Marker({
                position: myCenter,
                map: map,
                title: 'Funtionthemes',
                icon: icon
            });
            marker.setMap(map);
            var infowindow = new google.maps.InfoWindow({
                content: "Head Office"
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    });

})(jQuery);