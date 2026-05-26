"use client"

import { IProductDTO } from "@/features/cart/cartTypes";
import { ColumnDef } from "@tanstack/react-table";
import {  Minus, Plus, Trash } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import fallback from '@/src/products/fallBack.jpg'
import { removeCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ICart = {
  id: string;
  productImage : string | StaticImageData;
  productName : string;
  description : string;
  amount: number
}

export const columns: ColumnDef<IProductDTO>[] = [
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
    header: "Quantity",
    cell:({row})=>
        {
        const [count, setCount] = useState(1);
        const [isDisable, setIsDisable] =useState(false)

        const handleIncrease = () => {
            setCount(count + 1);
            setIsDisable(false)
        };
        const handleDecrease= () => {
            if(count <= 1){
                setIsDisable(true)
            }else{
                setCount(count - 1);
                setIsDisable(false)
            }
        }

        return (
        <div className="flex items-center gap-2">
        <button className="transition duration-300 ease-in-out cursor-pointer hover:bg-green-500 bg-green-600 text-white rounded-sm"
        onClick={handleIncrease}
        ><Plus size={20} className="p-1 font-bold"/></button>
        <h1 className="text-gray-700 font-semibold text-base">{count ?? 0 }</h1>
        <button 
            className="transition duration-300 ease-in-out hover:bg-green-500 bg-green-600 text-white rounded-sm"
            onClick={handleDecrease}
            disabled={isDisable}
            style={{ cursor: isDisable ? "not-allowed" : "pointer"}}
        >
            <Minus className="p-1 font-bold" size={20}/>
        </button>
        </div>
    )
    }
  },
  {
    header:"Remove",
    cell:({row})=>{
        const dispatch = useAppDispatch()
        const handleRemove = () => {
            dispatch(removeCart(row.original))
            toast.success("Product removed successfully")
        };
        return(
        <div>
            <button onClick={()=>handleRemove()} className="transition duration-300 ease-in-out cursor-pointer hover:text-green-500 text-green-600 rounded-sm">
                <Trash size={28} className="p-1 font-bold"/>
            </button>
        </div>
        );
    }
        
  }
]