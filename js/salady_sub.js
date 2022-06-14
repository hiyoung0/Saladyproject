$(document).ready(function(){
    // q&a 슬라이드
    $('.acoordion1').click(function(){
        $('.items1').slideToggle();
        $('.flag1').toggleClass('rotate');
    });

    $('.acoordion2').click(function(){
        $('.items2').slideToggle();
        $('.flag2').toggleClass('rotate');
    });

    $('.acoordion3').click(function(){
        $('.items3').slideToggle();
        $('.flag3').toggleClass('rotate');
    });

    $('.acoordion4').click(function(){
        $('.items4').slideToggle();
        $('.flag4').toggleClass('rotate');
    });



    // 메뉴 슬라이드
    $(".list_icon").click(function(){
        $(".nav_group3").slideToggle();
        $(this).toggleClass("orange");
        $(".list_icon i").toggleClass("white");
    });
});