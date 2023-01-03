import React, {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  useMemo,
} from "react";
import { cartReducer, initialCartState } from "./cartReducer";
import {
  ActionType,
  CartAction,
  CartState,
  UseCart,
  RemovePayload,
} from "./types";

const CartContext = createContext<CartState | undefined>(undefined);

const CartMutationsContext = createContext<Dispatch<CartAction> | undefined>(
  undefined
);

CartContext.displayName = "Product Card Context";

CartMutationsContext.displayName = "Card Mutations Context";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

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
    open: context.open,
  };
};

const useCartMutations = () => {
  const dispatch = useContext(CartMutationsContext);
  if (typeof dispatch === "undefined") {
    throw new Error(
      "useCartMutations must be used within a CartMutationsProvider"
    );
  }

  const removeItem = ({ id, quantity, all }: RemovePayload) => {
    dispatch({
      type: ActionType.Remove,
      payload: {
        id,
        quantity,
        all,
      },
    });
  };

  const addToCart = (item: TProduct, quantity: number = 0) =>
    dispatch({
      type: ActionType.Add,
      payload: {
        item,
        quantity,
      },
    });

  const openCart = (payload: boolean) =>
    dispatch({
      type: ActionType.OpenCart,
      payload,
    });

  return {
    addToCart,
    openCart,
    removeItem,
  };
};

export { CartProvider, useCartMutations, useCart };
