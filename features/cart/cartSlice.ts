import { ICart } from '@/app/(common)/cart/_components/column';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductDTO } from './cartTypes';
import { toast } from 'react-hot-toast';

interface IProductState {
    items : IProductDTO[]
}

const initialState:IProductState  = {
    items: [],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action: PayloadAction<IProductDTO>) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id);

            if(existingProduct){
                toast.success("Product already in your cart", { position:"top-center" })
            }else{
                state.items.push(action.payload)
                toast.success("Product added successfully", { position:"top-center" })
            }
        },
        removeCart:(state, action: PayloadAction<IProductDTO>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    
    }
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;