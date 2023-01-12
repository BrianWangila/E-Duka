export const getAllProducts = async () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
