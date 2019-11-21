
/*jslint plusplus: true, evil: true */
/*global document,window,Typed,$ */

//Start Jquery 

$(document).ready(function () {
    
    "use strict";
    
    var options = {
        strings: ["UX,UI Designer", "Front-End Developer."],
        typeSpeed: 65,
        backSpeed: 30,
        loop: true,
        bindInputFocusEvents: true
    };
    
    var typed = new Typed(".about", options);
    
    //Make The Scroll Button Show And Hide On Scroll
    var scrollButton = $("#tap-up");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 630) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    //Make The Button Scroll Up
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    
    $(window).on('load', function () {

        $("body").css("overflow", "auto");

        $(".loading").fadeOut(1500);

    });
    
    //Butting A New Class To The Navbar To Change The Background-color
    $(window).on("scroll", function () {
       
        if ($(this).scrollTop() >= 430) {
            
            $("nav").removeClass("trns-nav");
            $("nav").addClass("black-nav");
        } else {
            $("nav").removeClass("black-nav");
            $("nav").addClass("trns-nav");
        }
        
        //Adding The Active Class To The Link That Match The Section
        $("section, header").each(function () {
            
            if ($(window).scrollTop() > $(this).offset().top - 100) {
                
                var blockId = $(this).attr("id");
                
                $("nav a").removeClass("active");
                
                $('.navbar-nav li a[data-scroll="' + "#" + blockId + '"]').addClass("active");
            }
        });

        //Activating The Width To The Skills
        if ($(this).scrollTop() >= $(".skills").offset().top - 150) {
            
            $(".skills .progrres span").each(function () {
        
                $(this).animate({

                    width: $(this).data("course")
                }, 800, function () {
                    $(this).parent(".progrres").prev("h6").fadeIn(600).find("span").text($(this).data("course"));
                });
            });
            
        }
        
    });
    
    //Making The Links Smooth Scroll To The Sections
    $(".main li a").on("click", function (e) {
       
        e.preventDefault();
        
        $("html, body").animate({
            
            scrollTop: $($(this).data('scroll')).offset().top + 1
        }, 700);
        
    });
    
    

    //Show And Hide The Style Changer
    $('.spiner').click(function () {

        $('.changer').toggleClass('show')
    })
    $(window).click(function () {

        $('.changer').removeClass('show')
    })
    $('.changer').click(function (e) {

        e.stopPropagation();
    });

    //Toggle The Nav Between Education And Projects
    $('.navs ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        $($(this).data('scholl')).fadeIn().siblings($(this).siblings().data('scholl')).fadeOut(80)
    });

    //Style Changer

    $('.black').click(function () {
        $('body').removeClass('light')
    });

    $('.white').click(function () {
        $('body').addClass('light')
    });
    

    //Change Image Base On Page Background-color
    $('.white').click(function () {
        $('.workk:last-child a img').attr('src', 'http://www.ahmeddafer.me/old/images/work/al-toama-white.jpg')
    })

    $('.black').click(function () {
        $('.workk:last-child a img').attr('src', 'http://www.ahmeddafer.me/old/images/work/al-toama.jpg')
    })

    $('.white').click(function () {
        $('.workk .kilshay-v2 a img').attr('src', 'http://www.ahmeddafer.me/old/images/work/kilshay-v2-w.jpg')
    })

    $('.black').click(function () {
        $('.workk .kilshay-v2 a img').attr('src', 'http://www.ahmeddafer.me/old/images/work/kilshay-v2.jpg')
    })
});