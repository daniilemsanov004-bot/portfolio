// Shared scroll-reveal animation presets (framer-motion).
// Kept deliberately moderate: a clear fade + rise, nothing spinny or bouncy.

// once: false — replays the animation both when scrolling down into view
// and when scrolling back up into view (element fades out when it leaves).
export const viewportOnce = { once: false, amount: 0.25 }

// A single block fading/rising into place.
export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 56,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
}

// A slightly softer version for large visuals/images.
export const fadeUpSoft = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.98,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
}

export const fade = {
    hidden: { opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
}

// Parent wrapper for a group of items — staggers the children in one by one.
export const staggerContainer = {
    hidden: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
}

// Child item to pair with staggerContainer.
export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 36,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
}
