$(document).ready(function(){
    // q&a 슬라이드
    $('.flag1').click(function(){
        $('.items1').slideToggle();
        $(this).toggleClass('rotate');
    });
    $('.flag2').click(function(){
        $('.items2').slideToggle();
        $(this).toggleClass('rotate');
    });
    $('.flag3').click(function(){
        $('.items3').slideToggle();
        $(this).toggleClass('rotate');
    });
    $('.flag4').click(function(){
        $('.items4').slideToggle();
        $(this).toggleClass('rotate');
    });

    // 메뉴 슬라이드
    $(".list_icon").click(function(){
        $(".nav_group3").slideToggle();
        $(this).toggleClass("orange");
        $(".list_icon i").toggleClass("white");
    });
});