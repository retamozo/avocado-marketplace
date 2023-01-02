import React, {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  useMemo,
} from "react";
import { ActionType, CartAction, CartItem, CartState, UseCart } from "./types";

const CartContext = createContext<CartState | undefined>(undefined);
const CartMutationsContext = createContext<Dispatch<CartAction> | undefined>(
  undefined
);

CartContext.displayName = "Product Card Context";

const handleAddItem = (
  inventory: CartItem,
  { product, quantity: newQuantity }: CartAction
): CartItem => {
  const existentItem = inventory[product.id];
  console.log(existentItem);

  return !!existentItem
    ? {
        [product.id]: {
          item: existentItem.item,
          quantity: newQuantity > 0 ? newQuantity : existentItem.quantity + 1,
        },
      }
    : {
        [product.id]: {
          item: { ...product },
          quantity: 1,
        },
      };
};

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case ActionType.Add: {
      return {
        ...state,
        items: { ...state.items, ...handleAddItem(state.items, action) },
      };
    }
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const initialState: CartState = {
  items: {},
  error: false,
  loading: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={state}>
      <CartMutationsContext.Provider value={dispatch}>
        {children}
      </CartMutationsContext.Provider>
    </CartContext.Provider>
  );
};

const useCart: UseCart = () => {
  const context = useContext(CartContext);
  if (typeof context === "undefined") {
    throw new Error("useCount must be used within a CartProvider");
  }

  const itemsQuantity = useMemo(
    () =>
      Object.values(context.items).reduce((acc, item) => {
        return (acc += item.quantity);
      }, 0),
    [context.items]
  );

  return {
    items: context.items,
    itemsQuantity,
  };
};

const useCartMutations = () => {
  const dispatch = useContext(CartMutationsContext);
  if (typeof dispatch === "undefined") {
    throw new Error(
      "useCartMutations must be used within a CartMutationsProvider"
    );
  }

  const addToCart = (item: TProduct, quantity: number = 0) =>
    dispatch({
      product: item,
      quantity,
      type: ActionType.Add,
    });

  return {
    addToCart,
  };
};

export { CartProvider, useCartMutations, useCart };
