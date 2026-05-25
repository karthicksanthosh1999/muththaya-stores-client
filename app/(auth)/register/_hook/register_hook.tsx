import { IApiResponse } from "@/constants/api-response";
import { IRegisterDTO } from "@/constants/login-type";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useRegisterMutation = () => {
      const { replace } = useRouter();
    return useMutation<IApiResponse<IRegisterDTO>,AxiosError, IRegisterDTO>({
            mutationFn: registerApi,
            onSuccess: async (response) => {
            toast.loading(
                response.message || "User Submitting...", {
                    id:"regiser"
                }
            );
            toast.success(
                response.message || "User Register Successfully", {
                    id:"regiser"
                }
            );
            if(response?.success === true){
                replace("/login")
            }
    },

    onError: (error) => {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Invalid Credentials",
          {
           id:"regiser"
          }
      );
    },
    })
}

const registerApi = async(payload:IRegisterDTO):Promise<IApiResponse<IRegisterDTO>> => {
    const {data} = await api.post("/api/auth/register",payload);
    return data;
}