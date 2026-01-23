import { useEffect, useRef, useState } from 'react'

export function useAutoScroll() {
    const [isAutoScroll, setIsAutoScroll] = useState(false)
    const [scrollSpeed, setScrollSpeed] = useState(50)
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
        let lastTimestamp: number | null = null

        const step = (timestamp: number) => {
            if (!isAutoScroll) {
                return
            }

            if (lastTimestamp !== null) {
                const delta = timestamp - lastTimestamp
                const distance = (scrollSpeed * delta) / 1000
                globalThis.scrollBy(0, distance)

                const reachedBottom =
                    globalThis.innerHeight + globalThis.scrollY >=
                    document.documentElement.scrollHeight - 1

                if (reachedBottom) {
                    setIsAutoScroll(false)
                    return
                }
            }

            lastTimestamp = timestamp
            animationFrameRef.current = globalThis.requestAnimationFrame(step)
        }

        if (isAutoScroll) {
            animationFrameRef.current = globalThis.requestAnimationFrame(step)
        } else if (animationFrameRef.current !== null) {
            globalThis.cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
        }

        return () => {
            if (animationFrameRef.current !== null) {
                globalThis.cancelAnimationFrame(animationFrameRef.current)
                animationFrameRef.current = null
            }
        }
    }, [isAutoScroll, scrollSpeed])

    return {
        isAutoScroll,
        setIsAutoScroll,
        scrollSpeed,
        setScrollSpeed
    }
}
