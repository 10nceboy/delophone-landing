import { mutedIcon, pause, play, unMutedIcon } from '../constants/audioplayer';

const volumes = document.querySelectorAll('.audioplayer__volume');
const playButtons = document.querySelectorAll('.audioplayer__play');

const handlePlayPause = (button) => {
  let isPlay = button.dataset.play;
  const audio = button.closest('.audioplayer').querySelector('audio');
  if (isPlay == 'false') {
    button.innerHTML = pause;
    button.dataset.play = 'true';
    audio.play();
  } else {
    button.innerHTML = play;
    button.dataset.play = 'false';
    audio.pause();
  }
};

playButtons.forEach((playPauseButton) => {
  const playingAudio = playPauseButton
    .closest('.audioplayer')
    .querySelector('audio');

  playingAudio.addEventListener('ended', () => {
    handlePlayPause(playPauseButton);
  });

  playPauseButton.addEventListener('click', (event) => {
    handlePlayPause(playPauseButton);
    const toggledButtons = document.querySelectorAll(
      '.audioplayer__play[data-play="true"]'
    );

    toggledButtons.forEach((toggledButton) => {
      if (toggledButton !== event.currentTarget) {
        handlePlayPause(toggledButton);
      }
    });
  });
});

const handleMuteUnmute = (event) => {
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

volumes.forEach((volume) => {
  volume.addEventListener('click', handleMuteUnmute);
});
