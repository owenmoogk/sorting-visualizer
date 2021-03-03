// from https://stackoverflow.com/questions/39200994/how-to-play-a-specific-frequency-with-javascript

// create web audio api context
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
    if (soundsOn){
        return
    }
    // create Oscillator node
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(
        function() {
            oscillator.stop();
        }, duration);
}