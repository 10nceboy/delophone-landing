export const watchValue = (el, callback) => {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === `data-value`) {
        callback(el);
      }
    });
  });

  observer.observe(el, {
    attributes: true,
    childList: false,
    characterData: false
  });
};
