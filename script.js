/**--------------- CODI PER CANVIAR LES ICONES AL CLICAR-LES I FER-LES FUNCIONAR ---------------**/
let video = document.getElementById('video');
let playPauseControl = document.getElementById('play-pause-control');
let volumeControl = document.getElementById('volume-control');
let navbar = document.getElementById('navbar');

playPauseControl.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playPauseControl.textContent = 'pause_circle';
    } else {
        video.pause();
        playPauseControl.textContent = 'play_circle';
    }
});

volumeControl.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        volumeControl.textContent = 'volume_up';
    } else {
        video.muted = true;
        volumeControl.textContent = 'volume_off';
    }
});

/**--------------- CODI PER REPRODUIR EL VÍDEO AL FER SCROLL ---------------**/
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
            playPauseControl.textContent = 'pause_circle';
        } else {
            video.pause();
            playPauseControl.textContent = 'play_circle';
        }
    });
}, {
    threshold: 0.5 // el video ha d'estar visible al 50% com a mínim
});
observer.observe(video);

/**--------------- CODI PER AMPLIAR LA BARRA AL CARREGAR LA PÀGINA I REDUIR-LA AL FER SCROLL ---------------**/
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-lg');
    } else {
        navbar.classList.remove('navbar-lg');
    }
});

setTimeout(() => {
    navbar.classList.add('navbar-lg');
}, 1000); 

/**--------------- CODI PER MODIFICAR LA MIDA DE L'ICONA DE LA NAVBAR A MESURA QUE ES FA SCROLL ---------------**/
window.addEventListener('scroll', function() {
    const icon = document.getElementById('kebab_icon');
    const scrollPosition = window.scrollY;

    // Cambia la rotación y tamaño de la icono según el scroll
    icon.style.transform = `rotate(${scrollPosition}deg) scale(${1 + scrollPosition / 1000})`;
});