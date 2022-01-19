import { RedeemedProduct } from "types/product";

export interface User {
    _id: string;
    name: string;
    points: number;
    createDate: string;
    redeemHistory: RedeemedProduct[] //complete
    __v: number; // version ?
}

