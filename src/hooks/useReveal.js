import { useEffect, useRef, useState } from 'react'

/**
 * Adds a subtle "fade + rise" reveal when the element scrolls into view.
 * Reveals once and stays visible afterwards (no re-trigger on scroll back up),
 * so the page doesn't feel jumpy while scrolling in either direction.
 *
 * Usage:
 *   const [ref, visible] = useReveal()
 *   <div ref={ref} className={`${s.block} reveal ${visible ? 'reveal-visible' : ''}`}>
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        // Respect users who prefer less motion — show content immediately.
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        if (prefersReducedMotion) {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold, rootMargin }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return [ref, visible]
}

export default useReveal
