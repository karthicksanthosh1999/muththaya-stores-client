import * as React from "react";
import clientImg1 from "@/src/home/client-1.webp";
import clientImg2 from "@/src/home/client-2.webp";
import clientImg3 from "@/src/home/client-3.webp";
import clientImg4 from "@/src/home/client-4.webp";
import clientImg5 from "@/src/home/client-5.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function Clients() {
  const clientsImages = [
    {
      id: 0,
      img: clientImg1,
    },
    {
      id: 1,
      img: clientImg2,
    },
    {
      id: 2,
      img: clientImg3,
    },
    {
      id: 3,
      img: clientImg4,
    },
    {
      id: 4,
      img: clientImg5,
    },
    {
      id: 2,
      img: clientImg3,
    },
    {
      id: 3,
      img: clientImg4,
    },
    {
      id: 4,
      img: clientImg5,
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      className="w-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl overflow-hidden"
      plugins={[plugin.current]}
      opts={{
        loop: true,
        dragFree: true,
      }}>
      <CarouselContent className="-ml-1">
        {clientsImages.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3  lg:basis-1/4 xl:basis-1/5">
            <div className="p-1">
              <Image src={item.img} alt="clientImages" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
