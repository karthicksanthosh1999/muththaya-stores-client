import { pagesList } from "@/data/data"
import Link from "next/link"

const Footer = () => {



    return (
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="sm:col-span-2">
                    <a href="#" className="inline-flex items-center">
                        <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" className="h-8 w-8" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">Muththaya Store</span>
                    </a>
                    <div className="mt-6 lg:max-w-xl">
                        <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                            id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                            nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                            libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                            molestie. Suspendisse potenti.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-[#F0B100]">Links</p>
                    {
                        pagesList.map((item) => (
                            <Link key={item.id} className="hover:text-[#F0B100] transition duration-150 ease-in-out" href={item.link}>{item.title}</Link>
                        ))
                    }
                    <p className="text-base font-bold tracking-wide text-[#F0B100]">Address</p>
                    <a className="transition duration-150 ease-in-out" href="#">11-3, Thirupparankundrum</a>
                    <a className="transition duration-150 ease-in-out" href="#">Madurai</a>
                    <a className="transition duration-150 ease-in-out" href="#">Tamil Nadu-625005</a>
                </div>

                <div>
                    <p className="text-base font-bold tracking-wide text-[#F0B100]">COMPANY IS ALSO AVAILABLE ON</p>
                    <div className="flex items-center gap-1 px-2 w-fit">
                        <a href="#" className="w-full">
                            <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                className="h-10" />
                        </a>
                        <a className="w-full" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                            <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                className="h-28" />
                        </a>
                    </div>
                    <p className="text-base font-bold tracking-wide text-[#F0B100]">Contacts</p>
                    <div className="flex">
                        <a href="#" title="send email" className="text-sm">karthick.santhosh1999@gmail.com</a>
                    </div>
                </div>

            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-[#F0B100] lg:flex-row">
                <p className="text-sm text-gray-600">© Copyright 2026 JK-TECH. All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="#"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
