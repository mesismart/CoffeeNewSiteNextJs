// src/services/ticket.service.js
export const getTickets = async () => {
  const res = await fetch("http://localhost:4000/tickets");
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
