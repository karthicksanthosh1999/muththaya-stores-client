import { IProductDTO } from "@/features/cart/cartTypes";
import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAllHooks = () => {
    return useQuery({
        queryKey:['wishlist'],
        queryFn: getAllWishlist
    })
}

const addToWishlist = async():Promise<IProductDTO> => {
    const { data } = await api.post("/api/wishlist");
    return data
};

const getAllWishlist = async():Promise<IProductDTO> => {
    const { data } = await api.get("/api/wishlist");
    return data
};