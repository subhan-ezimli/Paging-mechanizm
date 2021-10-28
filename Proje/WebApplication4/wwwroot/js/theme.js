/*
 Theme Name: Prologue
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Prologue - Creative Multipurpose Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
 */
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. All Popup Popup
 4. Search Toggler
 5. Fun Fact Count
 6. All Skill Circle
 7. Toggle Pricing
 8. Back To Top
 9. Preloader
 10. Tw Strech Column Inside
 11. Skills Bar
 12. PopUp Menu
 13. Custom Google Maps
 14. Contact Form Submission
 15. Suffle Filter
 16. Qty
 17. Mobile Menu
 */

(function ($) {
    'use strict';
    
    tw_stretch();
    var project_slider = $('.project_slider'),
        circle_progress = $('.circle_progress'),
        client_slider = $('.client_slider'),
        team_slider = $('.team_slider'),
        testimonial_slider_02 = $('.testimonial_slider_02'),
        project_slider_2 = $('.project_slider_2'),
        product_carousel = $('.product_carousel'),
        slider_range = $("#slider-range"),
        gallery_sliders = $(".gallery_sliders"),
        related_carousel = $(".related_carousel"),
        google_map = $("#google_map"),
        single_popup = $(".single_popup"),
        Grid = $('#Grid');
    
    if (circle_progress.length > 0) {
        circle_progress.each(function () {
            var pint = $(this).attr('data-skills');
            var decs = pint * 100;
            var fills = $(this).attr('data-fills');
            var emptyfills = $(this).attr('data-emptyfills');

            $(this).circleProgress({
                value: pint,
                startAngle: -Math.PI / 4 * 6,
                fill: { color: fills },
                emptyFill: emptyfills,
                lineCap: 'square',
                thickness: 12,
                animation: {duration: 1800},
                size: 108,
                reverse: false
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
            });
        });
    }
    
    $(window).on('load', function(){
        if(project_slider.length > 0){
            var project_slider_obj = project_slider.owlCarousel({
                margin: 30,
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        autoWidth: false
                    },
                    768:{
                        items:1
                    },
                    1024:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });
            
            $('.filter_menu').on('click', '.filter_item', function(e) {
                e.preventDefault();
                var slider_height = project_slider.height();
                project_slider.parent().css('min-height', slider_height+'px');
                
                var $item = $(this);
                var filter = $item.data( 'owl-filter' );
                $('.filter_menu .filter_item').removeClass('active');
                $item.addClass('active');

                project_slider_obj.owlcarousel2_filter( filter );

            })
        }
        if(project_slider_2.length > 0){
            var project_slider_2_obj = project_slider_2.owlCarousel({
                margin: 30,
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1023:{
                        items:3
                    },
                    1200:{
                        items:3
                    }
                }
            });
            
            $('.filter_menu2').on('click', '.filter_item', function(e) {
                e.preventDefault();
                var slider_height = project_slider_2.height();
                project_slider_2.parent().css('min-height', slider_height+'px');
                
                var $item = $(this);
                var filter = $item.data( 'owl-filter' );
                $('.filter_menu2 .filter_item').removeClass('active');
                $item.addClass('active');

                project_slider_2_obj.owlcarousel2_filter( filter );

            })
        }
        if(team_slider.length > 0){
            team_slider.owlCarousel({
                margin: 30,
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        autoWidth: false
                    },
                    768:{
                        items:1
                    },
                    1024:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });
        };
        
        if ($("#shaff_grid").length > 0){

            var $grid = $('#shaff_grid');
            var shaff_inst = $grid.shuffle({
                itemSelector: '.shaff_item' // the selector for the items in the grid
            });



            /* reshuffle when user clicks a filter item */
            $('.shaff_filter li').on('click', function() {

                // set active class
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                shaff_inst = $grid.shuffle('shuffle', groupName);
            });
        }
    });
    
    
    if(client_slider.length > 0){
        client_slider.owlCarousel({
            autoplay: true,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            items: 4,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    autoWidth: false
                },
                540:{
                    items:3,
                    autoWidth: false
                },
                1024:{
                    items:4
                },
                1200:{
                    items:4
                }
            }
        });
    };
    
    
    if(testimonial_slider_02.length > 0){
        var testimonial_slider_obj = testimonial_slider_02.owlCarousel({
            autoplay: true,
            margin: 30,
            loop: false,
            nav: false,
            dots: false,
            items: 2,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    autoWidth: false
                },
                600:{
                    items:2,
                    autoWidth: false
                },
                1200:{
                    items:2
                }
            }
        });
        
        $('.tn_left').click(function(e) {
            e.preventDefault();
            testimonial_slider_obj.trigger('prev.owl.carousel');
        });
        $('.tn_right').click(function(e) {
            e.preventDefault();
            testimonial_slider_obj.trigger('next.owl.carousel');
        });
    };
    
    $('.single_skill').appear();
    $(document.body).on('appear', '.single_skill', function(e, $affected) {
        $affected.each(function() {
            var $this = $(this);
            if(!$this.hasClass('completed')){
                var $this = $(this);
                var datacount = $(this).attr("data-skl");
                $(".ss_inner", $this).animate({'width': datacount + '%'}, 2000);
                
                $this.find('span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
                
                $this.addClass('completed');
            }
        });
    });
    
    $('.timer').appear();
    $(document.body).on('appear', '.timer', function(e, $affected) {
        $affected.each(function() {
            var $this = $(this);
            if(!$this.hasClass('completed')){
                var $this = $(this);
                var datacount = $(this).attr("data-count") * 1;
                if(datacount > 1000 && datacount % 1000 != 0){
                    var count = datacount / 1000;
                    count = count.toFixed(1);
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(this.Counter.toFixed(1) + 'k');
                        }
                    });
                }else if(datacount >= 1000  && datacount % 1000 == 0){
                    var count = datacount / 1000;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + 'k');
                        }
                    });
                }else{
                    var count = datacount;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }
                
                $this.addClass('completed');
            }
        });
    });
    
    
    if(product_carousel.length > 0){
        var product_carousel = product_carousel.owlCarousel({
            autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
            dots: false,
            items: 3,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    autoWidth: false
                },
                600:{
                    items:2,
                    autoWidth: false
                },
                1200:{
                    items:3
                }
            }
        });
    };
    
    
    if(related_carousel.length > 0){
        var related_carousel_obj = related_carousel.owlCarousel({
            autoplay: true,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            items: 3,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    autoWidth: false
                },
                600:{
                    items:2,
                    autoWidth: false
                },
                1200:{
                    items:3
                }
            }
        });
    };
    
    if (slider_range.length > 0) {
        slider_range.slider({
            range: true,
            min: 0,
            max: 1000,
            values: [50, 500],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " — $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " — $" + $("#slider-range").slider("values", 1));
    }
    
    if (gallery_sliders.length > 0) {
        gallery_sliders.lightSlider({
            gallery:true,
            item:1,
            thumbItem:4,
            slideMargin: 0,
            speed:700,
            pause: 5000,
            auto:true,
            loop:true,
            galleryMargin: 0,
            thumbMargin: 9,
            currentPagerPosition: 'left',
            onSliderLoad: function() {
                gallery_sliders.removeClass('cS-hidden');
            }  
        });
    }
    
    if ($(".pdq_main").length > 0){
        $(".pdq_main .minus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);

            if (vals > 1)
            {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else
            {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".pdq_main .plus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }
    
    if (google_map.length > 0)
    {
        var map;
        map = new GMaps({
            el: "#google_map",
            lat: 40.712776,
            lng: -74.005974,
            zoom: 11,
        });
        var image = "";
        map.addMarker({
            lat: 40.712776,
            lng: -74.005974,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        map.addMarker({
            lat: 40.7699954,
            lng: -73.7178475,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            backgroundColor: "#d3cfcf"
        });
        map.addMarker({
            lat: 40.7258763,
            lng: -74.250399,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#eeeeee"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#c8d7d4"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#e5e5e5"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f3f3f3"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#53575b"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }
    
    if (Grid.length > 0){
        Grid.themeWar();
    }
    
    
    single_popup.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function() {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                colsheight = $this.closest('[class^="col-"]').height(),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: '897',
        visibilityLevels: [1200, 1140, 778, 480],
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        },
    });
    
    var revapi2 = jQuery('#rev_slider_2').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: '920',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom darks",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        },
    });
    
    var revapi3 = jQuery('#rev_slider_3').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 992, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: '860',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom darks_2",
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        },
    });
    
    var revapi4 = jQuery('#rev_slider_4').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: '900',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom darks_secondary",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    
    var revapi5 = jQuery('#rev_slider_5').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: '800',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom darks_secondary",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    
    var revapi6 = jQuery('#rev_slider_6').show().revolution({
        delay: 9000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "assets/js/",
        sliderLayout: "auto",
        minHeight: 864,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom darks_secondary",
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 60,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    
    var back = $("#backtotop"), body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    
    if($(".isSticky").length > 0){
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300)
            {
                //$('.blanks').css('height', header_height);
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            }else
            {
                //$('.blanks').css('height', '0');
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    
    $(window).load(function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut(500);
        }
    });
    
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('input[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('input[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('input[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Errpr found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
    
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu > ul > li ul').slideUp();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    })
    
    
    $('.search_btn').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });
    $('.popup_search_form input').on('focus', function(){
        $('.popup_search_form').addClass('focused');
    });
    $('.popup_search_form input').on('blur', function(){
        $('.popup_search_form').removeClass('focused');
    });

})(jQuery);