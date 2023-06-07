const pointers = document.querySelectorAll('.device__pointer');
const images = document.querySelectorAll('.device__image');
const dots = document.querySelectorAll('.device__dot');

pointers.forEach((pointer) =>
  pointer.addEventListener('mouseenter', (event) => {
    let pointerId = event.currentTarget.dataset.pointer;

    pointers.forEach((pointer) =>
      pointer.classList.remove('device__pointer_active')
    );

    images.forEach((image) => image.classList.remove('device__image_active'));

    dots.forEach((dot) => dot.classList.remove('device__dot_active'));

    document
      .querySelector(`.device__pointer[data-pointer="${pointerId}"]`)
      .classList.add('device__pointer_active');

    document
      .querySelector(`.device__dot[data-dot="${pointerId}"]`)
      .classList.add('device__dot_active');

    if (['1', '2', '3', '5', '6'].includes(pointerId)) {
      document
        .querySelector(`.device__image[data-image="1"]`)
        .classList.add('device__image_active');
    }

    if (pointerId === '4') {
      document
        .querySelector(`.device__image[data-image="2"]`)
        .classList.add('device__image_active');
    }

    if (pointerId === '7') {
      document
        .querySelector(`.device__image[data-image="3"]`)
        .classList.add('device__image_active');
    }
  })
);
