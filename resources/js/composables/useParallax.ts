import { onMounted, onUnmounted, type Ref } from 'vue'
import { animate } from 'motion'

interface ParallaxOptions {
    /** qué fracción del scroll aplica a la imagen (0.0 – 0.5) */
    imageSpeed?: number
    /** qué fracción del scroll aplica al texto */
    textSpeed?: number
}

export function useParallax(
    section: Ref<HTMLElement | null>,
    image:   Ref<HTMLElement | null>,
    text?:   Ref<HTMLElement | null>,
    opts: ParallaxOptions = {},
) {
    const { imageSpeed = 0.25, textSpeed = 0.06 } = opts

    let ticking = false

    function update() {
        if (!section.value || !image.value) return

        const rect = section.value.getBoundingClientRect()
        const vh   = window.innerHeight

        // Fuera de vista → no mover más
        if (rect.bottom <= 0 || rect.top >= vh) return

        // Progreso relativo al viewport: 0 (sección en la parte baja) → 1 (sección sale por arriba)
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height + vh) + 0.5))

        // Imagen: se mueve más lento → efecto profundidad
        const imgY = (progress - 0.5) * rect.height * imageSpeed
        image.value.style.transform = `translateY(${imgY.toFixed(2)}px) scale(1.15)`

        // Texto: movimiento muy sutil en dirección contraria
        if (text?.value) {
            const txtY = (progress - 0.5) * vh * textSpeed
            text.value.style.transform = `translateY(${txtY.toFixed(2)}px)`
        }
    }

    function onScroll() {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
            update()
            ticking = false
        })
    }

    onMounted(() => {
        // Escucha tanto el scroll nativo como el de Lenis
        window.addEventListener('scroll', onScroll, { passive: true })
        update()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
}
