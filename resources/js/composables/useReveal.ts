import { onMounted, onUnmounted, type Ref } from 'vue'
import { animate, inView } from 'motion'

interface RevealOptions {
    /** delay base en segundos */
    delay?: number
    /** stagger entre hijos si se pasa un selector */
    stagger?: number
    /** selector de hijos a animar (opcional) */
    children?: string
    /** desplazamiento Y inicial en px */
    y?: number
    /** duración en segundos */
    duration?: number
}

/**
 * Anima el elemento (o sus hijos) una única vez al entrar en viewport.
 */
export function useReveal(
    el: Ref<HTMLElement | null>,
    opts: RevealOptions = {},
) {
    const {
        delay    = 0,
        stagger  = 0.1,
        children = '',
        y        = 28,
        duration = 0.7,
    } = opts

    let stop: (() => void) | undefined

    onMounted(() => {
        if (!el.value) return

        const targets = children
            ? Array.from(el.value.querySelectorAll<HTMLElement>(children))
            : [el.value]

        // Estado inicial invisible
        targets.forEach(t => {
            t.style.opacity = '0'
            t.style.transform = `translateY(${y}px)`
        })

        stop = inView(
            el.value,
            () => {
                targets.forEach((t, i) => {
                    animate(
                        t,
                        { opacity: 1, transform: 'translateY(0px)' },
                        {
                            duration,
                            delay: delay + i * stagger,
                            easing: [0.25, 0.1, 0.25, 1],
                        },
                    )
                })
            },
            { once: true, margin: '-60px' },
        ) as () => void
    })

    onUnmounted(() => stop?.())
}
