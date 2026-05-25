'use client'
import { pagesList } from '@/data/data';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {

    const pathname = usePathname();
    const [visible, setVisible] = useState(false)

    return (

        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* <div className="w-10 h-10 rounded-full bg-rwanda-blue flex items-center justify-center">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E"
                            alt="SomaRwanda Logo" className="w-6 h-6" />
                    </div> */}
                    <h1 className="text-xl font-bold text-rwanda-blue">
                        <Link href={'/'}>
                            Muthaya<span className="text-rwanda-yellow">Store</span>
                        </Link>
                    </h1>
                </div>


                <nav className="hidden md:flex space-x-8">
                    {
                        pagesList.map((item) => (
                            <Link key={item.id} href={item.link} className={`hover:text-[#F0B100] transition duration-150 ease-in-out ${pathname === item.link ? "text-[#F0B100]" : "text-gray-700"}`}>{item.title}</Link>
                        ))
                    }
                </nav>

                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setVisible(pre => !pre)} className="px-4 py-2 cursor-pointer rounded-full text-sm transition">
                        {
                            visible ?
                                <X />
                                :
                                <Menu />
                        }
                    </button>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {
                    visible && (
                        <motion.div
                            key="box"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-white absolute top-16 left-0 h-52 w-full z-50">
                            <nav className="space-x-8 flex flex-col p-5 space-y-5">
                                <Link onClick={() => setVisible(false)} href="/" className={`hover:text-[#F0B100] cursor-pointer transition duration-150 ease-in-out ${pathname === "/" ? "text-[#F0B100]" : "text-gray-700"}`}>Home</Link>
                                <Link onClick={() => setVisible(false)} href="/shop" className={`hover:text-[#F0B100] cursor-pointer transition duration-150 ease-in-out ${pathname === "/shop" ? "text-[#F0B100]" : "text-gray-700"}`}>Products</Link>
                                <Link onClick={() => setVisible(false)} href="/about" className={`hover:text-[#F0B100] cursor-pointer transition duration-150 ease-in-out ${pathname === "/about" ? "text-[#F0B100]" : "text-gray-700"}`}>About</Link>
                                <Link onClick={() => setVisible(false)} href="/about" className={`hover:text-[#F0B100] cursor-pointer transition duration-150 ease-in-out ${pathname === "/gallery" ? "text-[#F0B100]" : "text-gray-700"}`}>Galley</Link>
                                <Link onClick={() => setVisible(false)} href="/contact" className={`hover:text-[#F0B100] cursor-pointer transition duration-150 ease-in-out ${pathname === "/contact" ? "text-[#F0B100]" : "text-gray-700"}`}>Contact</Link>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>

    )
}

export default Header;
