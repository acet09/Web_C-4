$(document).ready(function(){
    // nav    
    $("nav > ul > li").hover(function(){
        $(this).find('.sub').stop().fadeIn(100);
    },function(){
        $(this).find('.sub').stop().fadeOut(100);
    });

    // slide
    function slidemove(){
        var slidewidth=$(".slide-con").width();
        $(".slide-box2").animate({
            left:-slidewidth
        },function(){
            $(".slide-con:first-child").appendTo(".slide-box2")
            $(".slide-box2").css({
                left:0
            })
        });
    }
    setInterval(slidemove, 3000);

    // pop
    $("#pop").hide();
    $(".notice .not-box > ul > li:first-child a").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    })


});