import { CartItem } from "./types";

const handleAddItem = (
  prevState: Record<string, CartItem>,
  { item, quantity: newQuantity }: CartItem
): Record<string, CartItem> => {
  const existentItem = prevState[item.id];

  return !!existentItem
    ? {
      [item.id]: {
        item: existentItem.item,
        quantity: newQuantity > 0 ? newQuantity : existentItem.quantity + 1,
      },
    }
    : {
      [item.id]: {
        item,
        quantity: 1,
      },
    };
};

const handleRemoveItem = (
  prevState: Record<string, CartItem>,
  { id, quantity, all }: { id: string; quantity?: number, all?: boolean }) => {
  const buffer = { ...prevState };
  if (buffer[id]) {
    all ? delete buffer[id] : buffer[id].quantity--;
  }
  return { ...buffer };
};

export { handleAddItem, handleRemoveItem };
