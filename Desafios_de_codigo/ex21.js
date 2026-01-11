const audio = new Audio('song.mp3')

document.querySelector('.audio').onclick = () => {
    audio.play()
}