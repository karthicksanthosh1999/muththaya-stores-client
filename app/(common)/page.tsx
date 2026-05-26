"use client";

import Image from "next/image";
import discountImg01 from "@/src/home/dis-1.webp";
import discountImg02 from "@/src/home/dis-2.webp";
import discountImg03 from "@/src/home/dis-3.webp";
import offerImg01 from "@/src/home/offer-1.webp";
import offerImg02 from "@/src/home/offer-2.webp";
import offerImg03 from "@/src/home/offer-3.webp";
import offerImg04 from "@/src/home/offer-4.webp";
import offerImg05 from "@/src/home/offer-5.webp";
import hero from "@/src/home/hero.webp";
import cto from "@/src/home/cet.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clients } from "@/components/custom/Clients";
import ServiceSection from "@/components/custom/service-section";
import TitleSection from "@/components/custom/title-section";

export default function Home() {
  const discountData = [
    {
      img: discountImg01,
    },
    {
      img: discountImg02,
    },
    {
      img: discountImg03,
    },
  ];

  return (
    <>
      {/* HERO IMAGE */}
      <section
        style={{ backgroundImage: `url(${hero.src})` }}
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center pb-32">
        {/* HERO IMAGE */}
        <div className="text-center space-y-5 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 1,
            }}
            className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">
            Organic Shop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 1,
              delay: 1,
            }}
            className="text-[#666666] text-xl sm:text-xl md:text-2xl xl:text-3xl font-semibold">
            GET FRESH FOODS FROM OUR FARM TO YOUR TABLE
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 1,
              delay: 1,
            }}
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold md:text-xl text-lg md:px-10 px-5 md:py-4 py-2 rounded-full transition">
            Contact Us
          </motion.a>
        </div>

        {/* OFFER SECTION */}
        <div className="md:absolute md:block hidden bg-white translate-y-1/2 bottom-0">
          <section className="mx-auto container p-14">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  alt="dis-1"
                  src={offerImg01}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {/* Shine Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  alt="dis-1"
                  src={offerImg02}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {/* Shine Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  alt="dis-1"
                  src={offerImg03}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {/* Shine Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  alt="dis-1"
                  src={offerImg04}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {/* Shine Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  alt="dis-1"
                  src={offerImg05}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Shine Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* ONLY MOBILE VIEW */}
      <section className="md:hidden flex flex-col items-center justify-center gap-10 mx-auto container md:p-14 p-2 relative">
        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="dis-1"
            src={offerImg01}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Shine Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="dis-1"
            src={offerImg02}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Shine Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="dis-1"
            src={offerImg03}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Shine Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="dis-1"
            src={offerImg03}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Shine Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="dis-1"
            src={offerImg03}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Shine Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section className="flex flex-col items-center justify-center md:mt-72 mt-5 mb-10">
        <TitleSection title="Services" description="Our Services" />
        <ServiceSection />
      </section>
      {/* DISCOUNT SECTION */}
      <section className="sm:mx-auto container md:mt-20 mt-5 px-3">
        <TitleSection title="Offers" description="Today Offers" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {discountData.map((item, idx) => (
            <div className="overflow-hidden rounded-xl" key={idx}>
              <Image
                alt={"images"}
                src={item.img}
                className="transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
      {/* CTA SECTION */}
      <section
        style={{
          backgroundImage: `url(${cto.src})`,
          backgroundPosition: "bottom",
        }}
        className="py-28 bg-blue-900 text-white relative overflow-hidden mt-20 h-100 my-20 bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <img
            src="/api/placeholder/1920/600?text=Australia+Map+Outline"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#78BC16]">
              Colorful Fresh Fruits Vegetables
            </h2>
            <p className="text-xl mb-8 text-[#333333]">
              One Must Eat To Live Not Live To Eat 40% off
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xl px-10 py-4 rounded-full transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* BRANDS */}
      <section className="flex flex-col items-center justify-center mb-20">
        <TitleSection title="Clients" description="Our Sponsors" />
        <Clients />
      </section>
    </>
  );
}
