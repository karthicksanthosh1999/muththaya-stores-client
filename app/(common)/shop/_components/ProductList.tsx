'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { productData } from '@/data/data'

const ProductList = () => {
    const [tabValues, setTabValues] = useState("")


    return (
        <div>
            <Tabs defaultValue="snacks" className='flex items-center'>
                <TabsList variant="line">
                    <TabsTrigger className={`cursor-pointer md:text-2xl text-lg `} value="snacks">Snacks</TabsTrigger>
                    <TabsTrigger className={`cursor-pointer md:text-2xl text-lg `} value="cosmetics">Cosmetics</TabsTrigger>
                    <TabsTrigger className={`cursor-pointer md:text-2xl text-lg `} value="oils">Oils</TabsTrigger>
                </TabsList>
                <TabsContent onClick={() => setTabValues("snacks")} value="snacks">
                    <div className="p-1 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 items-center justify-center ">
                        {
                            productData.slice(0, 9).map((item, idx) => (
                                <div
                                    key={idx}
                                    className="m-6 relative overflow-hidden rounded-lg max-w-75 shadow-lg
                                            outline-1  outline-green-500
                                            transform transition-transform duration-300 ease-in-out
                                            hover:scale-105 hover:-outline-offset-4
                                            group
                                        ">
                                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                                    </svg>
                                    <div className="relative pt-10 px-10 flex items-center justify-center cursor-pointer">
                                        <Image
                                            className="relative h-fit"
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative text-white px-6 pb-6 mt-6">
                                        <div className="flex justify-between">
                                            <span className="block font-semibold text-xl text-black">{item.title}</span>
                                            <span className="bg-white text-lg rounded-full text-green-500 font-bold px-3 py-2 leading-none flex items-center">₹{item.price}</span>
                                        </div>
                                    </div>
                                    <div className="absolute -top-15 group-hover:translate-y-14 left-0 w-full transition-transform duration-400 ease-in-out bg-green-400 flex items-center justify-center">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <ShoppingCart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Add To Card
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <Heart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Favorite
                                            </TooltipContent>
                                        </Tooltip>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="cosmetics" onClick={() => setTabValues("snacks")}>
                    <div className="p-1 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 items-center justify-center ">
                        {
                            productData.slice(0, 9).map((item, idx) => (
                                <div
                                    key={idx}
                                    className="m-6 relative overflow-hidden rounded-lg max-w-75 shadow-lg
                                            outline-1  outline-green-500
                                            transform transition-transform duration-300 ease-in-out
                                            hover:scale-105 hover:-outline-offset-4
                                            group
                                        ">
                                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                                    </svg>
                                    <div className="relative pt-10 px-10 flex items-center justify-center cursor-pointer">
                                        <Image
                                            className="relative h-fit"
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative text-white px-6 pb-6 mt-6">
                                        <div className="flex justify-between">
                                            <span className="block font-semibold text-xl text-black">{item.title}</span>
                                            <span className="bg-white text-lg rounded-full text-green-500 font-bold px-3 py-2 leading-none flex items-center">₹{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="absolute -top-15 group-hover:translate-y-14 left-0 w-full transition-transform duration-400 ease-in-out bg-green-400 flex items-center justify-center">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <ShoppingCart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Add To Card
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <Heart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Favorite
                                            </TooltipContent>
                                        </Tooltip>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="oils" onClick={() => setTabValues("oils")}>
                    <div className="p-1 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 items-center justify-center ">
                        {
                            productData.slice(0, 9).map((item, idx) => (
                                <div
                                    key={idx}
                                    className="m-6 relative overflow-hidden rounded-lg max-w-75 shadow-lg
                                            outline-1  outline-green-500
                                            transform transition-transform duration-300 ease-in-out
                                            hover:scale-105 hover:-outline-offset-4
                                            group
                                        ">
                                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                                    </svg>
                                    <div className="relative pt-10 px-10 flex items-center justify-center cursor-pointer">
                                        <Image
                                            className="relative h-fit"
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative text-white px-6 pb-6 mt-6">
                                        <div className="flex justify-between">
                                            <span className="block font-semibold text-xl text-black">{item.title}</span>
                                            <span className="bg-white text-lg rounded-full text-green-500 font-bold px-3 py-2 leading-none flex items-center">₹{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="absolute -top-15 group-hover:translate-y-14 left-0 w-full transition-transform duration-400 ease-in-out bg-green-400 flex items-center justify-center">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <ShoppingCart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Add To Card
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Button type='button' size={'icon'} className="w-10 m-2 cursor-pointer hover:bg-white hover:text-green-400 h-10 bg-green-500 text-white py-3 font-semibold rounded-full border border-white">
                                                    <Heart />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Favorite
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}

export default ProductList
