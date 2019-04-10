Vue.component('work', {
    props: {
        'details': {type: Object, required: true}
    },
    template: `<div class="col-md-4 mt-3 hvr-grow mb-4">
                    <div class="work-cards">
                        <a :href="details.webName" target="_blank"><img class="mokup img-responsive" :src="details.mokup" alt="mokup" /></a>
                        <h3><a :href="details.webName" target="_blank">{{details.workName}}</a></h3>
                        <p>{{details.workType}}</p>
                    </div>
                </div>`
});



new Vue ({
    'el': '#app',
    'created': function (){
        this.getInfo();
    },
    'methods': {

        getInfo: function() {
            // GET /someUrl
            this.$http.get('../json/work.json').then(response => {

                // get body data
                this.infos = response.body;

            }, response => {
                // error callback
            });
        }
    },
    'data': {
        'infos': []
    },
    'template': `<div class="row">
                    <work v-for="info in infos" :details="info"></work>
                </div>`
});


Vue.component('services', {
    props: {
        'details': {type: Object, required: true}
    },
    template: `<div class="col-md-4 hvr-glow pt-2">
                    <div class="service-box">
                    <div class="service-heade">
                        <img :src="details.serviceImage" :alt="details.alt">
                        <h4 class="number">{{details.serviceNum}}</h4>
                    </div>
                    <h4 class="single-skill">{{details.service}}</h4>
                    </div>
                </div>`
});

new Vue ({
    'el': '#app2',
    'created': function (){
        this.getInfo();
    },
    'methods': {

        getInfo: function() {
            // GET /someUrl
            this.$http.get('../json/services.json').then(response => {

                // get body data
                this.infos = response.body;

            }, response => {
                // error callback
            });
        }
    },
    'data': {
        'infos': []
    },
    'template': `<div class="row">
                    <services v-for="info in infos" :details="info"></services>
                </div>`
});

/*jslint plusplus: true, evil: true */
/*global document,window,Typed,$ */

//Type.js Init

var options = {
    strings: ["Web Designer", "Front-End Developer."],
    typeSpeed: 65,
    backSpeed: 30,
    loop: true,
    bindInputFocusEvents: true
};

var typed = new Typed(".about", options);

//Start Jquery 

$(document).ready(function () {
    
    "use strict";
    
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

        $(".loading").fadeOut(1000);

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
            
            if ($(window).scrollTop() > $(this).offset().top) {
                
                var blockId = $(this).attr("id");
                
                $("nav a").removeClass("active");
                
                $('.navbar-nav li a[data-scroll="' + "#" + blockId + '"]').addClass("active");
            }
        });
        
    });
    
    //Making The Links Smooth Scroll To The Sections
    $(".move-right li a").on("click", function (e) {
       
        e.preventDefault();
        
        $("html, body").animate({
            
            scrollTop: $($(this).data('scroll')).offset().top + 1
        }, 700);
        
    });
    
    $("#contact-btn").on("click", function (e) {
       
        e.preventDefault();
        
        $("html, body").animate({
            
            scrollTop: $($(this).data('scroll')).offset().top + 1
        }, 700);
        
    });
    
    //Activiting The Width To The Skills
    $(window).scroll(function () {
        
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
    
});