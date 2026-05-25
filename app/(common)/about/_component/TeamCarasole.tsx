
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function TeamCarouselS() {

    let teamMember = [
        {
            id: 0,
            name: "Joseph Karthick",
            role: "Prince",
        },
        {
            id: 1,
            name: "Santhosh Kani",
            role: "Founder",
        },
        {
            id: 2,
            name: "Anantha Ramani",
            role: "Co-Founder",
        },
        {
            id: 3,
            name: "Deva Dharshini",
            role: "Princes",
        },
        {
            id: 4,
            name: "Arivu Karthick",
            role: "Prince",
        },
    ]

    return (
        <Carousel plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]} className="w-full max-w-48 sm:max-w-xs md:max-w-3xl">
            <CarouselContent className="-ml-1">
                {
                    teamMember.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-1/2 pl-1 lg:basis-1/3">
                            <div className="p-1">
                                <Card key={item.id}>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                        <img
                                            src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
                                            alt="Team Member 1"
                                            className="w-full rounded-full mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                        <p className="text-gray-700">Role: {item.role}</p>

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    )
}
