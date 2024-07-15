
const apikey = "2c0b7277968546778dded1fa7673a59b20240713001536325110";
const appId = "2ZG3CTAVFT9G2RH";
const orgId = "dbe4c039a8e3480db9d254f7b10e049a";
<<<<<<< HEAD
const query = `Appid=${appId}&Apikey=${apikey}`;

export async function getAllProducts(pageNum) {
  const res = await fetch(
    `/api/products?organization_id=${orgId}&page=${pageNum}&size=${9}&${query}`
  );
=======
const query = `size=${9}&Appid=${appId}&Apikey=${apikey}`;

export async function getAllProducts(pageNum) {
  const res = await fetch(`/api/products?organization_id=${orgId}&page=${pageNum}&${query}`);
>>>>>>> 73ae492a91e4ba2b6609574df2518560a5633a83
  if (!res.ok) throw Error("Failed getting products");

  const { items } = await res.json();
  return items;
}

export async function getProduct(productId) {
  const res = await fetch(
    `/api/products/${productId}?organization_id=${orgId}&${query}`
  );

  if (!res.ok) throw Error("Failed getting product");

  const items = await res.json();
  return items;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`/api/products?${query}`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
