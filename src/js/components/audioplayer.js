import { mutedIcon, pause, play, unMutedIcon } from '../constants/audioplayer';
import { resetTimer, startTimer } from '../utils/timer';

var audio1 = new Audio();
audio1.src = '../../public/audio/IVR-2.mp3';

var audioContext = new AudioContext();

// Создаем новый объект SourceBuffer
var sourceBuffer = audioContext.createBufferSource();

// Создаем новый объект XMLHttpRequest для загрузки файла аудио
var xhr = new XMLHttpRequest();
xhr.open('GET', audio1.src, true);
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
  // Декодируем загруженный файл аудио и сохраняем его в объекте AudioBuffer
  audioContext.decodeAudioData(xhr.response, function (buffer) {
    // Устанавливаем буфер в SourceBuffer и начинаем воспроизведение
    sourceBuffer.buffer = buffer;
    sourceBuffer.connect(audioContext.destination);
    sourceBuffer.start(0);
  });
};

// Отправляем запрос на загрузку файла аудио
xhr.send();

const volumes = document.querySelectorAll('.audioplayer__volume');
const playButtons = document.querySelectorAll('.audioplayer__play');

const handlePlayToggle = (button) => {
  let isPlay = button.dataset.play;

  if (isPlay == 'false') {
    button.innerHTML = pause;
    button.dataset.play = 'true';
    audio1.play();
  } else {
    button.innerHTML = play;
    button.dataset.play = 'false';
    audio1.pause();
  }
};

audio1.addEventListener('play', function () {
  // Воспроизводим аудио из буфера
  sourceBuffer.start(0);
});

audio1.addEventListener('pause', function () {
  // Останавливаем аудио и устанавливаем текущее время равным начальному времени
  sourceBuffer.stop(0);
  audio.currentTime = 0;
});

const handleMuteToggle = (event) => {
  let { target } = event;

  const audio = target.closest('.audioplayer').querySelector('audio');
  if (target.dataset.volume == 'unmuted') {
    target.innerHTML = mutedIcon;
    target.dataset.volume = 'muted';
    audio.volume = 0;
  } else {
    target.innerHTML = unMutedIcon;
    target.dataset.volume = 'unmuted';
    audio.volume = 1;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    audio.load();
  });

  playButtons.forEach((playPauseButton) => {
    const playingAudio = playPauseButton
      .closest('.audioplayer')
      .querySelector('audio');

    playingAudio.addEventListener('ended', () => {
      handlePlayToggle(playPauseButton);
    });

    playPauseButton.addEventListener('click', (event) => {
      handlePlayToggle(playPauseButton);
      const toggledButtons = document.querySelectorAll(
        '.audioplayer__play[data-play="true"]'
      );

      toggledButtons.forEach((toggledButton) => {
        if (toggledButton !== event.currentTarget) {
          handlePlayToggle(toggledButton);
        }
      });
    });
  });
});

volumes.forEach((volume) => {
  volume.addEventListener('click', handleMuteToggle);
});

const handleTimeLineClick = (event) => {
  const { target: timeline, clientX } = event;
  const audio = timeline.closest('.audioplayer').querySelector('.audio');
  const rect = timeline.getBoundingClientRect();
  const x = clientX - rect.left;
  const pcent = Math.floor((x / rect.width) * 100);
  const to = (audio.duration * pcent) / 100;
  timeline.querySelector('.audioplayer__progress').style.width = `${pcent}%`;
  audio.currentTime = to;
  const button = timeline
    .closest('.audioplayer')
    .querySelector('.audioplayer__play');

  const toggledButtons = document.querySelectorAll(
    '.audioplayer__play[data-play="true"]'
  );

  toggledButtons.forEach((toggledButton) => {
    if (toggledButton !== button) {
      handlePlayToggle(toggledButton);
    }
  });
};

document.querySelectorAll('.audio').forEach((audio) => {
  audio.addEventListener('timeupdate', () => {
    const time = audio
      .closest('.audioplayer')
      ?.querySelector('.audioplayer__progress');
    if (!time) return;
    let perzent = (audio.currentTime / audio.duration) * 100;
    time.style.width = `${perzent}%`;

    if (perzent == 100) {
      time.style.width = '0%';
    }
  });
});

document
  .querySelectorAll('.audioplayer__progress-wrapper')
  .forEach((timeline) => {
    timeline.addEventListener('click', handleTimeLineClick);
  });
