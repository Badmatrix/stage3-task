const apikey = "2c0b7277968546778dded1fa7673a59b20240713001536325110";
const appId = "2ZG3CTAVFT9G2RH";
const orgId = "dbe4c039a8e3480db9d254f7b10e049a";
const query = `organization_id=${orgId}&Appid=${appId}&Apikey=${apikey}`;

export async function getAllProducts() {
  const res = await fetch(`/api/products?${query}`);
  if (!res.ok) throw Error("Failed getting products");


  const { items } = await res.json();
  return items;
}

export async function getProduct(productId) {
  const res = await fetch(`/api/products/${productId}?${query}`);
  if (!res.ok) throw Error("Failed getting product");

    const  items  = await res.json();
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


