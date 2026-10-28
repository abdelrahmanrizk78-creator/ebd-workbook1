// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Draws the given items into #list as "{name} - {price} EGP", replacing
// whatever was there before.
export function renderItems(list) {
  const target = document.querySelector("#list");
  target.textContent = "";

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = `${item.name} - ${item.price} EGP`;
    target.append(row);
  }
}

// Only the items that are in stock.
export function matching() {
  return items.filter((item) => item.inStock === true);
}

// Shows everything now; shows only the in-stock items once #select is clicked.
export function start() {
  renderItems(items);

  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });
}

// In the real browser there is no `process`, so set the page up on load.
// The tests run in Node and call start() themselves.
if (typeof process === "undefined") {
  start();
}
