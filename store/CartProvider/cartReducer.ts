import { handleAddItem, handleRemoveItem } from "./helpers";
import { CartAction, ActionType, CartState } from "./types";

const initialCartState: CartState = {
  items: {},
  error: false,
  loading: false,
  open: false,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionType.Add: {
      return {
        ...state,
        items: {
          ...state.items,
          ...handleAddItem(state.items, action.payload),
        },
      };
    }
    case ActionType.Remove: {
      return {
        ...state,
        items: handleRemoveItem(state.items, action.payload)
      };
    };
    case ActionType.OpenCart: {
      return {
        ...state,
        open: action.payload,
      };
    }
    default:
      throw new Error(`Unhandled action type in Cart Reducer`);
  }
};

export { cartReducer, initialCartState };
