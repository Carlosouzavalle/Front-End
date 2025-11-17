const songs = [
    { 
        title: "Aquelas coisas - joão gomes",
        src: "musicas/AQUELASCOISAS.mp3"
    },
    {
        title: "Magica - Calcinha Preta",
        src: "musicas/CalcinhaPretaMágica.mp3"
    }
]

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const musicTitle = document.getElementById("musicTitle");

let currentSong = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    musicTitle.textContent = songs[index].title;
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener("click", () => {
    currentSong--;
    if (currentSong < 0) currentSong = songs.length - 1;
    loadSong(currentSong);
    playSong();
});

nextBtn.addEventListener("click", () => {
    currentSong++;
    if (currentSong >= songs.length) currentSong = 0;
    loadSong(currentSong);
    playSong();
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    progressBar.max = audio.duration;
});


progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});


loadSong(currentSong);



// audio.play()	Inicia a reprodução
// audio.pause()	Pausa
// audio.load()	Recarrega a mídia
// audio.currentTime = X	Avança/retrocede para posição X
// audio.volume = 0.5	Ajusta volume
// audio.duration	Duração da música
// audio.paused	Retorna true/false
// audio.src = ...	Troca o arquivo da música


// 📌 Por baixo dos panos
// O <audio> é tratado como um objeto JavaScript completo.
// O navegador implementa a interface HTMLMediaElement, que já vem com .play() embutido.
// É literalmente como chamar uma função nativa:
// window.alert("Olá!");
// audio.play();

// audio.play() retorna uma Promise.
// audio.play()
//   .then(() => console.log("Tocando"))
//   .catch(err => console.log("Erro:", err));


// 📌 Em resumo:

// ✔ Sim, é um método especial do navegador
// ✔ Pertence ao elemento <audio>
// ✔ É usado para iniciar a reprodução
// ✔ Faz parte da API HTMLMediaElement




//===========================================Coisas que eu estava testando=============================

// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px"
//     document.getElementById("container-seach-upgrade").style.marginLeft = "200px"
//     if (window.innerWidth < 768) {
//         document.getElementById("seach-bar").style.width = "200px"
//         document.getElementById("seach-bar").style.height = "30px"
//         document.getElementById("upgrade-container").style.display = "none"
//     }
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0"
//     if (window.innerWidth < 768) {
//         document.getElementById("container-seach-upgrade").style.marginLeft = "0";
//         document.getElementById("upgrade-container").style.display = "block";
//     }
// }
