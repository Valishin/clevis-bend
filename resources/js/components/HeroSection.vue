<script setup lang="ts">
import { useParallax } from "@/composables/useParallax";
import CbButton from "@components/CbButton.vue";
import { ref } from "vue";

interface Cta {
    label: string;
    href: string;
    primary?: boolean;
}

const props = withDefaults(
    defineProps<{
        /** Texto pequeño encima del título */
        eyebrow?: string;
        /** Primera línea del h1 (normal) */
        title: string;
        /** Segunda línea del h1 (itálica + color marca) */
        titleItalic?: string;
        /** Párrafo descriptivo */
        description?: string;
        /** Imagen de fondo */
        image?: string;
        /** Botones CTA */
        ctas?: Cta[];
        /** Texto metadata esquina inferior derecha */
        meta?: string[];
        /** Altura: 'full' = min-h-screen, 'half' = más compacto para interiores */
        size?: "full" | "half";
        /** Dirección del gradiente overlay */
        gradient?: "left" | "right" | "center" | "none";
    }>(),
    {
        eyebrow: "",
        titleItalic: "",
        description: "",
        image: "",
        ctas: () => [],
        meta: () => [],
        size: "full",
        gradient: "left",
    },
);

const section = ref<HTMLElement | null>(null);
const imgEl = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

// Parallax siempre que haya imagen
if (props.image) {
    useParallax(section, imgEl, content, { imageSpeed: 0.4, textSpeed: 0.06 });
}

const gradientClass: Record<string, string> = {
    left: "bg-gradient-to-r from-brand-ivory/90 via-brand-ivory/60 to-transparent",
    right: "bg-gradient-to-l from-brand-ivory/90 via-brand-ivory/60 to-transparent",
    center: "bg-gradient-to-b from-transparent via-brand-ivory/50 to-brand-ivory/80",
    none: "",
};
</script>

<template>
    <section
        ref="section"
        :class="[
            'relative flex items-center overflow-hidden',
            size === 'full' ? 'min-h-screen' : 'min-h-[40vh] lg:min-h-[50vh]',
            !image ? 'bg-brand-ivory border-b border-brand-champagne' : '',
        ]"
    >
        <!-- Background image -->
        <template v-if="image">
            <div class="absolute inset-0">
                <img
                    ref="imgEl"
                    :src="image"
                    alt=""
                    class="w-full h-full object-cover object-center will-change-transform"
                    :style="size === 'full' ? 'transform: scale(1.15)' : ''"
                />
                <div
                    v-if="gradient !== 'none'"
                    :class="['absolute inset-0', gradientClass[gradient]]"
                />
            </div>
        </template>

        <!-- Content -->
        <div
            ref="content"
            class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full will-change-transform"
            :class="
                size === 'full'
                    ? 'pt-24 lg:pt-32 pb-16 lg:pb-24'
                    : 'py-20 lg:py-28'
            "
        >
            <div :class="size === 'full' ? 'max-w-xl' : 'max-w-3xl'">
                <!-- Eyebrow -->
                <p
                    v-if="eyebrow"
                    data-reveal
                    class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-5"
                >
                    {{ eyebrow }}
                </p>

                <!-- Title -->
                <h1
                    data-reveal
                    class="font-display leading-tight mb-6"
                    :class="
                        size === 'full'
                            ? 'text-4xl sm:text-5xl lg:text-7xl'
                            : 'text-4xl sm:text-5xl lg:text-6xl'
                    "
                >
                    <span class="block text-neutral-800">{{ title }}</span>
                    <span
                        v-if="titleItalic"
                        class="block italic text-brand-dusty-rose"
                    >
                        {{ titleItalic }}
                    </span>
                </h1>

                <!-- Description -->
                <p
                    v-if="description"
                    data-reveal
                    class="font-sans text-base lg:text-lg leading-relaxed mb-10"
                    :class="
                        image
                            ? 'text-neutral-600 max-w-md'
                            : 'text-neutral-500 max-w-lg'
                    "
                >
                    {{ description }}
                </p>

                <!-- CTAs -->
                <div
                    v-if="ctas.length"
                    data-reveal
                    class="flex flex-wrap gap-4"
                >
                    <CbButton
                        v-for="cta in ctas"
                        :key="cta.href"
                        :href="cta.href"
                        :variant="cta.primary ? 'solid' : 'ghost'"
                    >
                        {{ cta.label }}
                        <svg
                            v-if="cta.primary"
                            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </CbButton>
                </div>

                <!-- Slot para contenido extra -->
                <slot />
            </div>
        </div>
    </section>
</template>
