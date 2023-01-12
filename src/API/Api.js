export const getAllProducts = async () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(console.log);
};
