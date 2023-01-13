// fetch all products
export const getAllProducts = async () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

// fetch all products by category
export const getProductsByCategory = async (category) => {
  return fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

// add product to cart
export const addToCart = async (id) => {
  fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }),
  }).then((res) => res.json());
};
