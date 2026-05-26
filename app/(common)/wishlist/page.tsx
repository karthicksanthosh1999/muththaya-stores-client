'use client';
import Link from "next/link";
import heroImage from "@/src/home/cet.webp"
import Hero from "@/components/custom/Hero";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { selectWishlistItems } from "@/features/cart/cartSelector";
import { WishlistDataTable } from "./_components/data-table";
import { columns } from "./_components/column";

function page() {;
  const wishlist = useAppSelector(selectWishlistItems);
  return (
    <>
    <Hero bread={["Home", "Wishlist"]} page="Wishlist" image={heroImage} />
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
        Wishlist
    </motion.h1>
    <div className="p-5">
      <WishlistDataTable columns={columns} data={wishlist} />
    </div>
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