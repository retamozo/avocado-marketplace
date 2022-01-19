export interface IProduct {
    img: Img;
    _id: string;
    name: string;
    cost: number;
    category: Category;
}

export interface RedeemedProduct extends IProduct {
    createDate: string;
    productId: string;
}

export type Img = {
    url: string;
    hdUrl: string;
};

export type Category =
    | "Phones"
    | "Gaming"
    | "Laptops"
    | "Cameras"
    | "Audio"
    | "Monitors & TV"
    | "Drones"
    | "Phone Accessories"
    | "Smart Home"
    | "PC Accessories"
    | "Tablets & E-readers"
    | "PC Accesories";