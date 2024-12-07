// Аудіо. по кліку на кнопку запускаємо функцію playSound
document.getElementById('playBtn').onclick = playSound;

function playSound() {
  const music = document.getElementById('audioElement');
  const playBtn = document.getElementById('playBtn');

  if (music.paused) {
    music.play();
    playBtn.value = 'Stop';
  } else {
    music.pause();
    playBtn.value = 'Play';
  }
}
