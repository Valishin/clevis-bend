<script setup lang="ts">
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { useReveal } from '@/composables/useReveal'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Product {
    id: number
    title: string
    description: string | null
    price: number | null
    images: string[]
}

defineProps<{
    products: Product[]
}>()

const swiperModules = [Navigation, Pagination]

function formatPrice(price: number | null): string {
    if (!price) return ''
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)
}

function padRef(id: number): string {
    return `CB-${String(id).padStart(3, '0')}`
}

const heading = ref<HTMLElement | null>(null)
const grid    = ref<HTMLElement | null>(null)
useReveal(heading, { children: '[data-reveal]', stagger: 0.1,  y: 20, duration: 0.6 })
useReveal(grid,    { children: '[data-reveal]', stagger: 0.09, y: 28, duration: 0.6, delay: 0.1 })
</script>

<template>
    <section class="bg-brand-champagne/40 py-28 px-6 lg:px-10">
        <div class="max-w-7xl mx-auto">

            <!-- Header -->
            <div ref="heading" class="text-center mb-20">
                <p data-reveal class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-4">
                    Our Products
                </p>
                <h2 data-reveal class="font-display text-4xl lg:text-5xl text-neutral-800">
                    Featured Components
                </h2>
            </div>

            <!-- Empty state -->
            <div v-if="!products.length" class="text-center py-20">
                <p class="font-sans text-sm tracking-widest uppercase text-neutral-400">No products available yet</p>
            </div>

            <!-- Grid -->
            <div v-else ref="grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-champagne border border-brand-champagne">
                <article
                    v-for="product in products"
                    :key="product.id"
                    data-reveal
                    class="group flex flex-col bg-brand-ivory hover:bg-white transition-colors duration-300"
                >
                    <!-- Image / Swiper -->
                    <div class="relative aspect-square overflow-hidden bg-brand-champagne/60">

                        <!-- Swiper si hay más de 1 imagen -->
                        <Swiper
                            v-if="product.images.length > 1"
                            :modules="swiperModules"
                            :navigation="{
                                nextEl: `.swiper-next-${product.id}`,
                                prevEl: `.swiper-prev-${product.id}`,
                            }"
                            :pagination="{ clickable: true }"
                            loop
                            class="w-full h-full cb-swiper"
                        >
                            <SwiperSlide v-for="(img, i) in product.images" :key="i">
                                <img
                                    :src="img"
                                    :alt="`${product.title} ${i + 1}`"
                                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </SwiperSlide>

                            <!-- Flechas personalizadas -->
                            <button :class="`swiper-prev-${product.id}`"
                                class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-brand-ivory/80 hover:bg-brand-ivory text-brand-dusty-rose transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                                </svg>
                            </button>
                            <button :class="`swiper-next-${product.id}`"
                                class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-brand-ivory/80 hover:bg-brand-ivory text-brand-dusty-rose transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>
                            </button>
                        </Swiper>

                        <!-- Imagen simple si solo hay 1 -->
                        <img
                            v-else-if="product.images.length === 1"
                            :src="product.images[0]"
                            :alt="product.title"
                            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />

                        <!-- Skeleton si no hay imágenes -->
                        <div v-else class="w-full h-full relative overflow-hidden bg-brand-champagne">
                            <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                            <div class="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                <svg class="w-14 h-14 text-brand-dusty-rose/25" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 64 64">
                                    <rect x="6" y="6" width="52" height="52" rx="3"/>
                                    <circle cx="22" cy="22" r="7"/>
                                    <path stroke-linejoin="round" d="M6 44 l16-16 12 12 8-10 16 18"/>
                                </svg>
                                <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-dusty-rose/40">No image</span>
                            </div>
                        </div>

                        <!-- Badge contador de imágenes -->
                        <span
                            v-if="product.images.length > 1"
                            class="absolute top-2 right-2 z-10 bg-brand-ivory/80 font-sans text-[10px] tracking-widest uppercase text-brand-dusty-rose px-2 py-1"
                        >
                            {{ product.images.length }} photos
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="p-8 flex flex-col gap-4 flex-1">
                        <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                            {{ padRef(product.id) }}
                        </span>
                        <div class="flex-1">
                            <h3 class="font-display text-xl text-neutral-800 mb-2">{{ product.title }}</h3>
                            <p v-if="product.description" class="font-sans text-sm text-neutral-500 leading-relaxed line-clamp-3">
                                {{ product.description }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-brand-champagne">
                            <span v-if="product.price" class="font-sans text-sm font-medium text-brand-dusty-rose">
                                {{ formatPrice(product.price) }}
                            </span>
                            <span v-else class="font-sans text-xs tracking-widest uppercase text-neutral-400">
                                Request quote
                            </span>
                            <Link :href="`/products/${product.id}`"
                                class="font-sans text-xs tracking-[0.15em] uppercase text-brand-dusty-rose hover:text-neutral-800 transition-colors flex items-center gap-1.5"
                            >
                                View
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>

            <!-- CTA -->
            <div class="text-center mt-14">
                <Link href="/products"
                    class="inline-flex items-center gap-3 border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-8 py-4 hover:bg-brand-dusty-rose hover:text-white transition-colors"
                >
                    View All Components
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                </Link>
            </div>
        </div>
    </section>
</template>

<style>
/* Dots de paginación con colores de marca */
.cb-swiper .swiper-pagination-bullet {
    background: var(--color-brand-dusty-rose);
    opacity: 0.35;
    width: 5px;
    height: 5px;
}
.cb-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    width: 16px;
    border-radius: 3px;
    transition: width 0.3s ease;
}
.cb-swiper .swiper-pagination {
    bottom: 8px;
}
</style>
