$(document).ready(function() {


    var $myAudio = $('#epic-song');
    $myAudio.on('canplaythrough', function() {
        this.play();
    });
    
    $('iframe').on('load', function() {
    	$myAudio.trigger('canplaythrough');
    });
});