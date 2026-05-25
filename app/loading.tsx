"use client";

import { motion } from "framer-motion";

const loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
            <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    className="text-white text-2xl"
                >
                    🌿
                </motion.span>
            </motion.div>
        </div>
    )
}

export default loading
