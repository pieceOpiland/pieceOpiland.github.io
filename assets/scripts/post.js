(function() {
    // On Document-Ready
    $(function() {
        // Cache the hero element
        var $hero = $(".hero .image");
        // Make sure that we even have a hero image before adding listeners.
        if( $hero.length > 0 ) {
            var $window = $(window);
            // Add an on scroll listener
            $window.on("scroll", function() {
                // When the browser repaints the page (performance optimization)
                window.requestAnimationFrame(function() {
                    // Set the background-position to half the scroll top.
                    $hero.css("transform", "translate3d(0, " + Math.floor($window.scrollTop() * .5) + "px, 0)");
                });
            });
        }
    });
})();