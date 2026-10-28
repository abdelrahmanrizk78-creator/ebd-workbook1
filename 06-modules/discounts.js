// 06-modules — a module written for someone else to import.

// A NAMED export: importers ask for it as { halfPrice }.
export function halfPrice(amount) {
  return amount / 2;
}

// The DEFAULT export: importers can call it whatever they like.
const saleName = "Winter sale";
export default saleName;
