import { RootState } from "@/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectWishlistItems = (state: RootState) => state.wishllist.items;