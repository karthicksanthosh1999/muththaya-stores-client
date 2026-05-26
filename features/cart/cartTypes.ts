import { StaticImageData } from "next/image";

export interface IProductDTO {
    id?: string;
    name: string;
    description?: string;
    price: number;
    image?: string | StaticImageData,
    stockStatus?: "IN_STOCK" | "OUT_OF_STOCK";
}

export interface ICreateProductDTO{
    id?: string;
    name: string;
    description?: string;
    slug: string;
    price: number;
    stock: number;
    categoryId: string;
    image?: string,
    imagePublicId?: string
};