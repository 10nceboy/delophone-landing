export const watchData = (el, field, callback) => {
  const observer = new MutationObserver(function (mutations) {
    console.log(mutations);
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === `data-${field}`) {
        callback(mutation);
      }
    });
  });
  observer.observe(el, {
    attributes: true,
    childList: false,
    characterData: false
  });
};
