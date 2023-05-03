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

(function () {
  const audiosMap = new Map();
  let isLoading = true;
  let interval;

  const isMobile = () => {
    return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      navigator.userAgent
    );
  };

  const isSLowConnection = () => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return ['slow-2g', '2g', '3g'].includes(
      connection && connection.effectiveType
    );
  };

  const partialAudioPreload = (audio, firstPart = 12000) => {
    if (!audio.src || !audio.src.includes('.mp3')) return;
    const fileSrc = audio.src;
    const mediaSource = new MediaSource();
    audio.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener('sourceopen', handleSourceOpen, {
      once: true
    });
    async function handleSourceOpen() {
      URL.revokeObjectURL(audio.src);
      const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
      const response = await fetch(fileSrc, {
        headers: { range: `bytes=0-${firstPart}` }
      });
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
      sourceBuffer.addEventListener('updateend', handleSourceUpdate, {
        once: true
      });
    }

    function handleSourceUpdate() {
      audio.addEventListener(
        'playing',
        () => {
          fetch(fileSrc, { headers: { range: `bytes=${firstPart + 1}-` } })
            .then((response) => response.arrayBuffer())
            .then((data) => {
              const sourceBuffer = mediaSource.sourceBuffers[0];
              sourceBuffer.appendBuffer(data);
              sourceBuffer.addEventListener('updateend', function () {
                mediaSource.endOfStream();
              });
            })
            .catch((error) => {
              console.error(error);
            });
        },
        { once: true }
      );
    }
  };

  const preloadAudio = (audio) => {
    if (!isSLowConnection() && !isMobile()) {
      audio.load();
      audio.pause();
    } else {
      partialAudioPreload(audio);
    }
  };

  const preloadAudios = () => {
    document.querySelectorAll('audio[data-preload]').forEach((audio) => {
      delete audio.dataset.preload;
      audio.dataset.preloading = 'true';
      audio.dataset.origin = audio.src;
      if (!audiosMap.get(audio.src)) {
        preloadAudio(audio);
        audiosMap.set(audio.src.split('/').pop(), audio);
      }
    });
  };

  if (
    window.scrollY >
    screen.availHeight - Math.round(screen.availHeight / 10)
  ) {
    interval = setInterval(() => {
      preloadAudios();
    }, 300);
  } else {
    document.addEventListener(
      'scroll',
      () => {
        if (isLoading) {
          interval = setInterval(() => {
            preloadAudios();
          }, 300);
        }
      },
      { passive: true, once: true }
    );
  }

  window.addEventListener('load', () => {
    isLoading = false;
    clearInterval(interval);
    preloadAudios();
    document.querySelectorAll('[data-preloading="true"]').forEach((audio) =>
      audio.addEventListener('canplay', (evt) => {
        if (evt.target) {
          delete evt.target.dataset.preloading;
          evt.target.dataset.preloaded = 'true';
        }
      })
    );
  });
})();
