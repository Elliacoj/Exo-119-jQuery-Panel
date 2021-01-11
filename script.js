$(".panel").click(function() {
    if($(this).hasClass("panel")) {
        $(this).removeClass("panel").toggleClass("open");
    }

    else {
        $(this).removeClass("open").toggleClass("panel");
    }
})