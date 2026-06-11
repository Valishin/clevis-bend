<script setup lang="ts">
import AppLayout from '@components/layout/AppLayout.vue'
import CbButton  from '@components/CbButton.vue'
import { Link }  from '@inertiajs/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Feature { title: string | null; body: string }
interface Product {
    id: number; title: string; category: string | null
    description: string | null; price: number | null
    images: string[]; features: Feature[]
}

defineProps<{ product: Product }>()

const mainSwiper    = ref<any>(null)
const activeThumb   = ref(0)
const swiperModules = [Navigation, Pagination]

function goToSlide(i: number) {
    activeThumb.value = i
    mainSwiper.value?.slideToLoop(i)
}

function padRef(id: number) {
    return `CB-${String(id).padStart(3, '0')}`
}

function formatPrice(price: number | null) {
    if (!price) return null
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)
}

const featureIcons: Record<string, string> = {
    default:   'M12 6v6m0 0v6m0-6h6m-6 0H6',
    material:  'M3 7h18M3 12h18M3 17h18',
    materials: 'M3 7h18M3 12h18M3 17h18',
    origin:    'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z',
    lead:      'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    time:      'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    order:     'M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM1 10h22',
    size:      'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
}

function getIcon(title: string | null) {
    if (!title) return featureIcons.default
    const key = Object.keys(featureIcons).find(k => title.toLowerCase().includes(k))
    return key ? featureIcons[key] : featureIcons.default
}
</script>

<template>
    <AppLayout>
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-16">

            <!-- Back -->
            <Link
                href="/products"
                class="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-neutral-400 hover:text-brand-dusty-rose transition-colors mb-6 lg:mb-10"
            >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg>
                Back to Products
            </Link>

            <!-- Layout: stacked mobile / 2-col desktop -->
            <div class="flex flex-col lg:grid lg:items-start gap-8 lg:gap-16"
                 style="grid-template-columns: 420px 1fr">

                <!-- ── Images ── -->
                <div class="w-full flex flex-col gap-3 lg:sticky lg:top-24">

                    <!-- Swiper principal -->
                    <div class="w-full overflow-hidden bg-brand-champagne/40"
                         style="height: min(72vw, 420px)">
                        <Swiper
                            v-if="product.images.length > 0"
                            :modules="swiperModules"
                            :navigation="product.images.length > 1"
                            :pagination="product.images.length > 1 ? { clickable: true } : false"
                            loop
                            class="w-full h-full cb-swiper"
                            @swiper="(s:any) => mainSwiper = s"
                            @slide-change="(s:any) => activeThumb = s.realIndex"
                        >
                            <SwiperSlide v-for="(img, i) in product.images" :key="i">
                                <img :src="img" :alt="`${product.title} ${i+1}`"
                                     class="w-full h-full object-cover object-center"/>
                            </SwiperSlide>
                        </Swiper>

                        <div v-if="!product.images.length"
                             class="w-full h-full flex items-center justify-center">
                            <svg class="w-12 h-12 text-brand-dusty-rose/20" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 64 64">
                                <rect x="6" y="6" width="52" height="52" rx="3"/>
                                <circle cx="22" cy="22" r="7"/>
                                <path d="M6 44l16-16 12 12 8-10 16 18"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Thumbnails -->
                    <div v-if="product.images.length > 1"
                         class="flex gap-2 overflow-x-auto pb-1"
                         style="-webkit-overflow-scrolling: touch; scrollbar-width: none">
                        <button
                            v-for="(img, i) in product.images"
                            :key="i"
                            class="flex-none w-14 h-14 sm:w-16 sm:h-16 overflow-hidden transition-opacity duration-200"
                            :class="activeThumb === i ? 'opacity-100 outline outline-2 outline-brand-dusty-rose outline-offset-1' : 'opacity-40'"
                            @click="goToSlide(i)"
                        >
                            <img :src="img" :alt="`thumb ${i+1}`" class="w-full h-full object-cover"/>
                        </button>
                    </div>
                </div>

                <!-- ── Info ── -->
                <div class="flex flex-col gap-6">

                    <!-- Ref / category -->
                    <p class="font-sans text-xs tracking-[0.2em] uppercase text-neutral-400">
                        {{ padRef(product.id) }}
                        <span v-if="product.category"> / {{ product.category }}</span>
                    </p>

                    <!-- Title -->
                    <div class="flex flex-col gap-3">
                        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl text-neutral-800 leading-tight">
                            {{ product.title }}
                        </h1>
                        <span v-if="product.category"
                              class="self-start border border-brand-champagne font-sans text-xs tracking-[0.15em] uppercase text-brand-dusty-rose px-3 py-1">
                            {{ product.category }}
                        </span>
                    </div>

                    <!-- Description -->
                    <p v-if="product.description"
                       class="font-sans text-sm lg:text-base text-neutral-600 leading-relaxed">
                        {{ product.description }}
                    </p>

                    <hr class="border-brand-champagne"/>

                    <!-- Features -->
                    <div v-if="product.features.length" class="flex flex-col gap-4">
                        <p class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose">
                            Technical Specifications
                        </p>
                        <div class="divide-y divide-brand-champagne">
                            <div v-for="(feat, i) in product.features" :key="i"
                                 class="flex gap-3 py-4">
                                <svg class="w-4 h-4 shrink-0 mt-0.5 text-brand-dusty-rose/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="getIcon(feat.title)"/>
                                </svg>
                                <div>
                                    <p v-if="feat.title"
                                       class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">
                                        {{ feat.title }}
                                    </p>
                                    <p class="font-sans text-sm text-neutral-800 leading-relaxed whitespace-pre-line">
                                        {{ feat.body }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="border-brand-champagne"/>

                    <!-- Price -->
                    <div v-if="product.price" class="flex items-center gap-3">
                        <span class="font-sans text-xs tracking-[0.2em] uppercase text-neutral-400">Price</span>
                        <span class="font-display text-2xl text-brand-dusty-rose">{{ formatPrice(product.price) }}</span>
                    </div>

                    <!-- CTAs -->
                    <div class="flex flex-col sm:flex-row flex-wrap gap-3">
                        <CbButton href="/contact" variant="solid">
                            Request Technical Sample
                            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                            </svg>
                        </CbButton>
                        <CbButton href="/contact" variant="outline">
                            Consult with Expert
                        </CbButton>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
.cb-swiper :deep(.swiper-pagination-bullet) {
    background: var(--color-brand-dusty-rose);
    opacity: 0.4;
    width: 5px; height: 5px;
}
.cb-swiper :deep(.swiper-pagination-bullet-active) {
    opacity: 1; width: 14px; border-radius: 3px;
    transition: width 0.3s ease;
}
.cb-swiper :deep(.swiper-button-next),
.cb-swiper :deep(.swiper-button-prev) {
    color: var(--color-brand-dusty-rose);
    background: rgba(250,241,242,0.85);
    width: 32px; height: 32px;
}
.cb-swiper :deep(.swiper-button-next::after),
.cb-swiper :deep(.swiper-button-prev::after) {
    font-size: 12px; font-weight: 700;
}
</style>
