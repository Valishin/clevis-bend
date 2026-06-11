import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

let lenis: Lenis | null = null
let rafId: number

function raf(time: number) {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
}

export function useLenis() {
    onMounted(() => {
        lenis = new Lenis({
            duration:   1.3,          // duración del lerp
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
            orientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 1.5,
        })

        rafId = requestAnimationFrame(raf)
    })

    onUnmounted(() => {
        cancelAnimationFrame(rafId)
        lenis?.destroy()
        lenis = null
    })

    return { lenis: () => lenis }
}
