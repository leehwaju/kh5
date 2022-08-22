// ###### dom ready
$(function() {

    // ############ 상단 navigation
    $(".navi").on({
        mouseenter: function(e) {
            $("#subMenu_wrap").slideDown(300);
        },
        mouseleave: function(e) {
            $("#subMenu_wrap").slideUp(300);
        },
    });

    //- sub menu
    $(".ov").on({
        mouseenter: function(e) {
            console.log($(this).find("ul"))
            $(this).find("ul").css({visibility:"visible"});
        },
        mouseleave: function(e) {
            $(this).find("ul").css({visibility:"hidden"});
        },
    });
});