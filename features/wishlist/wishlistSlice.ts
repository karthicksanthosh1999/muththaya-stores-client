import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlist } from "./wishlistType";
import { toast } from "react-hot-toast";

interface IWishlistState {
    items : IWishlist[]
}

const initialState:IWishlistState = {
    items:[]
}

export const wishlistSlice = createSlice({
        name:"wishlist",
        initialState,
        reducers:{
            addToWishlist:(state, action:PayloadAction<IWishlist>)=>{
                const existingWishlist = state.items.find(item => item.id === action.payload.id);
                if(existingWishlist){
                    toast.success("Product already added")
                }else{
                    state.items.push(action.payload);
                    toast.success("Product added to wishlist")
                }
            },
            removeWishlist:(state, action:PayloadAction<IWishlist>)=>{
                state.items = state.items.filter(item=>item.id !== action.payload.id);
            }
        },
});

export const { addToWishlist,removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;