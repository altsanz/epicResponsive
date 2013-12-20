$(document).ready(function() {



    var $myAudio = $('#epic-song');
    $myAudio.on('canplaythrough', function() {
        this.play();
    });

    $('iframe').on('load', function() {

        var timeTransition = 20 * 1000, // 20 seconds
            frequencyResizing = 100 // on miliseconds
            numIterations = timeTransition / frequencyResizing,
            initialWidth = $(window).height(),
            finalWidth = 320,
            differenceWidth = initialWidth - finalWidth,
            step = differenceWidth / numIterations;

        $('iframe').height($(window).height());

        $myAudio.trigger('canplaythrough');
        window.setInterval(function() {
            if ($('iframe').width() === finalWidth) return;
            $('iframe').width($('iframe').width() - step);
        }, frequencyResizing);

    });

});