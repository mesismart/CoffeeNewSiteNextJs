export const getOrders = async () => {
  const res = await fetch("http://localhost:4000/orders");
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
