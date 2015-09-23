(function(){

    $('#calendarToggle').click(function(e){
        e.preventDefault();
    });
    
    //$('#calendarToggle').toggleClass('closed open');
    //$('#calendarOptions').css({display: 'block'});

    $('#calendarToggle').mouseenter(function(e) {

        e.stopPropagation();

        var $this = $(this),
            $options = $('#calendarOptions');

        $this.toggleClass('closed open');
        $options.css({display: 'block'});

    });

    $('#calendarOptions').mouseleave(function(e) {

        e.stopPropagation();

        var $this = $(this),
            $toggle = $('#calendarToggle');

        $toggle.toggleClass('closed open');
        $this.css({display: 'none'});

    });

    $('.quarterToggle').click(function(e) {
        e.preventDefault();
    });

    $('.quarterToggle').parent().mouseenter(function() {

        var $this = $(this),
            $quarters = $(this).children('.quarters');

        $('.quarters').css({display: 'none'});

        $quarters.css({display: 'block'});

    });

    $('.quarterToggle').parent().mouseleave(function() {

        $('.quarters').css({display: 'none'});

    });

})();