"use client"

import { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { IoArrowUpSharp } from "react-icons/io5";

const BackTop = () => {
    const minScrollHeight = 200
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > minScrollHeight) {
                setHidden(false)
            } else {
                setHidden(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <motion.div  
            className='bg-white text-black text-center flex item-center justify-center rounded-full aspect-square  p-2 fixed bottom-5 right-5 cursor-pointer'
            transition={{
                duration: 200,
                ease: "easeInOut"
            }}
            style={{
                opacity: hidden ? 0 : 1,
            
            }}
            onClick={toTop}
        >
            <IoArrowUpSharp size={30} className='m-auto' />
        </motion.div>
    )
}

export default BackTop