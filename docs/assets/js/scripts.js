$(document).ready(function() {
    "use strict";

    $('body').addClass('preload-site');

    // Scroll To Top
    $('body').prepend('<div class="go-top"><span id="top"><i class="fa fa-chevron-up"></i></span></div>');


    $('.bxslider_slider').bxSlider({
        auto: false,
        mode: 'fade',
        pagination: false,
        controls: true,
        nextText: '<img src="assets/img/article/ar_1.png"/>',
        prevText: '<img src="assets/img/article/ar2.png"/>',
        height: '100%'
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.go-top').fadeIn(600);
        } else {
            $('.go-top').fadeOut(600);
        }
    });
    $('#top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'easeInQuad');
        return false;
    });

    // Match Height
    $('.items-row').each(function () {
        $(this).children('.single-item').matchHeight();
    });

    $('.dd-wrap .dd-trigger').on('click', function(e){
    	e.preventDefault();
        e.stopPropagation();
    	$('.dd-content').hide();
        $('.dd-trigger.active').removeClass('active');
        $(this).addClass('active');
    	$(this).parents('.dd-wrap').children('.dd-content').toggle().addClass('active');
    });

    $('.m-l-bottom-menu ul li a').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.alm-name').fadeIn().parents('.m-l-bottom-menu').addClass('caret-visible');
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    //Dashboard Page Dropdown Menu
    $('.dwn-menu ul li ul').parent('li').addClass('caret').children('a').click(function(e){
        // e.preventDefault();
        $(this).parents('li.active').children('.dwn-menu ul li ul').slideToggle();

    });

    $(document).click(function(e){
        $('.dwn-menu ul li ul').slideUp();
        $('.dd-trigger').removeClass('active');
    	$('.dd-content').hide();
        $('.alm-name').hide().parents('li').removeClass('active');
        $('.alm-name').hide().parents('.m-l-bottom-menu').removeClass('caret-visible');
    });

    $('.dd-content').click(function(e){
        e.stopPropagation();
    });


    //jQuery Isotop
    var $portfolio_grid = $('.dashboard-tabs-content').isotope({
      filter: '*',
      itemSelector: '.dashboard-grid',
      percentPosition: true
    })

    $portfolio_grid.imagesLoaded().progress( function() {
      $portfolio_grid.isotope('layout');
    }); 

    var itemTrigger = $('.dashboard-content-tabs');
    itemTrigger.first().addClass('active');
    itemTrigger.on('click', 'a', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.parent('li').addClass('active').siblings().removeClass('active');
        $this.parents('.dashboard-content-tabs').next('.dashboard-tabs-content').isotope({
            filter: $(this).data('filter')
        })
    });  



    // Profile Posts filter
    var $portfolio_grid = $('.dd-profile-filter-post-wrap').isotope({
      filter: '*',
      itemSelector: '.dd-profile-grid-item',
      percentPosition: true
    })

    $portfolio_grid.imagesLoaded().progress( function() {
      $portfolio_grid.isotope('layout');
    }); 

    var itemTrigger = $('.dd-profile-filter-menu');
    itemTrigger.first().addClass('active');
    itemTrigger.on('click', 'a', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.parent('li').addClass('active').siblings().removeClass('active');
        $this.parents('.dd-profile-filter-menu').next('.dd-profile-filter-post-wrap').isotope({
            filter: $(this).data('filter')
        })
    });  

    //Magazine Post Masonry
    // var $grid = $('.magazine').isotope({
    //     itemSelector: '.mg-item',
    //     layoutMode: 'cellsByRow',
    //     cellsByRow: {
    //     columnWidth: 200,
    //     rowHeight: 150
    //     },
    //     masonry: {
    //     columnWidth: '.grid-sizer'
    //     }
    // })


    //Video Popup
    $('.dd-post1-play, .dd-video-play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,

		fixedContentPos: false,

	});  



    // Tooltip
    $('.copy-code').tooltip({
        trigger: 'click',
        placement: 'bottom'
    });

    function setTooltip(message) {
        $('.copy-code').tooltip('hide')
            .attr('data-original-title', message)
            .tooltip('show');
    }

    function hideTooltip() {
        setTimeout(function() {
            $('.copy-code').tooltip('hide');
        }, 4000);
    }

    // Clipboard

    var clipboard = new ClipboardJS('.copy-code');

    clipboard.on('success', function(e) {
        setTooltip('Copied!');
        hideTooltip();
    });

    clipboard.on('error', function(e) {
        setTooltip('Failed!');
        hideTooltip();
    });

    //Magazine Slider by bxSlider
    $(".mg2-slide").bxSlider({
        Controls: true,
        nextText: '<img src="assets/img/zarrow.png" />',
        prevText: ''
    });

    //Magazine Post Carousel
    $('.mg13-slide').owlCarousel({
        margin: 15,
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ['<img src="assets/img/zarrow6.png" alt="" />', '<img src="assets/img/zarrow5.png" alt="" />'],
        responsive: {
            0: { items: 1 },
            767: { items: 2 },
        }
    });

    $('.mg16-slide-wrap').owlCarousel({
        margin: 15,
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ['<img src="assets/img/zarrow8.png" alt="" />', '<img src="assets/img/zarrow7.png" alt="" />'],
        responsive: {
            0 : { items: 1 },
            575 : { items: 2 },
            991 : { items: 3 },
            1199 : { items: 4 },
        }
    });





});