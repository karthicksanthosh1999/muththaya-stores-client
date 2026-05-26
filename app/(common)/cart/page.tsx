'use client';
import Link from "next/link";
import { columns } from "./_components/column"
import { CartDataTable } from "./_components/data-table";
import heroImage from "@/src/home/cet.webp"
import Hero from "@/components/custom/Hero";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/features/cart/cartSelector";

function page() {;
  const cartItems = useAppSelector(selectCartItems);
  return (
    <>
    <Hero bread={["Home", "Cart"]} page="Cart" image={heroImage} />
    <div className="container mx-auto py-10">
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.6,
            ease: "easeOut",
        }}
        className="text-3xl font-semibold text-center my-10"
        >
        Shopping Cart
    </motion.h1>
      <CartDataTable columns={columns} data={cartItems} />
      <div className="w-full flex items-end justify-end mt-2">
        <Link href={'/shop'} className="text-base text-white bg-green-600 py-2 px-2">
            Back
        </Link>
      </div>
    </div>
    </>
  )
}

export default page;