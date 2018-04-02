function playPause() {
    var myAudio = document.getElementById("myaudio");
    if(myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}
