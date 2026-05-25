import React from "react";
import serviceImage1 from "@/sources/home/service-1.webp";
import serviceImage2 from "@/sources/home/service-2.webp";
import serviceImage3 from "@/sources/home/service-3.webp";
import serviceImage4 from "@/sources/home/service-4.webp";
import Image from "next/image";

const ServiceSection = () => {
  const service = [
    {
      id: 0,
      icon: serviceImage1,
      title: "Free Shipping",
      description: "On all orders over $75.00",
    },
    {
      id: 1,
      icon: serviceImage2,
      title: "Free Shipping",
      description: "On all orders over $75.00",
    },
    {
      id: 2,
      icon: serviceImage3,
      title: "Free Shipping",
      description: "On all orders over $75.00",
    },
    {
      id: 3,
      icon: serviceImage4,
      title: "Free Shipping",
      description: "On all orders over $75.00",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center container md:mx-auto max-w-full md:max-w-6xl xl:max-w-400 px-5 space-y-10">
      {service.map((item, idx) => (
        <div className="flex  gap-5" key={idx}>
          <div key={idx} className="flex w-auto">
            <Image src={item.icon} alt={item.title} />
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg tracking-wider">
              {item.title}
            </h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
