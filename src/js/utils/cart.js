export const saveCart = (cartArray) => {
  localStorage.setItem('cartArray', JSON.stringify(cartArray));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cartArray')) || [];
};
