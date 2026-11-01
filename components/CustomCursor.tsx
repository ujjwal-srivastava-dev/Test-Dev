"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect, useState } from "react"

const CustomCursor = () => {
    const [visible, setVisible] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const smoothX = useSpring(x, {
        stiffness: 300,
        damping: 50
    })
    const smoothY = useSpring(y, {
        stiffness: 300,
        damping: 50
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
            setVisible(true)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", () => (setVisible(false)))

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [x, y])

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-400 bg-red-500 aspect-square w-4"
            animate={{ opacity: visible ? 1 : 0 }}
            style={{
                x: smoothX,
                y: smoothY
            }} />
    )
}

export default CustomCursor