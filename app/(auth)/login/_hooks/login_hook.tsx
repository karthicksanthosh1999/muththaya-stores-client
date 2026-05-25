import { IApiResponse } from "@/constants/api-response";
import { ILoginDataDTO } from "@/constants/login-type";
import { ICreateUserDTO, ILoginUserDTO } from "@/constants/user-types";
import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLoginMutation = () => {
    const { replace } = useRouter()
  return useMutation<
    IApiResponse<ILoginUserDTO>,
    AxiosError<IApiResponse<ILoginUserDTO>>,
    { email: string; password: string }
  >({
    mutationFn: loginApi,
    onSuccess: async (response) => {
      toast.loading(
        response.message || "User Login...", {
            id:"login"
        }
      );
      toast.success(
        response.message || "Login Successfully", {
            id:"login"
        }
      );
      console.log(response?.data?.user?.role)
      if(response?.success === true){
        if(response?.data?.user?.role === "ADMIN"){
        replace("/admin/dashboard");
        } else if(response?.data?.user?.role === "USER"){
            replace("/user/dashboard")
        } else {
            replace("/")
        }
      }
    },

    onError: (error) => {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Invalid Credentials",
          {
           id:"login"
          }
      );
    },
  });
};

const loginApi = async(payload:ILoginDataDTO):Promise<IApiResponse<ILoginUserDTO>> => {
    const {data} = await api.post("/api/auth/login",payload);
    console.log(data)
    return data;
}