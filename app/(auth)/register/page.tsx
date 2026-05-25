"use client";

import { Button } from "@/components/ui/button";
import { resigterSchema } from "@/schema/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "./_hook/register_hook";
import { IRegisterDTO } from "@/constants/login-type";

const Page = () => {

  const { mutate } = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterDTO>({
    resolver: zodResolver(resigterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: IRegisterDTO) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 w-full max-w-md">
        <h1 className="text-4xl text-center font-semibold text-[#F0B100]">
          Register
        </h1>

        <p className="text-lg text-start my-2 text-gray-600">
          Create new account today to reap the benefits of a personalized
        </p>

        <p className="text-gray-600">
          shopping experience.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-4 flex flex-col space-y-4"
        >
          {/* FULL NAME */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name*"
              {...register("fullName")}
              className="border-2 focus:border-[#78BC16] outline-none rounded-md py-2 px-3 w-full"
              />

            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

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

          {/* MOBILE */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Mobile*"
              {...register("mobile")}
              className="border-2 focus:border-[#78BC16] outline-none rounded-md py-2 px-3 w-full"
              />

            {errors.mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 pb-2 px-2 font-semibold md:text-lg text-sm cursor-pointer text-white rounded-lg w-full transition-all duration-200"
          >
            {isSubmitting ? "Loading..." : "Register"}
          </button>
        </form>

        <div className="flex items-center justify-center">
          <Link
            href="/login"
            className="text-base text-gray-500 hover:text-blue-600"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;