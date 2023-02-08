/**
 * Wathces for the chages of data-value attribute of HTML element, runs callback on every change
 * @param {HTMLElement} el
 * @param {Function(HTMLElement)} callback
 */
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
