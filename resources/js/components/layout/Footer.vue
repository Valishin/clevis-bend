<script setup lang="ts">
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import CbButton from '@components/CbButton.vue'
import { useReveal } from '@/composables/useReveal'

const grid   = ref<HTMLElement | null>(null)
const bottom = ref<HTMLElement | null>(null)

useReveal(grid,   { children: '[data-reveal]', stagger: 0.1,  y: 20, duration: 0.6 })
useReveal(bottom, { children: '[data-reveal]', stagger: 0.08, y: 12, duration: 0.5, delay: 0.2, margin: '0px' })
</script>

<template>
    <footer class="bg-brand-ivory border-t border-brand-champagne">

        <!-- Main footer -->
        <div
            ref="grid"
            class="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-16"
        >
            <!-- Brand col -->
            <div data-reveal class="flex flex-col gap-6">
                <Link href="/" class="font-display text-2xl text-neutral-800 w-fit">Clevis Bend</Link>
                <p class="font-sans text-sm text-neutral-500 leading-relaxed max-w-xs">
                    High-performance lingerie components. From the factory floor to global fashion —
                    precision-engineered accessories you can trust.
                </p>
            </div>

            <!-- Navigation col -->
            <div data-reveal class="flex flex-col gap-6">
                <span class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose">Navigation</span>
                <nav class="flex flex-col gap-4">
                    <Link href="/products" class="font-sans text-sm text-neutral-600 hover:text-brand-dusty-rose transition-colors w-fit">Products</Link>
                    <Link href="/about"    class="font-sans text-sm text-neutral-600 hover:text-brand-dusty-rose transition-colors w-fit">About Us</Link>
                    <Link href="/contact"  class="font-sans text-sm text-neutral-600 hover:text-brand-dusty-rose transition-colors w-fit">Contact</Link>
                </nav>
            </div>

            <!-- Contact col -->
            <div data-reveal class="flex flex-col gap-6">
                <span class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose">Get in Touch</span>
                <p class="font-sans text-sm text-neutral-500">For inquiries, samples, and partnerships</p>
                <Link
                    href="/contact"
                    class="self-start border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 hover:bg-brand-dusty-rose hover:text-white transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-brand-champagne">
            <div
                ref="bottom"
                class="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
                <div data-reveal class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <p class="font-sans text-xs text-neutral-400">
                        © {{ new Date().getFullYear() }} Clevis Bend. All rights reserved.
                    </p>
                    <span class="hidden sm:block text-neutral-300">·</span>
                    <p class="font-sans text-[10px] text-neutral-300">
                        Developed by
                        <a
                            href="https://icorebyte.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="hover:text-brand-dusty-rose transition-colors"
                        >iCoreByte</a>
                    </p>
                </div>
                <p data-reveal class="font-sans text-xs tracking-[0.18em] uppercase text-neutral-400">
                    USA + Trusted Global Partners
                </p>
            </div>
        </div>

    </footer>
</template>
