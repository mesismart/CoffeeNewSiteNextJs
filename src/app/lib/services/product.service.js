export const getProductDetail = async (id) => {
  console.log("getProductDetail:", id);
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    console.log("res:", res.status);

    const clone = res.clone();
    const text = await clone.text();
    console.log("text:", text);

    const data = await res.json();
    return data.product;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    throw error;
  }
};

export async function getProductById(id) {
  console.log("getProductById:", id);
  if (!id) {
    throw new Error("Product id is missing");
  }
  return getProductDetail(id);
}
