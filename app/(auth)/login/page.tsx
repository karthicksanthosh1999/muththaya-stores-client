"use client";

import { Button } from "@/components/ui/button";
import { loginSchema, LoginFormData } from "@/schema/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "./_hooks/login_hook";
import { useRouter } from "next/navigation";

const Page = () => {

  const { mutate, data:loginData } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { replace } = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    mutate(data);
    console.log(loginData)
    // replace('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 w-full max-w-md">
        <h1 className="text-4xl text-center font-semibold text-[#F0B100]">
          Login
        </h1>

        <p className="text-lg text-start my-2 text-gray-600">
          Welcome back!
        </p>

        <p className="text-gray-600">
          Please enter your email and password to login.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-4 flex flex-col space-y-4"
        >
          {/* EMAIL */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email*"
              {...register("email")}
              className="border-2 focus:border-[#78BC16] outline-none rounded-md py-2 px-3 w-full"
            />

            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password*"
              {...register("password")}
              className="border-2 focus:border-[#78BC16] outline-none rounded-md py-2 px-3 w-full"
            />

            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

            <Button
              type="button"
              variant="link"
              className="cursor-pointer"
            >
              Forget Password
            </Button>
   

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 pb-2 px-2 font-semibold md:text-lg text-sm cursor-pointer text-white rounded-lg w-full transition-all duration-200"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-center">
          <Link
            href="/register"
            className="text-base text-gray-500 hover:text-blue-600"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;