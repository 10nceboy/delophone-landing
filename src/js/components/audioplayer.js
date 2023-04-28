import { mutedIcon, pause, play, unMutedIcon } from '../constants/audioplayer';

const volumes = document.querySelectorAll('.audioplayer__volume');
const playButtons = document.querySelectorAll('.audioplayer__play');

playButtons.forEach((playPauseButton) => {
  const playingAudio = playPauseButton
    .closest('.audioplayer')
    .querySelector('audio');

  playingAudio.addEventListener('ended', () => {
    playPauseButton.innerHTML = play;
    playPauseButton.dataset.play = 'false';
  });

  playPauseButton.addEventListener('click', (event) => {
    let isPlay = event.currentTarget.dataset;
    const toggledButtons = document.querySelectorAll(
      '.audioplayer__play[data-play="true"]'
    );

    toggledButtons.forEach((toggledButton) => {
      if (toggledButton !== event.currentTarget) {
        toggledButton.innerHTML = play;
        toggledButton.dataset.play = 'false';
        toggledButton.closest(`.audioplayer`).querySelector('.audio').pause();
      }
    });

    if (isPlay.play == 'false') {
      playingAudio.play();
      playPauseButton.innerHTML = pause;
      isPlay.play = 'true';
    } else {
      playingAudio.pause();
      isPlay.play = 'false';
      playPauseButton.innerHTML = play;
    }
  });
});

volumes.forEach((volume) => {
  const audio = volume.closest('.audioplayer').querySelector('audio');
  volume.addEventListener('click', (event) => {
    let isMuted = event.currentTarget.dataset;

    if (isMuted.volume == 'unmuted') {
      event.currentTarget.innerHTML = mutedIcon;
      isMuted.volume = 'muted';
      audio.volume = 0;
    } else {
      event.currentTarget.innerHTML = unMutedIcon;
      isMuted.volume = 'unmuted';
      audio.volume = 1;
    }
  });
});
