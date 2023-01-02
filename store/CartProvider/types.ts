export enum ActionType {
    Add = "ADD",
    Remove = "REMOVE",
}

export type CartAction = {
    product: TProduct;
    type: ActionType;
    quantity: number;
};

export type CartItem = {
    [productId: string]: {
        item: TProduct;
        quantity: number;
    };
};

export type CartState = {
    items: CartItem;
    loading: boolean;
    error: boolean;
};

export type UseCart = () => {
    itemsQuantity: number;
    items: CartItem;
};
