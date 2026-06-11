import { onMounted, onUnmounted, type Ref } from 'vue'
import { animate } from 'motion'

interface RevealOptions {
    y?:       number
    duration?: number
    margin?:  string
}

/**
 * Observa todos los [data-reveal] dentro de `el` (o de toda la página si no se pasa `el`)
 * y los anima individualmente cuando cada uno entra en el viewport.
 */
export function useReveal(
    el?: Ref<HTMLElement | null> | null,
    opts: RevealOptions = {},
) {
    const {
        y        = 28,
        duration = 0.7,
        margin   = '0px 0px -60px 0px',
    } = opts

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const root = el?.value ?? document.body
        const targets = Array.from(
            root.querySelectorAll<HTMLElement>('[data-reveal]'),
        )

        if (!targets.length) return

        // Estado inicial invisible
        targets.forEach(t => {
            t.style.opacity   = '0'
            t.style.transform = `translateY(${y}px)`
            t.style.willChange = 'opacity, transform'
        })

        const animated = new Set<Element>()

        observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting || animated.has(entry.target)) return

                    animated.add(entry.target)
                    observer?.unobserve(entry.target)

                    // Stagger basado en posición vertical entre hermanos visibles al mismo tiempo
                    const delay = (entry.target as HTMLElement).dataset.revealDelay
                        ? parseFloat((entry.target as HTMLElement).dataset.revealDelay!)
                        : 0

                    animate(
                        entry.target as HTMLElement,
                        { opacity: 1, transform: 'translateY(0px)' },
                        { duration, delay, easing: [0.25, 0.1, 0.25, 1] },
                    )
                })
            },
            { rootMargin: margin, threshold: 0 },
        )

        targets.forEach(t => observer!.observe(t))
    })

    onUnmounted(() => {
        observer?.disconnect()
        observer = null
    })
}
