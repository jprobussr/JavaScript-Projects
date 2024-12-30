const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const currenTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    
});

audio.addEventListener('timeupdate', () => {
    currenTime.innerText = audio.currentTime;
});

volume.addEventListener('change', () => (audio.volume = volume.value));