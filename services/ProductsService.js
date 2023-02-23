export async function getProducts() {
  const data = await fetch("https://dummyjson.com/products?limit=10").then(
    (res) => res.json()
  );
  const products = data.products;
  return products;
}

export async function getProduct(id) {
  const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );

  return data;
}
