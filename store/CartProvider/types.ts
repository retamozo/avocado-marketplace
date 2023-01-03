export enum ActionType {
  Add = "ADD",
  Remove = "REMOVE",
  OpenCart = "OPEN_CART",
}

type Id = string;

export type RemovePayload = {
  id: Id,
  quantity?: number
  all?: boolean
}

export type CartAction =
  | {
    type: ActionType.Add;
    payload: {
      item: TProduct;
      quantity?: number;
    };
  }
  | {
    type: ActionType.Remove; payload: RemovePayload
  }
  | { type: ActionType.OpenCart; payload: boolean }

export type CartItem = {
  item: TProduct;
  quantity?: number;
};

export type CartState = {
  items: Record<string, CartItem>,
  loading: boolean;
  error: boolean;
  open: boolean;
};

export type UseCart = () => {
  itemsQuantity: number;
  items: CartItem;
  open: boolean;
};
