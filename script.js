let songs = [];
let currentSongIndex = 0;
const playButton = document.getElementById('playBtn');
const prevButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');
const volumeRange = document.getElementById('volumeRange');
const volumeDisplay = document.getElementById('volumeDisplay');
const coverImg = document.getElementById('cover');
const songName = document.getElementById('songName');
const artistName = document.getElementById('artist');
const duration = document.getElementById('duration');
const audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;

// Cargar canciones desde JSON externo
fetch('songs.json')
    .then(response => response.json())
    .then(data => {
        songs = data;
        loadSong(currentSongIndex);
    })
    .catch(error => console.error('Error al cargar las canciones:', error));

function loadSong(songIndex) {
    const song = songs[songIndex];
    songName.textContent = song.name;
    artistName.textContent = song.artist;
    coverImg.src = song.img;
    audioPlayer.src = song.path;
    isPlaying = false;
    playButton.textContent = 'play_circle';
    coverImg.classList.remove('rotating');
    coverImg.style.animationPlayState = 'paused';
}

function playPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'play_circle';
        coverImg.style.animationPlayState = 'paused';
    } else {
        audioPlayer.play();
        playButton.textContent = 'pause_circle';
        coverImg.classList.add('rotating');
        coverImg.style.animationPlayState = 'running';
    }
    isPlaying = !isPlaying;
}

function updateVolume() {
    audioPlayer.volume = volumeRange.value / 100;
    volumeDisplay.textContent = volumeRange.value;
}

function updateDuration() {
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
    duration.textContent = `${minutes}:${seconds}`;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

playButton.addEventListener('click', playPause);
volumeRange.addEventListener('input', updateVolume);
audioPlayer.addEventListener('timeupdate', updateDuration);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);