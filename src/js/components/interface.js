import { getDeviceType } from '../utils/dom';

const steps = document.querySelectorAll('.ip-delofon__interface-step');
const images = document.querySelectorAll('.ip-delofon__interface-image');
let deviceType = getDeviceType();
const step1 = document.querySelector(
  `.ip-delofon__interface-image[data-step="1"]`
);

const step4 = document.querySelector(
  `.ip-delofon__interface-image[data-step="4"]`
);

const card = document.querySelector(`.ipnterfac__card`);

if (['tablet', 'laptop'].includes(deviceType)) {
  if (step1) {
    document
      .querySelector(`.ip-delofon__interface-image[data-step="1"]`)
      .classList.add('ip-delofon__interface-image_active');
  }
} else {
  step4?.classList.add('ip-delofon__interface-image_active');
}

steps.forEach((step) => {
  step.addEventListener('mouseenter', (event) => {
    let stepId = event.currentTarget.dataset.step;

    steps.forEach((step) =>
      step.classList.remove('ip-delofon__interface-step_active')
    );

    images.forEach((image) => {
      image.classList.remove('ip-delofon__interface-image_active');
    });

    if (!['tablet', 'laptop'].includes(deviceType)) stepId = Number(stepId) + 3;

    const imageItem = document.querySelector(
      `.ip-delofon__interface-image[data-step="${stepId}"]`
    );

    if (!imageItem) return;
    imageItem.classList.add('ip-delofon__interface-image_active');
  });
});

if (card) {
  card.addEventListener('mouseleave', () => {
    images.forEach((image) =>
      image.classList.remove('ip-delofon__interface-image_active')
    );
    document
      .querySelector(`.ip-delofon__interface-image[data-step="1"`)
      .classList.add('ip-delofon__interface-image_active');
  });
}
