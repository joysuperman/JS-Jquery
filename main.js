$(document).ready(function(){

    $(window).on('scroll', function () {

        // Counter JQUERY
        function counter() {
            var oTop;
            if ($('.counter_value').length !== 0) {
                oTop = $('.counter_value').offset().top - window.innerHeight;
            }
            if ($(window).scrollTop() > oTop) {
                $('.counter_value').each(function () {
                    var $this = $(this),
                    countTo = $this.attr('data-count');

                    $({countNum: $this.text()}).animate({
                        countNum: countTo
                    },{
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
        }
        counter();
        
    });

    // Form Validation js 
    function form_validation() {
        'use strict';
        window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }form.classList.add('was-validated');
            }, false);
        });
        }, false);
    }
    form_validation();

    // TestimonialCarousel slick
    function testimonial() {
        $('.tdg_testimonial_carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            responsive: [
                {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                  }},
                {
                breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
                {
                breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
                {
                breakpoint: 1200,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            ]
        });
    }
    testimonial();


    // TeamCarosul slick
    function teamCarousel() {
        $('.tdg_team_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            responsive: [
                {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                  }},
                {
                breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
                {
                breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }},
                {
                breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }},
            ]
        });
    }
    teamCarousel();


    

    // author page Load More Button
    function author_load_more() {
        $(".tdg_author_column").slice(0, 6).show();

        if( $(".tdg_author_column:hidden").length != 0 ) {
            $("#tdg_author_loadmore").css("display","block");
            
            $("#tdg_author_loadmore").on("click", function(e){
                e.preventDefault();
                $(".tdg_author_column:hidden").slice(0, 2).slideDown('show');
                if($(".tdg_author_column:hidden").length == 0) {
                    $("#tdg_author_loadmore").css("display","none");
                }
            });
        }
    }
    author_load_more();

    // tag page Load More Button
    function tag_load_more() {
        $(".tdg_tag_column").slice(0, 6).show();

        if( $(".tdg_tag_column:hidden").length != 0 ) {
            $("#tdg_tag_loadmore").css("display","block");
            
            $("#tdg_tag_loadmore").on("click", function(e){
                e.preventDefault();
                $(".tdg_tag_column:hidden").slice(0, 2).slideDown('show');
                if($(".tdg_tag_column:hidden").length == 0) {
                    $("#tdg_tag_loadmore").css("display","none");
                }
            });
        }
    }
    tag_load_more();

    // tour page Load More Button
    function tour_load_more() {
        $(".tdg_tour_column").slice(0, 8).show();

        if( $(".tdg_tour_column:hidden").length != 0 ) {
            $("#tdg_tour_loadmore").css("display","block");
            
            $("#tdg_tour_loadmore").on("click", function(e){
                e.preventDefault();
                $(".tdg_tour_column:hidden").slice(0, 2).slideDown('show');
                if($(".tdg_tour_column:hidden").length == 0) {
                    $("#tdg_tour_loadmore").css("display","none");
                }
            });
        }
    }
    tour_load_more();



    //  Blog Title Excerpt
    var blog_custom_title_excerpt = $('.tdg_blog_section').find('.tdg_post_card').find('.tdg_blog_title');
    function blog_title_excerpt(excerptElement, number , more = "..."){
        excerptElement.each(function(){
        var productTitle = $(this).text(),
        productTitleExcerpt,
        toArray = productTitle.split("", number),
        joinArray = toArray.join(''),
        joinArrayToArray = joinArray.split(" "),
        joinArrayToArrayPop = joinArrayToArray.pop(),
        joinArrayToArrayPopPush = joinArrayToArray.push(more),
        joinArrayToArrayPopPushJoin = joinArrayToArray.join(' '),
        productTitleExcerpt = joinArrayToArrayPopPushJoin;

        if(productTitle.length > number){
            productTitle = productTitleExcerpt;
            $(this).text(productTitle);
        }
        });
    }

    blog_title_excerpt(blog_custom_title_excerpt, 50);



    // Recent Post Excerpt
    var originalCarouselH3 = $('.tdg_sidebar_wrapper').find('.tdg_recent_post').find('.card-title');
    function excerpt(excerptElement, number , more = "..."){
        excerptElement.each(function(){
        var productTitle = $(this).text(),
        productTitleExcerpt,
        toArray = productTitle.split("", number),
        joinArray = toArray.join(''),
        joinArrayToArray = joinArray.split(" "),
        joinArrayToArrayPop = joinArrayToArray.pop(),
        joinArrayToArrayPopPush = joinArrayToArray.push(more),
        joinArrayToArrayPopPushJoin = joinArrayToArray.join(' '),
        productTitleExcerpt = joinArrayToArrayPopPushJoin;

        if(productTitle.length > number){
            productTitle = productTitleExcerpt;
            $(this).text(productTitle);
        }
        });
    }

    excerpt(originalCarouselH3, 45);



    // blog page Load More Button
    function tour_blog_load_more() {
        $(".tdg_recent_column").slice(0, 4).show();

        if( $(".tdg_recent_column:hidden").length != 0 ) {
            $("#tdg_blog_loadmore").css("display","block");
            
            $("#tdg_blog_loadmore").on("click", function(e){
                e.preventDefault();
                $(".tdg_recent_column:hidden").slice(0, 2).slideDown('show');
                if($(".tdg_recent_column:hidden").length == 0) {
                    $("#tdg_blog_loadmore").css("display","none");
                }
            });
        }
    }
    tour_blog_load_more();

    // Gallery FancyBox Js
    function fancybox() {
        $('[data-fancybox]').fancybox({
            protect: true,
            buttons: [
                "fullScreen",
                "thumbs",
                "share",
                "slideShow",
                "close"
            ],
            image: {
                preload: false
            },
        });
    }
    fancybox();



    // Gallery Load More Button
    function gallery_load_more() {
        $(".tdg_gallery_item .card").slice(0, 10).show();

        if( $(".tdg_gallery_item .card:hidden").length != 0 ) {
            $(".tdg_loadmore_btn").css("display","block");
            
            $("#tdg_gallry_post").on("click", function(e){
                e.preventDefault();
                $(".tdg_gallery_item .card:hidden").slice(0, 11).slideDown(1000);
                if($(".tdg_gallery_item .card:hidden").length == 0) {
                    $(".tdg_loadmore_btn").css("display","none");
                }
            });
        }
    }
    gallery_load_more()

});
