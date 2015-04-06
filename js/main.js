$(document).ready(function () {
$('.content').hide();

    $('.item').click(function () {
        var index = $(this).index();
        $('.content').eq(index).slideToggle().siblings('.content').slideUp();
    });
    $("#proj1").hover(function () {
        $('.p1heading').slideUp("fast", function () {
            $(".p1content").slideDown("fast");
        })
    }, function () {
        $(".p1content").slideUp("fast", function () {
            $('.p1heading').slideDown("fast");
        });        
    });
     $("#proj2").hover(function () {
        $('.p2heading').slideUp("fast", function () {
            $(".p2content").slideDown("fast");
        })
    }, function () {
        $(".p2content").slideUp("fast", function () {
            $('.p2heading').slideDown("fast");
        });        
    });
    var $nav = $('nav').offset();
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top -100
        }, 500);
        return false;

    });
    $('.menu').click(function () {
        $(this).toggleClass('open');
    });
});
$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});
$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 