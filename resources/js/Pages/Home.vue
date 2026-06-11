<script setup lang="ts">
import Navbar            from '@components/layout/Navbar.vue'
import Footer            from '@components/layout/Footer.vue'
import HeroSection       from '@components/HeroSection.vue'
import CommitmentSection from '@components/CommitmentSection.vue'
import FeaturedProducts  from '@components/FeaturedProducts.vue'

interface Product {
    id: number
    title: string
    description: string | null
    price: number | null
    images: string[]
}

defineProps<{
    featuredProducts: Product[]
}>()
</script>

<template>
    <div class="min-h-screen bg-brand-ivory flex flex-col">
        <Navbar />
        <!-- Hero: full-bleed detrás del navbar, gestiona su propio pt -->
        <HeroSection />
        <main class="flex-1">
            <FeaturedProducts :products="featuredProducts" />
            <CommitmentSection />
        </main>
        <Footer />
    </div>
</template>
