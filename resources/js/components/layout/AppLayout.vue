<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@components/layout/Navbar.vue'
import Footer from '@components/layout/Footer.vue'
import { useReveal } from '@/composables/useReveal'

const page = ref<HTMLElement | null>(null)

// Un único observer para todos los [data-reveal] de la página
useReveal(page, { y: 26, duration: 0.7, margin: '0px 0px -20px 0px' })
</script>

<template>
    <div class="min-h-screen bg-brand-ivory flex flex-col">
        <Navbar />
        <main ref="page" class="flex-1 pt-16 lg:pt-20">
            <slot />
        </main>
        <Footer />
    </div>
</template>
