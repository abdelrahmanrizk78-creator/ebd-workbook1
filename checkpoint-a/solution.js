// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Every order in the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Only the orders from Giza whose status is cancelled.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

// 3. The highest single price in the list (quantity ignored), 0 when empty.
export function summarize(orders) {
  return orders.reduce((highest, order) => Math.max(highest, order.price), 0);
}

// 4. "{student}: {item} x{quantity}", or a not-found message. Never throws.
export async function describeOrder(id) {
  try {
    const { student, item, quantity } = await findOrderById(id);
    return `${student}: ${item} x${quantity}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

// 5. JSON text keeping only item and price from each order.
export function toJsonLines(orders) {
  return JSON.stringify(orders.map(({ item, price }) => ({ item, price })));
}
