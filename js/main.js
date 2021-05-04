$(function () {
    'use strict';
    $(window).scroll(function (){
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
    }
    else{
            navbar.removeClass('scrolled');
    }
    });
    // DEal With Tabs
    $('.tab-switch li').click(function (){
      $(this).addClass('selected').siblings().removeClass('selected');
      // Hide All Div
      $('.tabs-section .tabs-content > div').hide();
      // Show Div Selector
      $('.' + $(this).data('class')).show();
      // window.console.log($(this).data('class'));

    });
});
