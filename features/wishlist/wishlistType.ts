import { StaticImageData } from "next/image";

export interface ICreateProductDTO {
    userId: string;
    productId: string;
}

export interface IWishlist {
    id?: string;
    name: string;
    description?: string;
    price: number;
    stockStatus?: "IN_STOCK" | "OUT_OF_STOCK";
    image?: string | StaticImageData;
}