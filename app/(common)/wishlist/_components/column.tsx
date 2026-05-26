"use client"

import { IWishlist } from "@/features/wishlist/wishlistType";
import { ColumnDef } from "@tanstack/react-table"
import Image, { StaticImageData } from "next/image";
import { toast } from "react-hot-toast";
import fallback from '@/src/products/fallBack.jpg'
import { useAppDispatch } from "@/store/hooks";
import { removeWishlist } from "@/features/wishlist/wishlistSlice";
import { CheckCircle, X } from "lucide-react";
import { addToCart } from "@/features/cart/cartSlice";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ICart = {
  id: string;
  productImage : string | StaticImageData;
  productName : string;
  description : string;
  amount: number
}

export const columns: ColumnDef<IWishlist>[] = [
    {
    header:"Remove",
    cell:({row})=>{
        const dispatch = useAppDispatch();
        
        const handleRemove = () => {
            dispatch(removeWishlist(row.original))
            toast.success("Product removed successfully")
        };
        return(
        <div>
            <button onClick={()=>handleRemove()} className="transition duration-300 ease-in-out cursor-pointer hover:text-green-500 text-green-600 rounded-sm">
                <X size={28} className="p-1 font-bold"/>
            </button>
        </div>
        );
    }
  },
  {
    accessorKey: "Product",
    header: "Product",
    cell:({row})=>{
        const product = row.original;
        return(
            <div className="flex items-center justify-start gap-5">
            <Image src={product.image ?? fallback} alt="productImage" height={100} width={100} className="border rounded-lg p-2" />
            <p className="text-center w-fit text-sm font-semibold">{product.name}</p>
            </div>
        )
    }
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Amount",
    cell:({row})=>
    {
    const amount = row.original.price;
    return(
        <h1 className="font-bold text-xl text-green-500">${amount}</h1>
    )
    }
  },
  {
    accessorKey: "stockStatus",
    header: "Stock Status",
    cell:({row})=>{
        const {stockStatus} = row.original;
  
        return(
            <div className="flex items-center">
            {
                stockStatus === "IN_STOCK" ? (
                    <p className="flex items-center gap-2 text-sm font-semibold font text-green-500"><CheckCircle size={18}/>in stock</p>
                ) : (
                    <p className="flex items-center gap-2 text-sm font-semibold font text-red-700"><CheckCircle size={18}/>out stock</p>
                )
            }
            </div>
        )
    }
  },
  {
    header: "Action",
    cell:({row})=>{
        const stockStatus = row.original.stockStatus;
        const dispatch = useAppDispatch();
        
        return(
            <>
            <button 
            style={{ cursor: stockStatus === "IN_STOCK" ? "pointer" : "not-allowed"}} 
            onClick={()=>dispatch(addToCart(row.original))}
            className="bg-green-500 hover:bg-green-700 p-2 transition duration-300 ease-in-out font-normal text-white text-base">Add To Cart</button>
            </>
        )
    }
  }
]