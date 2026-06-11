<script setup lang="ts">
import { useParallax } from "@/composables/useParallax";
import { useReveal } from "@/composables/useReveal";
import { heroBg } from "@images";
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

const section = ref<HTMLElement | null>(null);
const imgEl = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

useReveal(content, {
    children: "[data-reveal]",
    stagger: 0.12,
    y: 32,
    duration: 0.8,
});
useParallax(section, imgEl, content, { imageSpeed: 0.4, textSpeed: 0.06 });
</script>

<template>
    <section
        ref="section"
        class="relative min-h-screen flex items-center overflow-hidden"
    >
        <!-- Background image -->
        <div class="absolute inset-0">
            <img
                ref="imgEl"
                :src="heroBg"
                alt=""
                class="w-full h-full object-cover object-center will-change-transform"
                style="transform: scale(1.15)"
            />
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-ivory/85 via-brand-ivory/60 to-transparent"
            />
        </div>

        <!-- Content -->
        <div
            ref="content"
            class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 lg:pt-32 pb-16 lg:pb-24 will-change-transform"
        >
            <div class="max-w-xl">
                <p
                    data-reveal
                    class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-8"
                >
                    Ref: CB-MFG / Est. USA
                </p>

                <h1 data-reveal class="font-display leading-tight mb-6">
                    <span
                        class="block text-4xl sm:text-5xl lg:text-7xl text-neutral-800"
                        >The Foundation</span
                    >
                    <span
                        class="block text-4xl sm:text-5xl lg:text-7xl italic text-brand-dusty-rose"
                        >of Form</span
                    >
                </h1>

                <p
                    data-reveal
                    class="font-sans text-base lg:text-lg text-neutral-600 leading-relaxed mb-12 max-w-md"
                >
                    High-performance lingerie components built on decades of
                    factory-floor expertise. Snap tapes, hook &amp; eye
                    closures, and precision accessories for the world's finest
                    intimate brands.
                </p>

                <div data-reveal class="flex flex-wrap gap-4">
                    <Link
                        href="/products"
                        class="inline-flex items-center gap-3 bg-brand-dusty-rose text-white font-sans text-xs tracking-[0.18em] uppercase px-7 py-4 hover:bg-[#a08876] transition-colors"
                    >
                        Explore Components
                        <svg
                            class="w-4 h-4"
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
                    </Link>
                    <Link
                        href="/contact"
                        class="inline-flex items-center border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-7 py-4 hover:bg-brand-dusty-rose hover:text-white transition-colors"
                    >
                        Request a Sample
                    </Link>
                </div>
            </div>
        </div>
    </section>
</template>
