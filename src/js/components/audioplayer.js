import { icons } from '../constants/audioplayer';
import { resetTimer, startTimer } from '../utils/timer';

const volumes = document.querySelectorAll('.audioplayer__volume');
const playButtons = document.querySelectorAll('.audioplayer__play');

const handlePlayToggle = (button) => {
  let isPlay = button.dataset.play;
  const audio = button.closest('.audioplayer').querySelector('audio');
  if (isPlay == 'false') {
    button.innerHTML = icons.pause;
    button.dataset.play = 'true';
    audio.play();
  } else {
    button.innerHTML = icons.play;
    button.dataset.play = 'false';
    audio.pause();
  }
};

const handleMuteToggle = (event) => {
  let { target } = event;
  const audio = target.closest('.audioplayer').querySelector('audio');
  if (target.dataset.volume == 'unmuted') {
    target.innerHTML = icons.muted;
    target.dataset.volume = 'muted';
    audio.volume = 0;
  } else {
    target.innerHTML = icons.umuted;
    target.dataset.volume = 'unmuted';
    audio.volume = 1;
  }
};

const renderTimer = (event) => {
  let { target } = event;
  const timer = target
    .closest('.audioplayer')
    .querySelector('.audioplayer__play-time');
  const mobileTimer = target
    .closest('.audioplayer')
    .querySelector('.audioplayer__total-time-mobile');

  if (timer) {
    const minutes = Math.floor(target.currentTime / 60, 10);
    const seconds = Math.floor(target.currentTime % 60);
    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  if (mobileTimer) {
    const minutes =
      Math.floor(target.duration / 60) - Math.floor(target.currentTime / 60);
    const seconds =
      Math.floor(target.duration % 60) - Math.floor(target.currentTime % 60);
    mobileTimer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
};

playButtons.forEach((playPauseButton) => {
  const playingAudio = playPauseButton
    .closest('.audioplayer')
    .querySelector('audio');

  playingAudio.addEventListener('ended', () => {
    handlePlayToggle(playPauseButton);
    playingAudio.currentTime = 0;
  });

  playingAudio.addEventListener('timeupdate', renderTimer);

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
    let perzent = Math.floor((audio.currentTime / audio.duration) * 100);
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
