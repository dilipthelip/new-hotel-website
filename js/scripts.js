(function($){
    $(document).ready(function(){
        $( ".menu-toggle" ).click(function() {
            $(".menu").slideToggle( "fast" );
        });

        $( ".magnifier" ).click(function() {
            $(".search").slideToggle("fast").focus();
        });

        $(".search").blur(function () {
            $(".search").slideToggle("fast");
        });

        $( ".menu ul li .triangle-wrapper" ).click(function() {
            $(this).find('span').toggleClass( "triangle-bottom" );
            $(this).parent().find(".sub-menu").slideToggle( "fast" );
        });

        $('.flexslider').flexslider({
            animation: "fade",
            slideshow: true,
            directionNav: false
        });

        $('.flexslider-2').flexslider({
            animation: "slide",
            directionNav: false
        });

        $(".flexslider ol").addClass("container");


        $(function() {
            var $dp = $( ".datepicker" );
            $dp.datepicker({
                showOtherMonths: true,
                dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                dateFormat:"dd/mm/yy"
            });

            $dp.datepicker( "setDate" , "0");
        });

        $(".services").hover(function () {
            $(this).addClass("active-div")
        },
        function () {
            $(this).removeClass("active-div")
        });

        $(".menu-wrapper li .sub-menu").mCustomScrollbar({
            theme:"minimal"
        });
    });
})(jQuery);
