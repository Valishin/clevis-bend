<script setup lang="ts">
// Cuando tengas la imagen: añádela a resources/js/assets/images/ y expórtala en index.ts
// import { heroBg } from '../assets/images'
import { heroBg } from "@images"; // fallback temporal desde public/
</script>

<template>
    <section class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Background image -->
        <div class="absolute inset-0">
            <img
                :src="heroBg"
                alt=""
                class="w-full h-full object-cover object-center"
            />
            <!-- Gradient overlay: left readable, right transparent -->
            <div class="absolute inset-0 bg-gradient-to-r from-brand-ivory/85 via-brand-ivory/50 to-transparent" />
        </div>

        <!-- Content -->
        <div
            class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24"
        >
            <div class="max-w-xl">
                <!-- Eyebrow -->
                <p
                    class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-8"
                >
                    Ref: CB-MFG / Est. USA
                </p>

                <!-- Headline -->
                <h1 class="font-display leading-tight mb-6">
                    <span class="block text-5xl lg:text-7xl text-neutral-800">
                        The Foundation
                    </span>
                    <span
                        class="block text-5xl lg:text-7xl italic text-brand-dusty-rose"
                    >
                        of Form
                    </span>
                </h1>

                <!-- Body -->
                <p
                    class="font-sans text-base lg:text-lg text-neutral-600 leading-relaxed mb-12 max-w-md"
                >
                    High-performance lingerie components built on decades of
                    factory-floor expertise. Snap tapes, hook &amp; eye
                    closures, and precision accessories for the world's finest
                    intimate brands.
                </p>

                <!-- CTAs -->
                <div class="flex flex-wrap gap-4">
                    <a
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
                    </a>
                    <a
                        href="/contact"
                        class="inline-flex items-center border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-7 py-4 hover:bg-brand-dusty-rose hover:text-white transition-colors"
                    >
                        Request a Sample
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
