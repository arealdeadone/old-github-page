/**
 * Created by ARVIND on 2/12/2017.
 */

var aboutHeight = $('#about').height();

$('main').scroll(function () {
    var wScroll = $(this).scrollTop();

    if(wScroll <= aboutHeight){
        $('#about.mdl-card').css({
            'transform': 'translate(0px' + wScroll/4 + '%)'
        });
        // $('.wide-card').css({
        //     'transform': 'translate(0px' + wScroll/4 + '%)'
        // });
    }
    var abtPos = $('#about').position().top;
    if(Math.floor(abtPos) <= 0 && Math.floor(abtPos) >= -1*aboutHeight)
    {
        $('header, .mdl-layout, .mdl-layout__drawer').addClass('teal-color');
    }
    else
    {
        $('header, .mdl-layout, .mdl-layout__drawer').removeClass('teal-color');
    }
    // console.log(Math.floor($('#about').position().top));
});

$(document).ready(function () {
   $('main').niceScroll();
   $('#about').niceScroll();
   $('.mdl-card__title').mouseenter(function () {
       $(this).parent().addClass('shadows');
   })
       .mouseleave(function () {
           $(this).parent().removeClass('shadows');
       });
    $('.mdl-card__supporting-text').mouseenter(function () {
        $(this).parent().addClass('shadows');
    })
        .mouseleave(function () {
            $(this).parent().removeClass('shadows');
        });
    $('.mdl-card__actions').mouseenter(function () {
        $(this).parent().addClass('shadows');
    })
        .mouseleave(function () {
            $(this).parent().removeClass('shadows');
        });
    $('.to-top').click(function (e) {
        if(this.hash !== ""){
            e.preventDefault();
            var hash = this.hash;
            if(Math.floor(Math.abs($(hash).position().top)) != 0)
            $('html, body, main').animate({
                scrollTop: $(hash).position().top
            }, 1000, function () {
                window.location.hash = hash;
            })
        }
    });
});
