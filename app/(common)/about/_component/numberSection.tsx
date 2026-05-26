import Image from "next/image";
import image from "@/src/about/fn-bg.png";
import CountUp from "./CountUp";

const NumberSection = () => {
  const countData = [
    {
      id: 0,
      title: "Satisfied Clients",
      value: 10,
    },
    {
      id: 1,
      title: "Expert Team",
      value: 200,
    },
    {
      id: 2,
      title: "Active Products",
      value: 250,
    },
    {
      id: 0,
      title: "Award Winning",
      value: 27,
    },
  ];

  return (
    <>
      <div className="relative">
        <Image src={image} alt="number image" className="lg:block hidden" />
        <section className="py-12 lg:absolute block top-20 z-5 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {countData.map((item) => (
                <div key={item.id}>
                  <div className="text-4xl font-bold text-trade-orange mb-2">
                    <CountUp value={item.value} duration={2} />+
                  </div>
                  <div className="text-gray-600">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NumberSection;
