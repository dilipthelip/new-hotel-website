(function($){
    $(document).ready(function(){
        $( ".menu-toggle" ).click(function() {
            $(".menu").slideToggle( "fast" );
        });

        $( ".magnifier" ).click(function() {
            $(".search").slideToggle( "fast" );
        });

        $( ".menu ul li .triangle-wrapper" ).click(function() {
            $(this).find('span').toggleClass( "triangle-bottom" );
            $(this).parent().find(".sub-menu").slideToggle( "fast" );
        });

        $('.flexslider').flexslider({
            animation: "fade",
            slideshow: false
        });
    });
})(jQuery);
