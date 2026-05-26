import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import wishlistReducer from "@/features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishllist: wishlistReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;