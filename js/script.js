$(document).ready(function() {


    var $myAudio = $('#epic-song');
    $myAudio.on('canplaythrough', function() {
        this.play();
    });

    $myAudio.trigger('canplaythrough');
});